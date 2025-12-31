import React from "react";
import Link from "next/link";
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';

export default function RewardsSectionTwo() {
    return (
        <section className="w-full bg-white relative flex flex-col items-center justify-center py-10 overflow-hidden z-20">
            <div className="w-[95%] max-w-[1800px] mx-auto">

                {/* Header */}
                <RevealSection>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="text-left">
                            <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-black leading-tight font-[family-name:var(--font-sora)] mb-4">
                                Flexible & Secure Payout Options
                            </h2>
                            <p className="text-[#595959] text-base md:text-lg max-w-[600px] leading-relaxed font-[family-name:var(--font-sora)]">
                                Enjoy hassle-free payouts as a reward for your simulated trading. Because you shouldn't wait for your money.
                            </p>
                        </div>
                        <div>
                            <Link href="https://dashboard.sharkfunded.com/register" className="relative group overflow-hidden rounded-full min-w-[140px] px-8 py-3 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                <span className="relative z-10 flex items-center justify-center w-full h-full text-base font-normal text-white font-sans tracking-[-0.05em]">
                                    Get Funded
                                </span>
                            </Link>
                        </div>
                    </div>
                </RevealSection>


                {/* Daily Payouts Banner */}
                <RevealSection>
                    <div className="w-full rounded-[32px] bg-[#020513] relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/5 shadow-2xl mb-16">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

                        {/* Left Content */}
                        <div className="flex items-center gap-6 relative z-10 text-left">
                            {/* Shield Icon Container */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center shadow-inner border border-white/5 flex-shrink-0">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-sora)]">Daily Payouts</h3>
                                <p className="text-gray-400 max-w-[300px] text-sm md:text-base leading-relaxed font-[family-name:var(--font-sora)]">
                                    Enjoy faster rewards with payouts requests handled in a Single Day.
                                </p>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <StaggerContainer className="flex items-center gap-8 md:gap-16 relative z-10 text-center md:text-left">
                            <StaggerItem>
                                <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-sora)]">6H</div>
                                <div className="text-gray-400 text-xs md:text-sm">Avg. Payout Time</div>
                            </StaggerItem>
                            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
                            <StaggerItem>
                                <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-sora)]">24/7</div>
                                <div className="text-gray-400 text-xs md:text-sm">Customer Support</div>
                            </StaggerItem>
                            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
                            <StaggerItem>
                                <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-sora)]">$100K+</div>
                                <div className="text-gray-400 text-xs md:text-sm">Overall Payouts</div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </RevealSection>


                {/* Certificates Grid / Strips */}
                <StaggerContainer className="flex flex-col gap-6 items-center w-full overflow-hidden">

                    {/* Strip 1: Scroll Left */}
                    <StaggerItem className="w-full relative group">
                        <div className="flex gap-6 animate-scroll-fast w-max will-change-[transform] transform-gpu">
                            {/* Cycle through certs 1-8 */}
                            {[...Array(4)].map((_, rep) => (
                                <React.Fragment key={rep}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <div key={`s1-${rep}-${num}`} className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-[160px] w-auto">
                                            <img
                                                src={`/assets/payout_${num}.webp?v=whatsapp`}
                                                alt={`Certificate ${num}`}
                                                className="h-full w-auto object-contain opacity-50 transition-all group-hover:opacity-100 group-hover:scale-[1.02] backface-hidden"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    </StaggerItem>

                    {/* Strip 2: Scroll Right */}
                    <StaggerItem className="w-full relative group">
                        <div className="flex gap-6 animate-scroll-fast-reverse w-max will-change-[transform] transform-gpu">
                            {/* Cycle through certs 9-16 */}
                            {[...Array(4)].map((_, rep) => (
                                <React.Fragment key={rep}>
                                    {[9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                                        <div key={`s2-${rep}-${num}`} className="bg-white p-2 rounded-xl shadow-md border border-gray-100 flex items-center justify-center h-[160px] w-auto">
                                            <img
                                                src={`/assets/payout_${num}.webp?v=whatsapp`}
                                                alt={`Certificate ${num}`}
                                                className="h-full w-auto object-contain opacity-90 transition-all group-hover:opacity-100 group-hover:scale-[1.02] backface-hidden"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    </StaggerItem>

                    {/* Strip 3: Scroll Left */}
                    <StaggerItem className="w-full relative group">
                        <div className="flex gap-6 animate-scroll-fast w-max will-change-[transform] transform-gpu">
                            {/* Cycle through certs 17-23 */}
                            {[...Array(4)].map((_, rep) => (
                                <React.Fragment key={rep}>
                                    {[17, 18, 19, 20, 21, 22, 23].map((num) => (
                                        <div key={`s3-${rep}-${num}`} className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-[160px] w-auto">
                                            <img
                                                src={`/assets/payout_${num}.webp?v=whatsapp`}
                                                alt={`Certificate ${num}`}
                                                className="h-full w-auto object-contain opacity-50 transition-all group-hover:opacity-100 group-hover:scale-[1.02] backface-hidden"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
                    </StaggerItem>

                    <button className="px-8 py-3 bg-[#020513] text-white font-bold rounded-full relative z-30 -mt-20 hover:scale-110 active:scale-95 transition-all shadow-xl font-[family-name:var(--font-sora)] border border-white/10 hover:shadow-blue-500/20">
                        View All
                    </button>

                </StaggerContainer>

            </div>
        </section>
    );
}
