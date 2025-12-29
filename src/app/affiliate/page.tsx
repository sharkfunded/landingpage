import TopBar from "@/components/TopBar";
import StickyHeader from "@/components/StickyHeader";
import Navbar from "@/components/Navbar";
import AffiliateHero from "@/components/AffiliateHero";
import AffiliateContent from "@/components/AffiliateContent";
import AffiliateRanks from "@/components/AffiliateRanks";
import AffiliateTestimonials from "@/components/AffiliateTestimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.sharkfunded.com/affiliate',
    },
};

export default function AffiliatePage() {
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
                    <AffiliateHero />
                </div>
            </div>

            <div className="relative w-full bg-white z-20">
                <AffiliateContent />
                <AffiliateRanks />
                <AffiliateTestimonials />
                <FAQSection />
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30">
                <Footer />
            </div>

        </main>
    );
}
