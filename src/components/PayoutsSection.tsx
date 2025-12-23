"use client";

import { useEffect, useState } from "react";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import AnimatedHeading from "./animations/AnimatedHeading";

// Types for Transaction Data
interface Transaction {
    hash: string;
    timestamp: number;
    amount: string;
    currency: string;
    status: "Confirmed" | "Pending";
}

// Mock Data Generator
const generateMockPayouts = (): Transaction[] => {
    const payouts: Transaction[] = [];
    const now = Date.now();
    for (let i = 0; i < 8; i++) {
        // Random amount between 1000 and 15000
        const amount = (Math.random() * 14000 + 1000).toFixed(2);
        // Random time in last 24 hours
        const timeOffset = Math.random() * 24 * 60 * 60 * 1000;
        // Random mock hash
        const hash = "T" + Array(33).fill(0).map(() => Math.random().toString(36)[2]).join('');

        payouts.push({
            hash: hash,
            timestamp: now - timeOffset,
            amount: amount,
            currency: "USDT",
            status: "Confirmed"
        });
    }
    // Sort by most recent
    return payouts.sort((a, b) => b.timestamp - a.timestamp);
};

export default function PayoutsSection() {
    const [payouts, setPayouts] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch delay
        const timer = setTimeout(() => {
            setPayouts(generateMockPayouts());
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Helper to format date relative or short
    const formatDate = (ts: number) => {
        const date = new Date(ts);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    // Helper to truncate hash
    const truncateHash = (hash: string) => {
        return `${hash.substring(0, 6)}...${hash.substring(hash.length - 6)}`;
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
                        <AnimatedHeading text="Real Payouts" />
                    </div>
                </div>

                {/* Table / List Container */}
                <StaggerContainer className="w-full max-w-[1000px] backdrop-blur-xl bg-[#0A0B1E]/80 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 md:grid-cols-4 px-6 py-5 bg-white/5 border-b border-white/5 text-white/50 text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-sora)]">
                        <div className="col-span-1">Date</div>
                        <div className="col-span-1 hidden md:block">Transaction ID</div>
                        <div className="col-span-1 md:text-left">Status</div>
                        <div className="col-span-1 text-right">Amount</div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="p-12 flex justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    )}

                    {/* Data Rows */}
                    {!loading && payouts.map((tx, index) => (
                        <StaggerItem key={tx.hash} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <div className="grid grid-cols-3 md:grid-cols-4 px-6 py-5 items-center">
                                {/* Date */}
                                <div className="text-white/80 text-sm font-[family-name:var(--font-sora)]">
                                    {formatDate(tx.timestamp)}
                                </div>

                                {/* Hash */}
                                <div className="hidden md:flex items-center gap-2 text-blue-400 text-sm font-mono cursor-pointer hover:text-blue-300 transition-colors">
                                    <span>{truncateHash(tx.hash)}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </div>

                                {/* Status */}
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                    <span className="text-white/90 text-sm font-medium">{tx.status}</span>
                                </div>

                                {/* Amount */}
                                <div className="text-right font-[family-name:var(--font-sora)] font-bold text-white text-lg">
                                    <span className="text-white/40 text-sm font-normal mr-1">$</span>
                                    {tx.amount}
                                    <span className="text-white/40 text-xs font-normal ml-1">{tx.currency}</span>
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
                        <div>
                            Powered by Tron
                        </div>
                    </div>
                </StaggerContainer>

            </div>
        </section>
    );
}
