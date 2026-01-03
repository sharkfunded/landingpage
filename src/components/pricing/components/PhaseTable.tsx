import React from 'react';
import Link from 'next/link';
import { getInstantRules, getDailyPayoutsRules, getStandardRules } from '../data/rules';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PhaseTableProps {
    selectedChallenge: string;
    data: any;
    selectedSize: string;
}

export default function PhaseTable({ selectedChallenge, data, selectedSize }: PhaseTableProps) {
    // Determine which rules to use
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let rows: any[] = [];
    if (selectedChallenge === 'Instant Funding') {
        rows = getInstantRules(data);
    } else if (selectedChallenge === 'Daily Payouts') {
        rows = getDailyPayoutsRules(data);
    } else {
        rows = getStandardRules(data);
    }

    // Calculate ColSpan
    const colSpan = 1 +
        (selectedChallenge !== 'Instant Funding' ? 1 : 0) +
        (selectedChallenge !== 'One-Step Challenge' && selectedChallenge !== 'Instant Funding' ? 1 : 0);

    return (
        <div className="w-full overflow-x-auto rounded-3xl border border-white/5 bg-[#151932]/30 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white/[0.02]">
                        <th className="p-6 text-white/40 font-medium w-[25%]">Target Metric</th>
                        {/* Step 1: Hide for Instant */}
                        {selectedChallenge !== 'Instant Funding' && (
                            <th className="p-6 text-blue-400 font-bold text-lg w-[25%] text-center">Step 1</th>
                        )}
                        {/* Step 2: Hide for 1-Step, Instant (Daily Payouts now shows Step 2) */}
                        {selectedChallenge !== 'One-Step Challenge' && selectedChallenge !== 'Instant Funding' && (
                            <th className="p-6 text-blue-400 font-bold text-lg w-[25%] text-center">Step 2</th>
                        )}
                        <th className="p-6 text-green-400 font-bold text-lg text-center">Funded Stage</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {rows.map((row: any, idx: number) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                            <td className="p-6 text-white font-medium flex items-center gap-2">
                                {row.label}
                            </td>
                            {selectedChallenge === 'Instant Funding' ? (
                                <td colSpan={colSpan} className="p-6 text-center text-white/90 font-bold text-lg">{row.val}</td>
                            ) : (
                                <>
                                    <td className="p-6 text-center text-white/90 font-bold text-lg">{row.s1}</td>
                                    {selectedChallenge !== 'One-Step Challenge' && (
                                        <td className="p-6 text-center text-white/90 font-bold text-lg">{row.s2}</td>
                                    )}
                                    <td className="p-6 text-center text-white/90 font-bold text-lg">{row.funded}</td>
                                </>
                            )}
                        </tr>
                    ))}

                    {/* Price Row */}
                    {/* Price Row */}
                    <tr className="bg-[#1E2342]/50">
                        <td
                            colSpan={1 + colSpan}
                            className="p-6 md:p-8"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <span className="text-white font-bold text-xl md:text-2xl">Price</span>

                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <div className="flex items-baseline gap-3">

                                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{data.price}</span>
                                    </div>
                                    <Link href={`https://dashboard.sharkfunded.com/checkoutpage?plan=${selectedSize}`}>
                                        <button className="px-10 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 whitespace-nowrap leading-none">
                                            Get Funded
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
