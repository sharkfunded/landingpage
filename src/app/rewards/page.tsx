import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RewardsSection from "@/components/RewardsSection";
import RewardsSectionTwo from "@/components/RewardsSectionTwo";
import StickyHeader from "@/components/StickyHeader";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
    title: 'Rewards & Payouts - SharkFunded',
    description: 'See our latest real-time payouts and success stories from traders worldwide.',
    alternates: {
        canonical: 'https://www.sharkfunded.com/rewards',
    },
};

export default function RewardsPage() {
    return (
        <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
            {/* Header */}
            <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5 mb-12">
                <div className="relative z-50">
                    <StickyHeader>
                        <TopBar />
                        <Navbar />
                    </StickyHeader>
                </div>

                <div className="py-20 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-sora)]">
                        Rewards & Payouts
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto px-4">
                        See our latest real-time payouts and success stories from traders worldwide.
                    </p>
                </div>
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
            </div>

            {/* Rewards Content */}
            <div className="relative w-full z-10 space-y-20 mb-20">
                <RewardsSection />
                <RewardsSectionTwo />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}
