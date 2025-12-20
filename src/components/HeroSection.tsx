"use client";

import { useEffect, useRef } from "react";
import SunRays from "./SunRays";
import { useLayeredLoading } from "@/hooks/useLayeredLoading";

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
        <section className="relative w-full aspect-video bg-black z-20">
            {/* Visuals Container: Locked to 16/9 Aspect Ratio to keep Video & Dashboard synced */}
            <div className="relative w-full h-full flex items-center justify-center">

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
                        className={`absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen overflow-hidden transition-opacity duration-700 ease-out ${layer2 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Primary intensified glow - STRICTLY LEFT */}
                        <div className="absolute top-[-20%] left-[-30%] w-[70%] h-[120%] bg-[radial-gradient(circle_closest-side,rgba(0,85,255,0.6)_0%,rgba(0,31,99,0.3)_60%,transparent_100%)] blur-[80px]" />

                        {/* Sun Beams / Light Rays Effect */}
                        <SunRays />

                        {/* Secondary lighter glow - right side (Reduced) */}
                        <div className="absolute top-[10%] right-[-20%] w-[60%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(92,176,255,0.3)_0%,transparent_100%)] blur-3xl" />

                        {/* Extra core highlight for punchiness - aligned with text - INTENSIFIED - Restricted Width */}
                        <div className="absolute top-[15%] left-[-10%] w-[45%] h-[60%] bg-[radial-gradient(circle_closest-side,rgba(60,160,255,0.7)_0%,transparent_100%)] blur-[120px]" />

                        {/* Bottom Left Fill - preventing black void */}
                        <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(0,50,150,0.6)_0%,transparent_100%)] blur-[100px]" />
                    </div>
                </div>





                {/* Dashboard Image - Positioned Relative to Video Frame */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[1400px] transition-all duration-1000 ease-out z-30 ${layer2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{
                        top: "95%",
                        height: "auto"
                    }}
                >
                    <img
                        src="/assets/Frame 2147225728 (1).png"
                        alt="Dashboard"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Content Container - Left Aligned - INDEPENDENT of Aspect Ratio for full responsiveness */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-0 md:pl-[8.33%] z-20 pointer-events-none">
                    <div
                        className={`flex flex-col items-start text-left gap-2 md:gap-[2vw] w-full md:max-w-[42%] pointer-events-auto mt-[10%] md:mt-[-5%] transition-transform duration-1000 ease-out ${layer4 ? "translate-y-0" : "translate-y-4"
                            }`}
                    >
                        {/* Status Badge - Updated Text to match design */}
                        <div className="w-fit mb-2 origin-left flex flex-col gap-4">

                            <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md w-fit">
                                <div className="flex items-center gap-2">
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold text-white/80 tracking-wider">New Update</span>
                                    <span className="text-[clamp(9px,1.1vw,14px)] font-light tracking-wide text-white/90 font-sans flex items-center gap-1">
                                        New Leaderboard is Live
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="flex flex-col font-sans leading-[1.05] tracking-[-0.05em] text-white transform-gpu items-start">
                            <h1 className="text-[clamp(18px,4.5vw,65px)] font-light">
                                Where a Trader
                            </h1>
                            <div className="flex flex-wrap items-baseline gap-2 md:gap-4 justify-start">
                                <span className="text-[clamp(18px,4.5vw,65px)] font-light">
                                    Becomes a
                                </span>
                                <span className="text-[clamp(18px,4.5vw,65px)] font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#7496ff]">
                                    Shark!
                                </span>
                            </div>
                        </div>

                        {/* Subtext */}
                        <p className="font-sans font-extralight text-white/90 text-[clamp(10px,1.1vw,18px)] leading-[1.4] tracking-[-0.04em] w-full max-w-[95%] text-left">
                            Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                        </p>

                        {/* Buttons CTA */}
                        {/* Drastically smaller on mobile: Reduced padding, min-width, gap, and font size. Removed w-full to prevent stretching. */}
                        {/* Side-by-side on mobile as requested (flex-row) */}
                        <div className="flex flex-row items-center sm:items-start gap-3 md:gap-4 mt-3 md:mt-6 origin-left w-fit sm:w-auto md:scale-100 origin-top-left md:origin-left">
                            {/* Get Started Button */}
                            <button className="relative group overflow-hidden rounded-full w-auto sm:w-auto min-w-[80px] md:min-w-[150px] px-3 py-1.5 md:px-8 md:py-5 transition-transform hover:scale-105 active:scale-95">
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                <span className="relative z-10 flex items-center justify-center w-full h-full text-[clamp(10px,1.3vw,22px)] font-normal text-white font-sans tracking-[-0.05em]">
                                    Get Started
                                </span>
                            </button>

                            {/* How it works Button */}
                            <button className="relative group overflow-hidden rounded-full w-auto sm:w-auto min-w-[80px] md:min-w-[150px] px-3 py-1.5 md:px-8 md:py-5 border-2 border-[#295fa6] bg-transparent backdrop-blur-sm transition-all hover:bg-[#295fa6]/20 hover:border-[#4d8eff] active:scale-95">
                                <span className="relative z-10 flex items-center justify-center w-full h-full text-[clamp(10px,1.3vw,22px)] font-normal text-white font-sans tracking-[-0.05em]">
                                    How it works?
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
