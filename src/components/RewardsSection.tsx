"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RevealSection from './RevealSection';
// Removed StaggerContainer/StaggerItem to ensure visibility
import Link from 'next/link';

interface Transaction {
    txID: string;
    timestamp: number;
    amount: string; // The formatted one
    numericAmount?: number; // The raw number
    token?: string;
    date?: number; // fallback
}

export default function RewardsSection() {
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

    // Helper to format date
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
        if (!hash) return '';
        // Truncate to first 10 and last 6 chars for cleaner display
        return `${hash.substring(0, 10)}...${hash.substring(hash.length - 6)}`;
    };

    return (
        <section className="w-full bg-white relative flex flex-col items-center justify-center py-10 px-4 overflow-hidden z-20">

            <div className="w-full max-w-[1200px] mx-auto text-center">

                {/* Headers */}
                <RevealSection>
                    <div className="mb-16">
                        <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-black leading-tight font-[family-name:var(--font-sora)] mb-6">
                            Live Payouts Straight from the Server!
                        </h2>
                        <p className="text-[#595959] text-base md:text-lg max-w-[800px] mx-auto leading-relaxed font-[family-name:var(--font-sora)]">
                            Every profit transaction is recorded on the blockchain, allowing you to track and verify your payouts in real-time through trusted third-party tools like Tronscan.
                        </p>
                    </div>
                </RevealSection>

                {/* Table Container */}
                <RevealSection>
                    <div className="w-full bg-[#DDE9F4] rounded-[32px] overflow-hidden shadow-xl border border-white/50 p-1">

                        {/* Inner Scrollable Area */}
                        <div className="w-full bg-[#EAF2F9] rounded-[28px] max-h-[500px] overflow-y-auto overflow-x-auto custom-scrollbar relative">

                            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
                                <thead className="sticky top-0 bg-[#EAF2F9] z-10 shadow-sm">
                                    <tr>
                                        <th className="py-4 md:py-6 px-4 md:px-8 text-black font-bold font-[family-name:var(--font-sora)] whitespace-nowrap">Date</th>
                                        <th className="py-4 md:py-6 px-4 md:px-8 text-black font-bold font-[family-name:var(--font-sora)] whitespace-nowrap">Transaction Hash</th>
                                        <th className="py-4 md:py-6 px-4 md:px-8 text-black font-bold font-[family-name:var(--font-sora)] whitespace-nowrap">Payout</th>
                                    </tr>
                                </thead>
                                {/* Replaced StaggerContainer with standard tbody to fix visibility issues */}
                                <tbody className="text-[#5E6D82]">
                                    {loading && (
                                        <tr>
                                            <td colSpan={3} className="py-12 text-center text-[#5E6D82]">
                                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                                            </td>
                                        </tr>
                                    )}

                                    {!loading && payouts.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="py-12 text-center text-[#5E6D82] font-[family-name:var(--font-sora)]">
                                                loading...
                                            </td>
                                        </tr>
                                    )}

                                    {!loading && payouts.map((row, index) => (
                                        <tr key={row.txID || index} className="border-b border-[#D1DEEA] last:border-0 hover:bg-white/30 transition-colors cursor-default group">
                                            <td className="py-4 md:py-5 px-4 md:px-8 text-[#5E6D82] text-xs md:text-sm font-medium font-[family-name:var(--font-sora)] whitespace-nowrap">
                                                {formatDate(row.timestamp || row.date || 0)}
                                            </td>
                                            <td className="py-4 md:py-5 px-4 md:px-8 text-[#3D8BFF] text-xs md:text-sm font-medium font-[family-name:var(--font-sora)] truncate max-w-[150px] md:max-w-[300px] cursor-pointer hover:underline transition-all group-hover:pl-4 md:group-hover:pl-10">
                                                <Link href={`https://tronscan.org/#/transaction/${row.txID}`} target="_blank">
                                                    {truncateHash(row.txID)}
                                                </Link>
                                            </td>
                                            <td className="py-4 md:py-5 px-4 md:px-8 text-[#5E6D82] text-xs md:text-sm font-medium font-[family-name:var(--font-sora)] font-bold whitespace-nowrap">
                                                ${(row.numericAmount || parseFloat(row.amount.replace('$', ''))).toLocaleString()} <span className="text-[10px] md:text-xs font-normal">{row.token || 'USDT'}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Scrollbar Customization (Basic approach via class, requires global css or style) */}
                        </div>

                        {/* Footer Stats Bar */}
                        <div className="bg-[#CFDEEB] px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between text-[#5E6D82] text-xs md:text-sm font-medium font-[family-name:var(--font-sora)] gap-2 md:gap-0">

                            <div className="text-[#3D8BFF] order-first md:order-none mb-2 md:mb-0">Real-Time Payout Transactions</div>
                            <div className="flex items-center gap-2 font-bold text-black">
                                {/* Shark Logo */}
                                <img src="/assets/shark-logo.svg" alt="SharkFunded Logo" className="w-5 h-5" />
                                SharkFunded
                            </div>
                        </div>
                    </div>
                </RevealSection>

                {/* Bottom Disclaimer */}
                <RevealSection>
                    <p className="text-[#818089] text-sm md:text-base mt-12 max-w-[800px] mx-auto leading-relaxed font-[family-name:var(--font-sora)] text-center">
                        This ensures full accountability and transparency, giving you complete confidence in the integrity of your trading journey.
                    </p>
                </RevealSection>

            </div>
        </section>
    );
}
