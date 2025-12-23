import React from "react";
import { motion } from "framer-motion";
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';

export default function RewardsSection() {
    // Mock Data based on screenshot
    const payouts = [
        { date: "12/21/25, 5:00 PM", hash: "0xa76032b13fd6dbcd7b14a8e7e79f371228fe9279...", cert: "Opensea", amount: "$276" },
        { date: "12/20/25, 1:49 PM", hash: "0x354df182e5308bb79bb9069c9739f12380de32ec...", cert: "Opensea", amount: "$1,000" },
        { date: "12/20/25, 1:19 AM", hash: "0x64e408f6dfed9fc10cbc13e89ccd05be13444771...", cert: "Opensea", amount: "$160.11" },
        { date: "12/20/25, 1:06 AM", hash: "0xa420ff7a60d31cd73fd6287d6e70ee33d2849874...", cert: "Opensea", amount: "$239.74" },
        { date: "12/19/25, 11:23 PM", hash: "0x4af34301706559c958c42b81f11dbf8414d1626a...", cert: "Opensea", amount: "$289" },
        { date: "12/19/25, 9:03 PM", hash: "0xbb504df519c3fd7df918a076684c54da0f0e5439...", cert: "Opensea", amount: "$850" },
        { date: "12/19/25, 8:56 PM", hash: "0x1ee03ebb1601f2451261c1e83d206bc62842df1d...", cert: "Opensea", amount: "$55.28" },
        { date: "12/19/25, 8:51 PM", hash: "0x781ae2ec851e63409551769e405237fd7e8e4d7e...", cert: "Opensea", amount: "$600" },
    ];

    return (
        <section className="w-full bg-white relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden z-20">

            <div className="w-full max-w-[1200px] mx-auto text-center">

                {/* Headers */}
                <RevealSection>
                    <div className="mb-16">
                        <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-black leading-tight font-[family-name:var(--font-sora)] mb-6">
                            Live Payouts Straight from the Server!
                        </h2>
                        <p className="text-[#595959] text-base md:text-lg max-w-[800px] mx-auto leading-relaxed font-[family-name:var(--font-sora)]">
                            Every profit transaction is recorded on the blockchain, allowing you to track and verify your payouts in real-time through trusted third-party tools like Etherscan.
                        </p>
                    </div>
                </RevealSection>

                {/* Table Container */}
                <RevealSection>
                    <div className="w-full bg-[#DDE9F4] rounded-[32px] overflow-hidden shadow-xl border border-white/50 p-1">

                        {/* Inner Scrollable Area */}
                        <div className="w-full bg-[#EAF2F9] rounded-[28px] overflow-hidden max-h-[500px] overflow-y-auto custom-scrollbar relative">

                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-[#EAF2F9] z-10 shadow-sm">
                                    <tr>
                                        <th className="py-6 px-8 text-black font-bold font-[family-name:var(--font-sora)]">Date</th>
                                        <th className="py-6 px-8 text-black font-bold font-[family-name:var(--font-sora)]">Transaction Hash</th>
                                        <th className="py-6 px-8 text-black font-bold font-[family-name:var(--font-sora)]">Certificate</th>
                                        <th className="py-6 px-8 text-black font-bold font-[family-name:var(--font-sora)]">Payout</th>
                                    </tr>
                                </thead>
                                <StaggerContainer component="tbody" className="text-white/80">
                                    {payouts.map((row, index) => (
                                        <StaggerItem key={index} component="tr" className="border-b border-[#D1DEEA] last:border-0 hover:bg-white/30 transition-colors cursor-default group">
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)] whitespace-nowrap">{row.date}</td>
                                            <td className="py-5 px-8 text-[#3D8BFF] text-sm font-medium font-[family-name:var(--font-sora)] truncate max-w-[300px] cursor-pointer hover:underline transition-all group-hover:pl-10">{row.hash}</td>
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)]">{row.cert}</td>
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)] font-bold">{row.amount}</td>
                                        </StaggerItem>
                                    ))}
                                    {/* Repeat rows for scrolling demo */}
                                    {payouts.map((row, index) => (
                                        <StaggerItem key={`dup-${index}`} component="tr" className="border-b border-[#D1DEEA] last:border-0 hover:bg-white/30 transition-colors cursor-default group">
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)] whitespace-nowrap">{row.date}</td>
                                            <td className="py-5 px-8 text-[#3D8BFF] text-sm font-medium font-[family-name:var(--font-sora)] truncate max-w-[300px] cursor-pointer hover:underline transition-all group-hover:pl-10">{row.hash}</td>
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)]">{row.cert}</td>
                                            <td className="py-5 px-8 text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)] font-bold">{row.amount}</td>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </table>

                            {/* Scrollbar Customization (Basic approach via class, requires global css or style) */}
                        </div>

                        {/* Footer Stats Bar */}
                        <div className="bg-[#CFDEEB] px-8 py-5 flex items-center justify-between text-[#5E6D82] text-sm font-medium font-[family-name:var(--font-sora)]">
                            <div>Items Found : 683</div>
                            <div className="text-[#3D8BFF]">Real-Time Payout Transactions</div>
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
