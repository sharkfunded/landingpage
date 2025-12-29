import React from "react";
import Link from "next/link";
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';

interface HowItWorksSectionProps {
    showStats?: boolean;
}

export default function HowItWorksSection({ showStats = true }: HowItWorksSectionProps) {
    return (
        <section className="w-full bg-[#030511] py-12 px-4 relative overflow-hidden text-center z-10">
            {/* Background Rays (Beam) - Global for Section */}
            <div className="absolute inset-x-0 top-0 h-full z-20 mix-blend-screen pointer-events-none overflow-hidden">
                <img
                    alt="Background Rays"
                    className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-full max-w-none h-[120%] object-cover opacity-60 transform-gpu"
                    src="/assets/how-it-works-bg.png"
                    loading="lazy"
                />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* --- STATS SECTION --- */}
                {showStats && (
                    <RevealSection>
                        <div className="relative rounded-[50px] border border-white/5 bg-[#15172E] p-3 md:p-4 mb-10 overflow-hidden max-w-[1000px] mx-auto">
                            {/* Stats Grid */}
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
                                {/* Main Big Card */}
                                <StaggerItem className="md:col-span-3 rounded-[40px] bg-black border border-white/5 p-8 flex flex-col items-center justify-center relative overflow-hidden group min-h-[200px]">
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60" />
                                    <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4B7CFF] mb-2 font-[family-name:var(--font-sora)] relative z-10">
                                        $1 Million+
                                    </h2>
                                    <p className="text-gray-400 font-[family-name:var(--font-sora)] relative z-10">
                                        Total Payouts paid out to SharkFunded Traders!
                                    </p>
                                </StaggerItem>

                                {/* Small Stat 1 */}
                                <StaggerItem className="rounded-[40px] bg-black border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[160px]">
                                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-900/30 to-transparent opacity-80" />
                                    <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4B7CFF] mb-1 font-[family-name:var(--font-sora)] relative z-10">
                                        100000+
                                    </h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-sora)] relative z-10">
                                        Active Traders!
                                    </p>
                                </StaggerItem>

                                {/* Small Stat 2 */}
                                <StaggerItem className="rounded-[40px] bg-black border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[160px]">
                                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-900/30 to-transparent opacity-80" />
                                    <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4B7CFF] mb-1 font-[family-name:var(--font-sora)] relative z-10">
                                        24hrs
                                    </h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-sora)] relative z-10">
                                        Guaranteed Payouts
                                    </p>
                                </StaggerItem>

                                {/* Small Stat 3 */}
                                <StaggerItem className="rounded-[40px] bg-black border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[160px]">
                                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-900/30 to-transparent opacity-80" />
                                    <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4B7CFF] mb-1 font-[family-name:var(--font-sora)] relative z-10">
                                        9,481
                                    </h3>
                                    <p className="text-gray-400 text-sm font-[family-name:var(--font-sora)] relative z-10">
                                        Funded Accounts
                                    </p>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </RevealSection>
                )}


                {/* --- HOW IT WORKS SECTION --- */}
                <RevealSection>
                    <div className="mb-12">
                        <h2 className="text-[clamp(32px,4vw,52px)] font-bold text-white mb-4 font-[family-name:var(--font-sora)]">
                            How it Works?
                        </h2>
                        <p className="text-[#818089] text-base md:text-lg max-w-[600px] mx-auto font-[family-name:var(--font-sora)] font-light">
                            The main reasons why traders choose to trade with SharkFunded.
                        </p>
                    </div>
                </RevealSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    {/* STEP 1 */}
                    <StaggerItem className="rounded-[32px] bg-gradient-to-b from-[#0E1235] to-[#040510] border border-white/10 p-1 flex flex-col relative group overflow-hidden h-[500px]">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-8 left-8 z-30 pointer-events-none">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white/90 text-xs font-medium border border-white/10 shadow-lg">
                                <span className="bg-white text-black p-0.5 rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
                                Step 1
                            </div>
                        </div>

                        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-[200px]">
                            <div className="absolute inset-0 mix-blend-screen pointer-events-none transform-gpu">
                                <img
                                    alt="Evaluation Step"
                                    className="absolute h-[130.9%] left-[-40.94%] max-w-none top-[-10.68%] w-[183.41%] object-cover pointer-events-none scale-[0.85] transition-transform duration-700 group-hover:scale-[0.9] transform-gpu will-change-transform"
                                    src="/assets/step1-image.png"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="p-8 pt-0 text-left relative z-10">
                            <h3 className="text-xl font-bold text-[#4B7CFF] mb-2 font-[family-name:var(--font-sora)] tracking-wide">
                                EVALUATION
                            </h3>
                            <h4 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-sora)]">
                                Choose Evaluation
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-sora)]">
                                Choose between Instant Funding, 1 Phase or 2 Phase Evaluation!
                            </p>
                        </div>
                    </StaggerItem>

                    {/* STEP 2 */}
                    <StaggerItem className="rounded-[32px] bg-gradient-to-b from-[#0E1235] to-[#040510] border border-white/10 p-1 flex flex-col relative group overflow-hidden h-[500px]">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-8 left-8 z-30 pointer-events-none">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white/90 text-xs font-medium border border-white/10 shadow-lg">
                                <span className="bg-white text-black p-0.5 rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
                                Step 2
                            </div>
                        </div>

                        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-[200px]">
                            <div className="absolute inset-0 mix-blend-screen pointer-events-none transform-gpu">
                                <img
                                    alt="Funded Phase Step"
                                    className="absolute h-[171.35%] left-[-62.47%] max-w-none top-[-39.16%] w-[201.89%] object-cover pointer-events-none scale-[0.85] transition-transform duration-700 group-hover:scale-[0.9] transform-gpu will-change-transform"
                                    src="/assets/step2-image.png"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="p-8 pt-0 text-left relative z-10">
                            <h3 className="text-xl font-bold text-[#4B7CFF] mb-2 font-[family-name:var(--font-sora)] tracking-wide">
                                FUNDED PHASE
                            </h3>
                            <h4 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-sora)]">
                                Get Funded
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-sora)]">
                                Choose between Instant Funding, 1 Phase or 2 Phase Evaluation!
                            </p>
                        </div>
                    </StaggerItem>

                    {/* STEP 3 */}
                    <StaggerItem className="rounded-[32px] bg-gradient-to-b from-[#0E1235] to-[#040510] border border-white/10 p-1 flex flex-col relative group overflow-hidden h-[500px]">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-8 left-8 z-30 pointer-events-none">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white/90 text-xs font-medium border border-white/10 shadow-lg">
                                <span className="bg-white text-black p-0.5 rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
                                Step 3
                            </div>
                        </div>

                        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-[200px]">
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center transform-gpu">
                                <img
                                    alt="Payout Pockets"
                                    className="w-[120%] h-auto object-contain max-w-none transition-transform duration-700 group-hover:translate-y-[-10px] transform-gpu will-change-transform"
                                    src="/assets/step3-final.png"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="p-8 pt-0 text-left relative z-10">
                            <h3 className="text-xl font-bold text-[#4B7CFF] mb-2 font-[family-name:var(--font-sora)] tracking-wide">
                                PAYOUT
                            </h3>
                            <h4 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-sora)]">
                                Recieve Payouts!
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-sora)]">
                                Withdraw Payouts on Daily basis through Crypto.
                            </p>
                        </div>
                    </StaggerItem>

                </StaggerContainer>

                {/* CTA Button */}
                <RevealSection>
                    <div>
                        <Link href="https://dashboard.sharkfunded.com/register" className="relative group overflow-hidden rounded-full min-w-[120px] md:min-w-[140px] px-6 py-3 md:px-6 md:py-3 transition-transform hover:scale-110 active:scale-95 inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                            <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                            <span className="relative z-10 flex items-center justify-center w-full h-full text-[clamp(14px,1vw,16px)] font-normal text-white font-sans tracking-[-0.05em]">
                                Get Funded
                            </span>
                        </Link>
                    </div>
                </RevealSection>

            </div>
        </section>
    );
}
