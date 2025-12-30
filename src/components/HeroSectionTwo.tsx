import React from "react";
import Image from "next/image";
import AnimatedHeading from "./animations/AnimatedHeading";

export default function HeroSectionTwo() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-4 relative z-20 bg-white py-10">

            {/* 1. Featured Media Strip */}
            <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-8 mb-20 opacity-70 overflow-hidden">
                <span className="text-[#818089] font-[family-name:var(--font-sora)] text-sm md:text-base whitespace-nowrap z-10 bg-white pr-4">
                    We are Featured in Top Media
                </span>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <div className="flex w-max animate-scroll-left gap-12 grayscale opacity-60 will-change-transform">
                        {/* Triplicated list for seamless infinite scroll */}
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">Wall Street Journal</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">Yahoo Finance</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">MetaTrader</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">TradingView</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">Reuters</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">MetaStock</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">NinjaTrader</span>
                                <span className="text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">Bloomberg</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Main Heading */}
            <div className="mb-10 w-full max-w-[1250px] text-left">
                <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-black leading-[1.1] mb-6 font-[family-name:var(--font-sora)]">
                    Why Traders Love SharkFunded?
                </h2>
                <p className="text-[#595959] text-[clamp(16px,2vw,15px)] max-w-[700px] leading-relaxed font-[family-name:var(--font-sora)] font-light">
                    Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                </p>
            </div>

            {/* 3. Bento Grid */}
            <div className="w-full max-w-[1250px] grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Left Col - Card 1 (Tall) */}
                <div className="md:col-span-5 min-h-[450px] md:h-[650px] rounded-[32px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative overflow-hidden group p-8 pb-16 flex flex-col justify-end text-left border border-[#E9F0FF]">

                    {/* Coin Images Cluster – pixel-perfect layout */}
                    <div className="absolute inset-x-0 top-0 h-[80%] w-full flex items-center justify-center pointer-events-none">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/crypto-withdrawals-combined.png"
                                alt="Crypto Withdrawals"
                                fill
                                className="object-contain scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 font-[family-name:var(--font-sora)]">
                            Crypto Withdrawals
                        </h3>
                        <p className="text-[#595959] text-sm md:text-base leading-relaxed font-[family-name:var(--font-sora)]">
                            Your digital assets are safeguarded by advanced encryption, which keeps your wallet secure.
                        </p>
                    </div>
                </div>

                {/* Right Col */}
                <div className="md:col-span-7 flex flex-col gap-6 h-full">

                    {/* Top Card (Wide) */}
                    <div className="h-[288px] rounded-[32px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative overflow-hidden group p-8 flex items-center justify-between border border-[#E9F0FF]">
                        <div className="text-left max-w-[50%] relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 font-[family-name:var(--font-sora)]">
                                Daily Payouts!
                            </h3>
                            <p className="text-[#595959] text-sm md:text-base leading-relaxed font-[family-name:var(--font-sora)]">
                                Your digital assets are safeguarded by advanced encryption, which keeps your wallet secure.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full pointer-events-none">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/daily-payouts.png"
                                    alt="Daily Payouts"
                                    fill
                                    className="object-contain object-right-bottom scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row (2 Cards) */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* 300+ Instruments */}
                        <div className="min-h-[300px] md:h-full rounded-[32px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative overflow-hidden group p-8 flex flex-col justify-start text-center items-center border border-[#E9F0FF]">
                            <h3 className="text-xl md:text-2xl font-bold text-black relative z-10 font-[family-name:var(--font-sora)] mb-4 leading-tight">
                                300+ Instruments
                            </h3>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-16">
                                <div className="relative w-[70%] md:w-[80%] h-[70%] md:h-full">
                                    <Image
                                        src="/assets/instruments.png"
                                        alt="300+ Instruments"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* MT5 Platform */}
                        <div className="min-h-[300px] md:h-full rounded-[32px] bg-gradient-to-b from-[#F9FCFB] to-[#CBE0F0] relative overflow-hidden group p-8 pb-3 flex flex-col justify-end text-center items-center border border-[#E9F0FF]">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-12">
                                {/* Gradient Circle 1 (Larger) */}
                                <div className="absolute w-[150px] md:w-[210px] h-[150px] md:h-[210px] rounded-full bg-gradient-to-b from-[rgba(0,58,167,0)] to-[rgba(0,58,167,0.23)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                                {/* Gradient Circle 2 (Medium) */}
                                <div className="absolute w-[120px] md:w-[150px] h-[120px] md:h-[150px] rounded-full bg-gradient-to-b from-[rgba(0,58,167,0)] to-[rgba(0,58,167,0.23)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                                <div className="relative w-[35%] md:w-[45%] h-[60%] md:h-full z-10">
                                    <Image
                                        src="/assets/mt5-platform.png"
                                        alt="MT5 Platform"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black relative z-10 font-[family-name:var(--font-sora)] leading-tight">
                                MT5 Platform
                            </h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
