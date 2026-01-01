import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getInstantRules, getDailyPayoutsRules, getStandardRules } from '../data/rules';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface MobileRulesCardProps {
    selectedChallenge: string;
    isPrime: boolean;
    data: any;
    selectedSize: string;
}

export default function MobileRulesCard({ selectedChallenge, isPrime, data, selectedSize }: MobileRulesCardProps) {
    const [activePhase, setActivePhase] = useState<'s1' | 's2' | 'funded'>('s1');

    // Reset phase when challenge changes
    useEffect(() => {
        setActivePhase('s1');
    }, [selectedChallenge]);

    // Determine rows to display
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let rows: any[] = [];
    if (selectedChallenge === 'Instant Funding') {
        rows = getInstantRules(data);
    } else if (selectedChallenge === 'Daily Payouts') {
        rows = getDailyPayoutsRules(data);
    } else {
        rows = getStandardRules(data);
    }

    const isInstant = selectedChallenge === 'Instant Funding';
    const isOneStep = selectedChallenge === 'One-Step Challenge';

    return (
        <div className="w-full bg-[#151932]/30 backdrop-blur-sm rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden mt-2">
            {/* Price Header */}
            <div className="flex flex-col items-center mb-6">

                <span className="text-4xl font-bold text-white mb-4">{data.price}</span>
                <Link href={`https://dashboard.sharkfunded.com/checkoutpage?plan=${selectedSize}`} className="w-full">
                    <button className="w-full py-3.5 rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-transform">
                        Get Funded
                    </button>
                </Link>
            </div>

            {/* Phase Tabs (Only for non-Instant) */}
            {!isInstant && (
                <div className="flex p-1 mb-6 bg-[#0A0C1A] rounded-xl border border-white/5">
                    <button
                        onClick={() => setActivePhase('s1')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${activePhase === 's1' ? 'bg-[#1E233B] text-blue-400 shadow-sm ring-1 ring-white/10' : 'text-white/40 hover:text-white'}`}
                    >
                        Step 1
                    </button>
                    {!isOneStep && (
                        <button
                            onClick={() => setActivePhase('s2')}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${activePhase === 's2' ? 'bg-[#1E233B] text-blue-400 shadow-sm ring-1 ring-white/10' : 'text-white/40 hover:text-white'}`}
                        >
                            Step 2
                        </button>
                    )}
                    <button
                        onClick={() => setActivePhase('funded')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${activePhase === 'funded' ? 'bg-[#1E233B] text-green-400 shadow-sm ring-1 ring-white/10' : 'text-white/40 hover:text-white'}`}
                    >
                        Funded
                    </button>
                </div>
            )}

            {/* Rules List */}
            <div className="space-y-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {rows.map((row: any, idx: number) => {
                    // Determine value to show
                    let value = '-';
                    if (isInstant) {
                        value = row.val;
                    } else {
                        value = row[activePhase];
                    }

                    // Special layout for Instruments row
                    if (row.label === 'Instruments') {
                        return (
                            <div key={idx} className="flex flex-col items-center py-3 border-b border-white/5 last:border-0 gap-2">
                                <span className="text-white/60 text-sm font-medium">{row.label}</span>
                                <span className={`font-bold text-center text-sm leading-relaxed ${activePhase === 'funded' && !isInstant ? 'text-green-400' : 'text-white'}`}>
                                    {value}
                                </span>
                            </div>
                        );
                    }

                    return (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                            <span className="text-white/60 text-sm font-medium">{row.label}</span>
                            <span className={`font-bold ${activePhase === 'funded' && !isInstant ? 'text-green-400' : 'text-white'}`}>
                                {value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
