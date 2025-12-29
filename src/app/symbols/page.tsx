'use client';

import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import TickersSection from "./TickersSection";
import FAQSection from "@/components/FAQSection";

export default function SymbolsPage() {
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
                <div className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">

                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c1445] via-[#040822] to-[#040822] z-0" />

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

                    {/* Blue Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

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

                    <div className="relative z-10 max-w-[900px]">
                        <RevealSection>
                            <h1 className="text-[clamp(40px,6vw,72px)] font-bold text-white mb-6 font-[family-name:var(--font-sora)] leading-tight tracking-tight">
                                SharkFunded Symbols
                            </h1>
                        </RevealSection>

                        <RevealSection delay={0.1}>
                            <p className="text-gray-400 text-lg md:text-xl font-[family-name:var(--font-sora)] font-light leading-relaxed max-w-[700px] mx-auto">
                                Being SharkFunded grants you access to a wide range of symbols — from Forex and Metals to Indices, Commodities, and a full suite of Crypto pairs. All backed by tight execution, deep liquidity, and competitive spreads. Explore our full list below to see what you'll be trading with confidence.
                            </p>
                        </RevealSection>
                    </div>

                </div>

            </div>

            {/* Tickers Section */}
            <div className="relative w-full bg-white z-20">
                <TickersSection />
            </div>

            {/* FAQ Section */}
            <div className="relative w-full bg-white z-20">
                <FAQSection />
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30 pt-[50px]">
                <Footer />
            </div>

        </main >
    );
}
