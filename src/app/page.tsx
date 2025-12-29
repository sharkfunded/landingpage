import dynamic from "next/dynamic";
import { Metadata } from "next";
import TopBar from "@/components/TopBar";
import StickyHeader from "@/components/StickyHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.sharkfunded.com',
  },
};


// Dynamically import heavy below-the-fold components to reduce initial bundle size
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const RewardsSection = dynamic(() => import("@/components/RewardsSection"));
const HeroSectionTwo = dynamic(() => import("@/components/HeroSectionTwo"));
const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const RewardsSectionTwo = dynamic(() => import("@/components/RewardsSectionTwo"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const PromotionalPopup = dynamic(() => import("@/components/PromotionalPopup"));
import RevealSection from "@/components/RevealSection";

export default function Home() {
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
          <HeroSection />
        </div>



      </div>

      {/* Hero Section Two - Media & Features */}
      <RevealSection>
        <div className="relative w-full z-30">
          <HeroSectionTwo />
        </div>
      </RevealSection>

      {/* How It Works & Stats Section */}
      <RevealSection>
        <div className="relative w-full z-30">
          <HowItWorksSection />
        </div>
      </RevealSection>

      {/* Global Features Section (Presence & Spreads) */}
      <RevealSection>
        <div className="relative w-full z-30">
          <FeaturesSection />
        </div>
      </RevealSection>

      {/* Pricing Section */}
      {/* Adjusted margin to account for container and hero height */}
      <div className="relative w-full z-40 mt-12 md:mt-20">
        <PricingSection />
      </div>

      {/* Rewards Section with White Background */}
      <RevealSection>
        <div className="relative w-full bg-white z-10">
          <RewardsSection />
        </div>
      </RevealSection>

      {/* Rewards Section Two - Flexible Payouts (White Background) */}
      <RevealSection>
        <div className="relative w-full bg-white z-20">
          <RewardsSectionTwo />
        </div>
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection>
        <div className="relative w-full bg-white z-20">
          <TestimonialsSection />
        </div>
      </RevealSection>

      {/* FAQ Section with CTA Banner */}
      <RevealSection>
        <div className="relative w-full bg-white z-20">
          <FAQSection />
        </div>
      </RevealSection>

      {/* Footer Section */}
      <div className="relative w-full z-30">
        <Footer />
      </div>

      <PromotionalPopup />
    </main>
  );
}
