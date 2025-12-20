import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import RewardsSection from "@/components/RewardsSection";
import RewardsSectionTwo from "@/components/RewardsSectionTwo";

import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full">
        <HeroSection />
      </div>

      {/* Pricing Section */}
      {/* Added margin to separate from hero content (dashboard image) 
          Dashboard hangs near Top: 95% of Hero (16:9). 
          Hero Height = 56.25vw. 
          Offset ~ 53vw. 
          Using mt-[55vw] to clear it with buffer.
      */}
      <div className="relative w-full z-20 mt-[55vw]">
        <PricingSection />
      </div>

      {/* Rewards Section with White Background */}
      <div className="relative w-full bg-white z-10 py-24 md:py-32 mt-32">
        <RewardsSection />
      </div>

      {/* Rewards Section Two with Dark Background */}
      <div className="relative w-full bg-[#00000A] z-20 py-24 md:py-32">
        <RewardsSectionTwo />
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full bg-white z-20 pb-32">
        <TestimonialsSection />
      </div>
    </main>
  );
}
