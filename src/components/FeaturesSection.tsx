import React from "react";
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';
import ParallaxBlock from './animations/ParallaxBlock';

export default function FeaturesSection() {
    return (
        <section className="w-full bg-white py-24 px-4 relative text-left z-10">
            <div className="max-w-[1240px] mx-auto space-y-32">

                {/* --- BLOCK 1: Global Presence --- */}
                <RevealSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                        {/* Left: Image Placeholder */}
                        <div className="relative order-2 md:order-1">
                            <ParallaxBlock offset={-20}>
                                <div className="w-full h-[260px] rounded-[40px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative flex items-center justify-center group overflow-visible md:translate-y-[45%]">
                                    {/* Image from Figma */}
                                    <div className="absolute inset-0 pointer-events-none transform-gpu">
                                        <img
                                            alt="Global Presence"
                                            className="absolute h-[120.69%] left-[-21.77%] max-w-none top-[-50%] w-[138.4%] object-contain scale-[2.1] transform-gpu"
                                            src="/assets/feature-global.png"
                                        />
                                    </div>
                                </div>
                            </ParallaxBlock>
                        </div>

                        {/* Right: Content */}
                        <div className="order-1 md:order-2 space-y-8 md:translate-y-[25%]">
                            <div>
                                <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-black leading-[1.1] mb-6 font-[family-name:var(--font-sora)]">
                                    Global Presence with<br />
                                    Dedicated Team!
                                </h2>
                                <p className="text-[#595959] text-base md:text-lg leading-relaxed font-[family-name:var(--font-sora)]">
                                    SharkFunded is powered by a global team of over 30 dedicated professionals with extensive experience at Central Banks and the world's leading proprietary trading firms.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <StaggerContainer className="grid grid-cols-3 gap-6">
                                <StaggerItem>
                                    <h3 className="text-2xl font-bold text-black mb-1 font-[family-name:var(--font-sora)]">30+</h3>
                                    <p className="text-xs text-[#595959] font-[family-name:var(--font-sora)]">Dedicated<br />Professionals</p>
                                </StaggerItem>
                                <StaggerItem>
                                    <h3 className="text-2xl font-bold text-black mb-1 font-[family-name:var(--font-sora)]">3</h3>
                                    <p className="text-xs text-[#595959] font-[family-name:var(--font-sora)]">Global<br />Offices</p>
                                </StaggerItem>
                                <StaggerItem>
                                    <h3 className="text-2xl font-bold text-black mb-1 font-[family-name:var(--font-sora)]">24/7</h3>
                                    <p className="text-xs text-[#595959] font-[family-name:var(--font-sora)]">Customer<br />Support</p>
                                </StaggerItem>
                            </StaggerContainer>

                            <button className="px-8 py-3 bg-gradient-to-b from-[#5D95FF] to-[#3B72F0] text-white text-sm font-bold rounded-full shadow-[0_4px_20px_rgba(59,114,240,0.3)] hover:scale-105 transition-transform font-[family-name:var(--font-sora)]">
                                Get Funded
                            </button>
                        </div>
                    </div>
                </RevealSection>


                {/* --- BLOCK 2: Spreads --- */}
                <RevealSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                        {/* Left: Content */}
                        <div className="space-y-8 md:translate-y-[25%]">
                            <div>
                                <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-black leading-[1.1] mb-6 font-[family-name:var(--font-sora)]">
                                    Spreads<br />
                                    from 0.0 pips.
                                </h2>
                                <p className="text-[#595959] text-base md:text-lg leading-relaxed font-[family-name:var(--font-sora)]">
                                    Get in the trade at the price level you set with our platform. Our diverse liquidity mix keeps spreads tight 24/5.
                                </p>
                            </div>

                            {/* List Items */}
                            <StaggerContainer className="space-y-4">
                                {["Experience raw spreads from 0.0 Pips", "Commission Free Account", "Low latency Trade Executions", "Global Data Centers"].map((item, i) => (
                                    <StaggerItem key={i}>
                                        <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#CBE0F0] to-[#CBE0F000] border border-[#E9F0FF] text-black font-semibold text-sm font-[family-name:var(--font-sora)] flex items-center transition-all hover:pl-10 hover:bg-white/50">
                                            {item}
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>


                        {/* Right: Image Placeholder */}
                        <div className="relative">
                            <ParallaxBlock offset={-20}>
                                <div className="w-full h-[260px] rounded-[40px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative flex items-center justify-center group overflow-visible md:translate-y-[45%]">
                                    {/* Image from Figma */}
                                    <div className="absolute inset-0 pointer-events-none transform-gpu">
                                        <img
                                            alt="Spreads from 0.0 pips"
                                            className="absolute h-[120.69%] left-[-21.77%] max-w-none top-[-50%] w-[138.4%] object-contain scale-[1.5] transform-gpu"
                                            src="/assets/feature-spreads.png"
                                        />
                                    </div>
                                </div>
                            </ParallaxBlock>
                        </div>

                    </div>
                </RevealSection>

            </div>
        </section>
    );
}
