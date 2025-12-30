"use client";

import { useEffect, useState } from "react";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import AnimatedHeading from "./animations/AnimatedHeading";
import Link from 'next/link';

// Types for Transaction Data
interface Transaction {
    txID: string;
    timestamp: number;
    amount: number;
    token: string;
}

export default function PayoutsSection() {
    const [payouts, setPayouts] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPayouts() {
            try {
                const res = await fetch('/api/payouts');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                if (data.payouts) {
                    setPayouts(data.payouts);
                }
            } catch (error) {
                console.error("Error loading payouts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPayouts();

        // Refresh every 60 seconds
        const interval = setInterval(fetchPayouts, 60000);
        return () => clearInterval(interval);
    }, []);

    // Helper to format date relative or short
    const formatDate = (ts: number) => {
        const date = new Date(ts);
        return date.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    // Helper to truncate hash
    const truncateHash = (hash: string) => {
        return `${hash.substring(0, 8)}...`;
    };

    return (
        <section className="w-full relative z-20 py-24 mb-20">
            <div className="w-full max-w-[1240px] mx-auto px-4 flex flex-col items-center">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-green-400 uppercase tracking-widest font-[family-name:var(--font-sora)]">Live Feed</span>
                    </div>

                    <div style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontSize: 'clamp(32px, 5vw, 60px)',
                        letterSpacing: 'clamp(-1px, -0.05em, -3px)',
                        lineHeight: '1.1',
                        color: 'white'
                    }}>
                        <AnimatedHeading text="Real Payouts via Blockchain" />
                    </div>
                    <p className="text-white/60 max-w-2xl text-center mt-2">
                        Every profit transaction is recorded on the blockchain, allowing you to track and verify your payouts in real-time through trusted third-party tools like TronScan.
                    </p>
                </div>

                {/* Table / List Container */}
                <StaggerContainer className="w-full max-w-[1000px] backdrop-blur-xl bg-[#0A0B1E]/80 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 px-6 py-5 bg-white/5 border-b border-white/5 text-white/50 text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-sora)]">
                        <div className="col-span-1">Date</div>
                        <div className="col-span-1">Transaction Hash</div>
                        <div className="col-span-1 text-right">Payout</div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="p-12 flex justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && payouts.length === 0 && (
                        <div className="p-12 flex justify-center text-white/40 text-sm">
                            Waiting for live transactions... (Check .env configuration)
                        </div>
                    )}

                    {/* Data Rows */}
                    {!loading && payouts.map((tx, index) => (
                        <StaggerItem key={tx.txID} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <div className="grid grid-cols-3 px-6 py-5 items-center">
                                {/* Date */}
                                <div className="text-white/80 text-sm font-[family-name:var(--font-sora)]">
                                    {formatDate(tx.timestamp)}
                                </div>

                                {/* Hash */}
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-mono cursor-pointer hover:text-blue-300 transition-colors">
                                    <Link href={`https://tronscan.org/#/transaction/${tx.txID}`} target="_blank" className="flex items-center gap-2">
                                        <span>{truncateHash(tx.txID)}</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </Link>
                                </div>

                                {/* Payout (Amount) */}
                                <div className="text-right font-[family-name:var(--font-sora)] font-bold text-white text-lg">
                                    <span className="text-white/40 text-sm font-normal mr-1">$</span>
                                    {tx.amount.toLocaleString()}
                                    <span className="text-white/40 text-xs font-normal ml-1">{tx.token}</span>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}

                    {/* Live Indicator / Footer */}
                    <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Updating live from Blockchain
                        </div>
                        {/* Only show count if we actually have payouts */}

                    </div>
                </StaggerContainer>

            </div>
        </section>
    );
}
