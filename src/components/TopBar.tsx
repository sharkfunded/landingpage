"use client";

import { useState, useEffect } from "react";

export default function TopBar() {
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
    const [mounted, setMounted] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMounted(true);

        // 🔒 Offer End Date (Jan 2, 12:00 AM - local time)
        const OFFER_END = new Date("2026-01-03T00:00:00");

        const updateTimer = () => {
            const now = Date.now();
            const diff = OFFER_END.getTime() - now;

            if (diff <= 0) {
                setTimeLeft({ h: 0, m: 0, s: 0 });
                return;
            }

            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTimeLeft({ h, m, s });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (v: number) => v.toString().padStart(2, "0");

    const handleCopy = () => {
        navigator.clipboard.writeText("NY50");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="w-full bg-[linear-gradient(90deg,rgb(16,31,90)_0%,rgb(61,80,148)_24.687%,rgb(26,43,102)_45.569%,rgb(0,9,66)_77.549%,rgb(0,16,87)_100%)] relative flex items-center justify-center"
            style={{
                height: "clamp(32px, 3vw, 48px)",
                paddingLeft: "clamp(16px, 7vw, 135px)",
                paddingRight: "clamp(16px, 7vw, 135px)",
            }}
        >
            <div className="w-full max-w-[1920px] h-full flex items-center justify-between mx-auto">


                {/* ================= MOBILE ================= */}
                <div className="flex md:hidden w-full overflow-hidden items-center text-white relative h-full mask-linear-fade">
                    <div className="flex animate-scroll-left w-fit whitespace-nowrap">
                        {/* First Copy */}
                        <div className="flex items-center gap-8 px-4">
                            {[...Array(4)].map((_, i) => (
                                <span key={i} className="text-xs font-semibold tracking-wide">
                                    50% New Year Offer <span className="text-[#a6b9ef] font-bold">NY50</span>
                                </span>
                            ))}
                        </div>
                        {/* Second Copy (for seamless loop) */}
                        <div className="flex items-center gap-8 px-4">
                            {[...Array(4)].map((_, i) => (
                                <span key={`dup-${i}`} className="text-xs font-semibold tracking-wide">
                                    50% New Year Offer <span className="text-[#a6b9ef] font-bold">NY50</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= DESKTOP LEFT ================= */}
                <div className="hidden md:flex items-center h-full" style={{ gap: "clamp(20px, 2.5vw, 48px)" }}>
                    <div
                        className="relative h-full flex items-center justify-center overflow-hidden"
                        style={{ width: "clamp(100px, 10vw, 190px)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/50 to-blue-200 opacity-50" />
                        <div className="absolute bottom-0 left-0 w-full bg-[#b7dcff]" style={{ height: "clamp(2px, 0.15vw, 3px)" }} />
                        <span
                            className="relative z-10 text-white"
                            style={{ fontSize: "clamp(12px, 1vw, 18px)" }}
                        >
                            $ Forex
                        </span>
                    </div>

                    <span
                        className="text-white opacity-80"
                        style={{ fontSize: "clamp(12px, 1vw, 18px)" }}
                    >
                        Futures (Coming Soon!)
                    </span>
                </div>

                {/* ================= DESKTOP RIGHT ================= */}
                <div className="hidden md:flex items-center" style={{ gap: "clamp(12px, 1.2vw, 24px)" }}>
                    <span
                        className="font-semibold text-white"
                        style={{ fontSize: "clamp(12px, 1vw, 18px)" }}
                    >
                        50% OFF
                    </span>

                    <span
                        className="text-white whitespace-nowrap"
                        style={{ fontSize: "clamp(12px, 1vw, 18px)" }}
                    >
                        <span className="font-normal">Offer Ends in : </span>
                        <span className="font-semibold">
                            {mounted
                                ? `${formatTime(timeLeft.h)}:${formatTime(timeLeft.m)}:${formatTime(timeLeft.s)}`
                                : "00:00:00"}
                        </span>
                    </span>

                    <button
                        onClick={handleCopy}
                        className="relative rounded-full border border-[#a6b9ef] bg-white/10 hover:bg-white/20 transition"
                        style={{
                            width: "clamp(140px, 10vw, 190px)",
                            height: "clamp(26px, 2.2vw, 42px)",
                        }}
                    >
                        <span className="text-white text-sm">
                            {copied ? "Copied!" : "Use Code : NY50"}
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}
