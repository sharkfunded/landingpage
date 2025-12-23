"use client";

import { useEffect, useRef } from "react";
import { useLayeredLoading } from "@/hooks/useLayeredLoading";
import { motion } from "framer-motion";
import PayoutsTicker from "./PayoutsTicker";
import HeroStats from "./HeroStats";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

export default function HeroSection() {
    const { layer2, layer3, layer4 } = useLayeredLoading();
    const videoRef = useRef<HTMLVideoElement>(null);

    // Layer 3: Load and play video when idle
    useEffect(() => {
        if (layer3 && videoRef.current) {
            videoRef.current.play().catch(() => {

            });
        }
    }, [layer3]);

    return (
        <section className="relative w-full bg-black z-20 flex flex-col items-center">
            {/* Visuals Container: Locked to 16/9 Aspect Ratio */}
            {/* The video and main text content live here */}
            <div className="relative w-full min-h-[600px] md:min-h-0 md:aspect-video flex-none">

                {/* BACKGROUND CLIPPER: Keeps video & glows contained within the 16:9 area */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {/* Layer 1: Background Color/Gradient (Immediate) */}
                    <div className="absolute inset-0 bg-black z-0" />

                    {/* Layer 3: Video Background (Deferred) */}
                    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover object-top opacity-100"
                            style={{ pointerEvents: "none" }}
                        >
                            <source src="/videos/light-beam-logo.webm" type="video/webm" />
                        </video>
                    </div>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

                    {/* Layer 2: Glows and SunRays (Overlaying the video but behind text) */}
                    <div
                        className={`absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen overflow-hidden transition-opacity duration-700 ease-out transform-gpu ${layer2 ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ willChange: "transform, opacity" }}
                    >
                        {/* Primary intensified glow - STRICTLY LEFT */}
                        <div className="absolute top-[-20%] left-[-30%] w-[70%] h-[120%] bg-[radial-gradient(circle_closest-side,rgba(0,85,255,0.4)_0%,rgba(0,31,99,0.2)_60%,transparent_100%)] blur-[60px] transform-gpu" />

                        {/* Secondary lighter glow - right side (Reduced) */}
                        <div className="absolute top-[10%] right-[-20%] w-[60%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(92,176,255,0.2)_0%,transparent_100%)] blur-2xl transform-gpu" />

                        {/* Extra core highlight for punchiness - aligned with text - INTENSIFIED - Restricted Width */}
                        <div className="absolute top-[15%] left-[-10%] w-[45%] h-[60%] bg-[radial-gradient(circle_closest-side,rgba(60,160,255,0.5)_0%,transparent_100%)] blur-[90px] transform-gpu" />

                        {/* Bottom Left Fill - preventing black void */}
                        <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(0,50,150,0.4)_0%,transparent_100%)] blur-[80px] transform-gpu" />
                    </div>
                </div>


                {/* Content Container - Left Aligned - INSIDE aspect-video to maintain position relative to beam */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start px-6 md:px-0 md:pl-[9.375%] pt-[100px] md:pt-[10vh] lg:pt-[15vh] z-20 pointer-events-none">
                    <StaggerContainer
                        className={`flex flex-col items-start text-left gap-2 md:gap-3 w-full md:max-w-[50%] lg:max-w-[45%] pointer-events-auto transition-transform duration-1000 ease-out ${layer4 ? "translate-y-0" : "translate-y-4"
                            }`}
                        delay={0.2}
                    >
                        {/* Status Badge - MetaTrader 5 Available */}
                        <StaggerItem>
                            <div className="w-fit mb-2 origin-left flex flex-col gap-4">
                                <div className="flex items-center gap-2 bg-[#151932] border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 w-fit backdrop-blur-md">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#0047FF] flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                                        <img src="/assets/selected-figma-logo.png" alt="Icon" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">MetaTrader 5 Available</span>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Main Heading */}
                        <StaggerItem>
                            <div className="flex flex-col font-sans leading-[1.0] tracking-[-0.05em] text-white transform-gpu items-start gap-0">
                                <h1 className="text-[clamp(28px,3.4vw,58px)] font-semibold font-[family-name:var(--font-sora)] whitespace-nowrap">
                                    Trade Like a Shark!
                                </h1>
                                <div className="flex flex-wrap items-center gap-0.7 justify-start text-[clamp(28px,3.4vw,58px)] font-semibold font-[family-name:var(--font-sora)]">
                                    <span>With Up to </span>
                                    <motion.img
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        src="/assets/trending-shark-icon.png"
                                        alt=""
                                        className="w-[1.45em] h-[1.5em] object-contain mb-1.3"
                                    />
                                    <span>$200k</span>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Subtext */}
                        <StaggerItem>
                            <p className="font-sans font-extralight text-white/90 text-[clamp(12px,1vw,25px)] leading-[1.4] tracking-[-0.04em] w-full max-w-[95%] text-left">
                                Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                            </p>
                        </StaggerItem>

                        {/* Buttons CTA */}
                        <StaggerItem>
                            <div className="flex flex-row items-center sm:items-start mt-3 md:mt-3 origin-left w-fit sm:w-auto md:scale-100 origin-top-left md:origin-left">
                                {/* Get Started Button - COMPACT SIZE */}
                                <button className="relative group overflow-hidden rounded-full min-w-[120px] md:min-w-[140px] px-6 py-3 md:px-6 md:py-3 transition-transform hover:scale-105 active:scale-95">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                    <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                    <span className="relative z-10 flex items-center justify-center w-full h-full text-[clamp(14px,1vw,16px)] font-normal text-white font-sans tracking-[-0.05em]">
                                        Get Started
                                    </span>
                                </button>
                            </div>
                        </StaggerItem>

                        {/* New Hero Stats */}
                        <StaggerItem className="w-full">
                            <HeroStats />
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </div>

            {/* Dashboard Image - Positioned Relative for Flow Layout */}
            {/* Negative margin pulls it up to overlap the video bottom */}
            <div
                className={`relative w-full max-w-[95%] md:max-w-[85%] lg:max-w-[1400px] z-30 transition-all duration-1000 ease-out px-4 mx-auto -mt-[10%] md:-mt-[9%] lg:-mt-[5%] mb-[3%] transform-gpu ${layer2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ willChange: "transform, opacity" }}
            >
                <PayoutsTicker />
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float-icon {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float-icon {
                    animation: float-icon 3s ease-in-out infinite;
                }
            `}</style>
        </section >
    );
}

