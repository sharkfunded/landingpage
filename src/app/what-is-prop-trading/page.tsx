"use client";
import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import FAQSection from "@/components/FAQSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HeroSectionTwo from "@/components/HeroSectionTwo";

export default function WhatIsPropTradingPage() {
    return (
        <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
            {/* Dashboard Card Container: Wraps Header & Hero */}
            <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5">
                <div className="relative z-50">
                    <StickyHeader>
                        <TopBar />
                        <Navbar />
                    </StickyHeader>
                </div>

                {/* Hero Section */}
                <div className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
                    {/* Background Effect Image */}
                    <div
                        className="absolute inset-0 pointer-events-none overflow-hidden"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-hero-bg.png"
                            alt=""
                            className="absolute w-[108%] h-[112%] object-cover"
                            style={{
                                left: '-4%',
                                top: '-10%',
                                maxWidth: 'none',
                                transform: 'scaleY(-1)'
                            }}
                        />
                    </div>

                    {/* Background Effect - Ellipse Gradient */}
                    <div className="absolute left-[-30%] top-[-50%] w-[80vw] h-[80vw] max-w-[1400px] max-h-[1400px] rounded-full bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-transparent blur-[100px] pointer-events-none" />

                    {/* Rays Effect */}
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute"
                            style={{
                                width: '120%',
                                height: '140%',
                                left: '-10%',
                                top: '10%',
                                maxWidth: 'none',
                                transform: 'scaleY(-1)'
                            }}
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-[1200px] mx-auto text-center relative z-10">
                        <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[40px] md:text-[64px] lg:text-[82px] leading-[1.12] tracking-[-0.05em] text-center mb-8">
                            What is Prop Trading?
                        </h1>
                        <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[1.35] tracking-[-0.04em] text-center max-w-[900px] mx-auto">
                            Traditionally, proprietary trading (prop trading) referred to banks and financial institutions investing their own capital for direct profit. However, a modern evolution of this concept has emerged—one that is reshaping opportunities for traders.
                            <br /><br />
                            This innovative model, offered by SharkFunded, provides traders with access to virtual capital, enabling them to trade without risking their own funds while earning real cash rewards based on their performance.
                        </p>
                        <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[12px] md:text-[14px] lg:text-[16px] leading-[1.35] tracking-[-0.04em] text-center max-w-[800px] mx-auto mt-6">
                            On this page, you'll find everything you need to know about SharkFunded's modern prop trading model and how you can leverage it to your advantage as a trader.
                        </p>
                    </div>
                </div>
            </div>

            {/* What is a Modern Prop Firm Section */}
            <RevealSection>
                <section className="w-full pt-36 pb-24 bg-white relative z-20">
                    <div className="max-w-[1200px] px-4 mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Left Content */}
                            <div className="flex-1">
                                <h2 className="font-[family-name:var(--font-sora)] font-semibold text-black text-[32px] md:text-[48px] lg:text-[65px] leading-[1.25] tracking-[-0.05em] mb-6">
                                    What is a Prop Firm?
                                </h2>
                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[16px] md:text-[18px] leading-[1.7] mb-6">
                                    Modern prop trading firms, often referred to as prop firms in the trading community, provide a virtual trading environment that mirrors real market conditions. Traders can gain access to a Funded Account of up to $200,000 after successfully passing an evaluation.
                                </p>
                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[16px] md:text-[18px] leading-[1.7]">
                                    Prop firms like SharkFunded offer a wide range of trading instruments, including forex, Digital Asset, commodities, and indices.
                                </p>
                            </div>

                            {/* Right Card */}
                            <div className="flex-1 w-full max-w-[450px]">
                                <div
                                    className="relative rounded-[24px] min-h-[200px] md:min-h-[280px] overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #F9FCFB 0%, #CBE0F0 100%)'
                                    }}
                                >
                                    <img
                                        src="/assets/prop-firm-illustration.png"
                                        alt="Prop Firm Trading Illustration"
                                        className="absolute left-[50%] md:left-[-30px] top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-[65%] md:-translate-y-[75%] w-[95%] sm:w-[400px] md:w-[450px] lg:w-[550px] h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealSection>

            {/* Understanding Prop Trading Section */}
            <RevealSection>
                <section className="w-full py-24 bg-white relative z-20">
                    <div className="max-w-[1200px] px-4 mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* Left - Title */}
                            <div className="lg:w-[35%]">
                                <h2 className="font-[family-name:var(--font-sora)] font-semibold text-black text-[32px] md:text-[48px] lg:text-[65px] leading-[1.25] tracking-[-0.05em]">
                                    Understanding Prop Trading
                                </h2>
                            </div>

                            {/* Right - Content */}
                            <div className="lg:w-[65%] max-w-[520px] ml-auto">
                                <p className="font-[family-name:var(--font-sora)] font-semibold text-[#3B82F6] text-[14px] md:text-[16px] leading-[1.5] mb-6">
                                    What exactly is modern prop trading, or simply prop trading, and how does it differ from traditional trading?
                                </p>

                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[13px] md:text-[14px] leading-[1.7] mb-6">
                                    In prop trading, you start by purchasing an evaluation account to prove your trading skills. If you successfully complete the evaluation, a prop firm like SharkFunded provides you with a simulated funded account, allowing you to trade in real market conditions—without using your own capital.
                                </p>

                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[13px] md:text-[14px] leading-[1.7] mb-6">
                                    With prop trading, you make a one-time financial commitment, giving you access to trading capital while minimizing your personal risk.
                                </p>

                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[13px] md:text-[14px] leading-[1.7] mb-6">
                                    Instead of putting your own money on the line for every trade, you pay a relatively low fixed fee upfront to unlock leveraged funding opportunities. This gives you access to significantly more capital compared to the fee you pay, maximizing your trading potential.
                                </p>

                                <p className="font-[family-name:var(--font-sora)] font-light text-black/70 text-[13px] md:text-[14px] leading-[1.7]">
                                    This approach allows you to focus entirely on your strategy and growth—without the stress of risking personal funds. It's an empowering way for you to trade professionally, offering both stability and opportunity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealSection>

            {/* How It Works Section */}
            <RevealSection>
                <div className="relative w-full z-30">
                    <HowItWorksSection showStats={false} />
                </div>
            </RevealSection>

            {/* Why Traders Love SharkFunded Section */}
            <RevealSection>
                <div className="relative w-full z-30">
                    <HeroSectionTwo />
                </div>
            </RevealSection>



            {/* FAQ Section */}
            <div className="relative w-full bg-white z-20">
                <FAQSection />
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30">
                <Footer />
            </div>
        </main>
    );
}
