import CareersHero from "@/components/CareersHero";
import JobOpenings from "@/components/JobOpenings";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import RevealSection from "@/components/RevealSection";

export const metadata = {
    title: "Careers | Join Our Team",
    description: "Join the revolution in prop trading. View our open positions and help us build the future.",
    alternates: {
        canonical: "https://www.sharkfunded.com/careers",
    },
};

import StickyHeader from "@/components/StickyHeader";

export default function CareersPage() {
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
                <div className="relative w-full">
                    <CareersHero />
                </div>
            </div>

            <RevealSection>
                <JobOpenings />
            </RevealSection>
            <Footer />
        </main>
    );
}
