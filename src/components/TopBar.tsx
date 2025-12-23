"use client";
import { useState, useEffect } from "react";

export default function TopBar() {
    const [timeLeft, setTimeLeft] = useState({ h: 18, m: 45, s: 12 });
    const [startTimer, setStartTimer] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Initialize timer only on client side to avoid hydration mismatch
        setStartTimer(true);
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
                return { h: 18, m: 45, s: 12 }; // Reset loop for demo
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, "0");

    const handleCopy = () => {
        navigator.clipboard.writeText("V40");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="w-full bg-[linear-gradient(90deg,rgb(16,31,90)_0%,rgb(61,80,148)_24.687%,rgb(26,43,102)_45.569%,rgb(0,9,66)_77.549%,rgb(0,16,87)_100%)] relative flex items-center justify-center"
            style={{
                height: 'clamp(32px, 3vw, 48px)',
                paddingLeft: 'clamp(16px, 7vw, 135px)',
                paddingRight: 'clamp(16px, 7vw, 135px)'
            }}
        >

            {/* Container */}
            <div className="w-full max-w-[1920px] h-full flex items-center justify-between mx-auto">

                {/* Mobile Content (Visible only < md) */}
                <div className="flex md:hidden w-full justify-between items-center text-white">
                    <span className="font-semibold text-xs">40% OFF</span>
                    <span className="text-[10px] opacity-80">Tap details</span>
                </div>

                {/* Desktop Left Group */}
                <div className="hidden md:flex items-center h-full" style={{ gap: 'clamp(20px, 2.5vw, 48px)' }}>
                    {/* Frame 2: Forex Highlight Box */}
                    <div className="relative h-full flex items-center justify-center overflow-hidden" style={{ width: 'clamp(100px, 10vw, 190px)' }}>
                        {/* Background Gradient Layer - contained within box */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,102,255,0)] via-[rgba(0,102,255,0.5)] to-[#96c0ff] opacity-50 pointer-events-none" />
                        {/* Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full bg-[#b7dcff]" style={{ height: 'clamp(2px, 0.15vw, 3px)' }} />
                        {/* Text */}
                        <span
                            className="relative z-10 font-normal leading-none text-white"
                            style={{
                                fontSize: 'clamp(12px, 1vw, 18px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            ¥ Forex
                        </span>
                    </div>

                    {/* Futures Text */}
                    <div className="flex items-center">
                        <span
                            className="font-normal leading-none text-white opacity-80"
                            style={{
                                fontSize: 'clamp(12px, 1vw, 18px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            Futures (Coming Soon!)
                        </span>
                    </div>
                </div>

                {/* Desktop Right Group */}
                <div className="hidden md:flex items-center" style={{ gap: 'clamp(12px, 1.2vw, 24px)' }}>
                    {/* 40% OFF */}
                    <div
                        className="font-semibold text-white whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(12px, 1vw, 18px)',
                            letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                        }}
                    >
                        40% OFF
                    </div>

                    {/* Timer */}
                    <div
                        className="text-white whitespace-nowrap min-w-[65px]"
                        style={{
                            fontSize: 'clamp(12px, 1vw, 18px)',
                            letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                        }}
                    >
                        <span className="font-normal">Offer Ends in : </span>
                        <span className="font-semibold">
                            {startTimer
                                ? `${formatTime(timeLeft.h)}:${formatTime(timeLeft.m)}:${formatTime(timeLeft.s)}`
                                : "18:45:12"}
                        </span>
                    </div>

                    {/* Code Button */}
                    <button
                        onClick={handleCopy}
                        className="relative rounded-[65px] border border-[#a6b9ef] bg-[linear-gradient(90deg,rgba(99,116,181,0.44),rgba(181,197,255,0.44))] flex items-center hover:bg-white/10 transition-colors cursor-pointer"
                        style={{
                            width: 'clamp(140px, 10vw, 190px)',
                            height: 'clamp(26px, 2.2vw, 42px)',
                            paddingLeft: 'clamp(12px, 1.4vw, 20px)',
                            paddingRight: 'clamp(12px, 1.4vw, 20px)'
                        }}
                    >
                        <span
                            className="font-normal text-white whitespace-nowrap"
                            style={{
                                fontSize: 'clamp(10px, 0.9vw, 16px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            {copied ? "Copied!" : "Use Code : V40"}
                        </span>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                            style={{
                                right: 'clamp(6px, 0.8vw, 10px)',
                                width: 'clamp(12px, 0.9vw, 18px)',
                                height: 'clamp(12px, 0.9vw, 18px)'
                            }}
                        >
                            {!copied && <img src="/assets/copy_icon_figma.svg" alt="" className="w-full h-full" />}
                            {copied && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full text-green-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            )}
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
}
