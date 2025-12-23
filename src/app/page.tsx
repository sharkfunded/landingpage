import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import RewardsSection from "@/components/RewardsSection";
import HeroSectionTwo from "@/components/HeroSectionTwo";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import RewardsSectionTwo from "@/components/RewardsSectionTwo";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">

      {/* Dashboard Card Container: Wraps Header & Hero */}
      <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5">
        <div className="relative z-50">
          <TopBar />
          <Navbar />
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
      <div className="relative w-full z-40 mt-[10vw]">
        <PricingSection />
      </div>

      {/* Rewards Section with White Background */}
      <RevealSection>
        <div className="relative w-full bg-white z-10 py-24 md:py-32 mt-32">
          <RewardsSection />
        </div>
      </RevealSection>

      {/* Rewards Section Two - Flexible Payouts (White Background) */}
      <RevealSection>
        <div className="relative w-full bg-white z-20 py-24 md:py-32">
          <RewardsSectionTwo />
        </div>
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection>
        <div className="relative w-full bg-white z-20 pb-20">
          <TestimonialsSection />
        </div>
      </RevealSection>

      {/* FAQ Section with CTA Banner */}
      <RevealSection>
        <div className="relative w-full bg-white z-20 pb-32">
          <FAQSection />
        </div>
      </RevealSection>

      {/* Footer Section */}
      <div className="relative w-full z-30">
        <Footer />
      </div>

    </main>
  );
}
