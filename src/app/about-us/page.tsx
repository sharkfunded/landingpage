"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export default function AboutUsPage() {
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
                <div className="relative w-full py-24 md:py-32 px-6 text-center">
                    {/* Background Effects similar to other pages */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ mixBlendMode: 'screen' }}>
                        <img
                            src="/assets/reviews-hero-bg.png"
                            alt=""
                            className="absolute w-[108%] h-[112%] object-cover"
                            style={{ left: '-4%', top: '-10%', maxWidth: 'none', transform: 'scaleY(-1)' }}
                        />
                    </div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ mixBlendMode: 'screen' }}>
                        <img
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute w-[120%] h-[140%] left-[-10%] top-[10%] max-w-none transform scale-y-[-1]"
                        />
                    </div>

                    <div className="relative z-10 max-w-[900px] mx-auto">
                        <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[40px] md:text-[64px] lg:text-[82px] leading-[1.12] tracking-[-0.05em] mb-8">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0047FF]">SharkFunded</span>
                        </h1>
                        <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.04em] max-w-[700px] mx-auto text-white/80">
                            We are empowering traders worldwide with the capital they need to succeed. Our mission is to create the most transparent and trader-friendly prop firm in the industry.
                        </p>
                    </div>
                </div>
            </div>

            <RevealSection>
                <section className="w-full py-24 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">
                            Our Story
                        </h2>
                        <p className="text-[#595959] text-lg max-w-[800px] mx-auto">
                            Coming soon...
                        </p>
                    </div>
                </section>
            </RevealSection>

            <Footer />
        </main>
    );
}
