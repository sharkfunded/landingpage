
import { NextResponse } from 'next/server';
import axios from 'axios';
import { TronWeb } from 'tronweb';
import { createClient } from '@supabase/supabase-js';

// Initialize TronWeb (Server-side only)
// using a dummy private key as we only need read access for this instance, 
// or dependent on how TronWeb is initialized for just addressing util.
// Actually, for just decoding and address utilities, we might not need a full instance connected to a node if we use the API directly,
// but the user's code uses `tronweb` for address conversion.
const TRONGRID_API_KEY = process.env.TRONGRID_API_KEY;
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { 'TRON-PRO-API-KEY': TRONGRID_API_KEY || '' },
    privateKey: '01' // Dummy key for read-only if required by constructor
});

// Environment Variables
const TRON_WALLET_ADDRESS = process.env.TRON_WALLET_ADDRESS; // The sender wallet
const USDT_CONTRACT_ADDRESS = process.env.USDT_CONTRACT_ADDRESS || 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

export const dynamic = 'force-dynamic'; // Ensure this route is not cached statically

export async function GET() {
    // 1. Initialize Supabase Admin Client
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    );

    // 2. Fetch Latest from TronGrid (Sync)
    let newTransactionsCount = 0;
    if (TRON_WALLET_ADDRESS && TRONGRID_API_KEY) {
        try {
            const response = await axios.get(`https://api.trongrid.io/v1/accounts/${TRON_WALLET_ADDRESS}/transactions`, {
                headers: { 'TRON-PRO-API-KEY': TRONGRID_API_KEY },
                params: { only_confirmed: true, limit: 200 }
            });

            if (response.data && response.data.data) {
                const transactions = response.data.data;

                for (const tx of transactions) {
                    const parsed = parseTransaction(tx);
                    if (!parsed) continue;

                    // Ensure it's from our wallet
                    const ownerAddressBase58 = tronWeb.address.fromHex(parsed.ownerAddressHex);
                    if (ownerAddressBase58 !== TRON_WALLET_ADDRESS) continue;

                    // Prepare DB Object
                    const payoutRecord = {
                        tx_id: tx.txID,
                        amount: parsed.amount.toString(),
                        recipient_address: parsed.toAddressHex ? tronWeb.address.fromHex(parsed.toAddressHex) : null,
                        payout_date: tx.block_timestamp,
                        created_at: new Date().toISOString()
                    };

                    // Upsert to Supabase
                    const { error } = await supabaseAdmin
                        .from('payout_history')
                        .upsert(payoutRecord, { onConflict: 'tx_id' });

                    if (!error) newTransactionsCount++;
                }
            }
        } catch (error) {
            console.error('Error fetching/syncing Tron transactions:', error);
            // Continue to fetch from DB even if sync fails
        }
    }

    // 3. Fetch Full History from DB
    const { data: historicalPayouts, error: dbError } = await supabaseAdmin
        .from('payout_history')
        .select('*')
        .order('payout_date', { ascending: false });

    if (dbError) {
        console.error('Error fetching payout history:', dbError);
        return NextResponse.json({ payouts: [] });
    }

    // 4. Apply Filters (Amount 50-980, Time Gap 10-20 mins)
    // We want to show a consistent stream of payouts, but not too clustered.
    const filteredPayouts: any[] = [];
    let lastTimestamp = 0;

    historicalPayouts?.forEach((p) => {
        const amount = parseFloat(p.amount);
        const timestamp = p.payout_date;

        // Filter 1: Amount between 50 and 980
        if (amount < 50 || amount > 980) return;

        // Filter 2: Time Gap 10-20 mins (approx)
        // We ensure at least 10 mins gap from the LAST ACCEPTED transaction
        // to avoid clustering.
        if (lastTimestamp === 0) {
            filteredPayouts.push(p);
            lastTimestamp = timestamp;
        } else {
            const diffMinutes = Math.abs(lastTimestamp - timestamp) / (1000 * 60);

            // "10 to 20 min gap" implies we want spacing.
            // We enforce MINIMUM 10 minutes. 
            // If the gap is huge (e.g. 2 hours), we still show it (it's real data), 
            // but we skip the ones that are 1 min, 5 mins, etc.
            if (diffMinutes >= 10) {
                filteredPayouts.push(p);
                lastTimestamp = timestamp;
            }
        }
    });

    // Map to frontend format
    const formattedPayouts = filteredPayouts.slice(0, 40).map(p => ({
        amount: formatCurrency(p.amount), // Formatted string for UI
        numericAmount: parseFloat(p.amount), // Raw number for math/table
        user: p.user_name || maskAddress(p.recipient_address),
        img: '/assets/payout_1.png?v=whatsapp',
        date: p.payout_date, // Keep original
        timestamp: p.payout_date, // Alias for frontend compatibility
        txID: p.tx_id, // Essential for table link
        token: 'USDT' // Default or derived
    }));

    return NextResponse.json({ payouts: formattedPayouts });
}

// Helper to format amount (e.g. 1000 -> $1,000)
function formatCurrency(amountStr: string) {
    const num = parseFloat(amountStr);
    return isNaN(num) ? amountStr : `$${num.toLocaleString()}`;
}

// Helper to mask address (e.g. T9x...j2k)
function maskAddress(address: string) {
    if (!address || address.length < 8) return 'Trader';
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
}

// Helper to parse transaction safely
function parseTransaction(tx: any) {
    try {
        const contract = tx.raw_data.contract[0];
        const type = contract.type;
        let amount = 0;
        let token = 'TRX';
        let ownerAddressHex = '';
        let toAddressHex = '';

        // STRICT FILTER: Only Allow USDT (TriggerSmartContract)
        // User explicitly requested "only usdt".
        if (type === 'TriggerSmartContract') {
            // TRC20 Transfer (e.g., USDT)
            const contractAddressHex = contract.parameter.value.contract_address;

            // Safe address conversion
            let contractAddress;
            try {
                contractAddress = tronWeb.address.fromHex(contractAddressHex);
            } catch (e) {
                return null;
            }

            ownerAddressHex = contract.parameter.value.owner_address;

            if (contractAddress === USDT_CONTRACT_ADDRESS) {
                token = 'USDT';
                const data = contract.parameter.value.data;

                // Method ID for transfer is a9059cbb
                if (data.startsWith('a9059cbb')) {
                    // Extract Recipient Address (first parameter)
                    // data: method(8) + address(64) + amount(64)
                    const toParam = data.substring(8, 72);
                    // Address is the last 20 bytes (40 chars) of the 32-byte word
                    toAddressHex = '41' + toParam.substring(24);

                    const amountHex = '0x' + data.substring(72);
                    amount = parseInt(amountHex, 16) / 1000000; // USDT has 6 decimals
                } else {
                    return null; // Not a transfer call
                }
            } else {
                return null; // Not USDT
            }
        } else {
            return null; // Not a supported transaction type (Ignores TRX TransferContract)
        }

        return {
            amount,
            token,
            ownerAddressHex,
            toAddressHex,
            txID: tx.txID,
            timestamp: tx.block_timestamp || tx.raw_data.timestamp
        };

    } catch (error) {
        console.error('Error parsing transaction:', error);
        return null;
    }
}
