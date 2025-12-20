import React from "react";


export default function RewardsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-4 relative z-20">
            {/* 
              Node 65:57 - "The Best Trading Technology"
              Style: Sora Regular, 75px, -3.75px tracking
            */}
            {/* 
              Node 65:57 - "The Best Trading Technology"
              Style: Sora Regular, 75px, -3.75px tracking
            */}
            <h2
                className="font-normal text-black leading-[1.118]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(32px, 5vw, 75px)',
                    letterSpacing: 'clamp(-1.5px, -0.05em, -3.75px)'
                }}
            >
                The Best Trading Technology
            </h2>

            {/* 
              Node 65:58 - Subtitle
              Style: Sora ExtraLight, 28.192px, -1.1277px tracking
            */}
            <p
                className="font-extralight text-black/80 mt-6 max-w-[1131px]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(14px, 2vw, 28px)',
                    lineHeight: '1.35',
                    letterSpacing: 'clamp(-0.5px, -0.04em, -1.13px)'
                }}
            >
                Play our Simulated Trading Game in modern trading platforms, with price feed with real market quotes from liquidity providers.
            </p>

            {/* Grid Content - Placeholder for "Grid Numbers" */}

            {/* 4 Cards Grid from Screenshot (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-[1240px]">

                {/* Card 1: Payout with Rise */}
                <div className="group rounded-[32px] h-full">
                    <div className="flex flex-col overflow-hidden rounded-[32px] h-full">
                        {/* Image Area - Equity Curve (Image Asset from User) */}
                        <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#07081D] to-[#121778] p-6">
                            <img
                                src="/assets/equity-curve-light.webp"
                                alt="Equity Curve"
                                className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-8 text-left bg-[#0C0D1F] flex-1">
                            <h3
                                className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.118] mb-3"
                                style={{
                                    fontSize: 'clamp(24px, 2.5vw, 48.5px)',
                                    letterSpacing: '-0.05em'
                                }}
                            >
                                Payout with Wise
                            </h3>
                            <p
                                className="font-[family-name:var(--font-sora)] font-extralight text-white leading-[1.35]"
                                style={{
                                    fontSize: 'clamp(14px, 1.3vw, 24.8px)',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                Our partnership with Rise ensures secure, reliable bank transfers— profits go straight to your account through their trusted infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Payout with Wise */}
                <div className="group rounded-[32px] h-full">
                    <div className="flex flex-col overflow-hidden rounded-[32px] h-full">
                        {/* Image Area - Wise Transfer (Figma Asset) */}
                        <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#07081D] to-[#121778] p-8">
                            <img
                                src="/assets/payout-wise.webp"
                                alt="Payout with Wise"
                                className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-8 text-left bg-[#0C0D1F] flex-1">
                            <h3 className="text-2xl text-white font-[family-name:var(--font-sora)] mb-3">Payout with Wise</h3>
                            <p className="text-white/60 font-[family-name:var(--font-sora)] font-light text-sm leading-relaxed">
                                Enjoy faster rewards with payouts requests handled in as little as two weeks. Enjoy faster rewards with payouts requests handled in as.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Detailed Analytics */}
                <div className="group rounded-[32px] h-full">
                    <div className="flex flex-col overflow-hidden rounded-[32px] h-full">
                        {/* Image Area - Detailed Analytics (User Upload) */}
                        <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#07081D] to-[#121778] p-6">
                            {/* 2x2 Grid Container */}
                            <div className="grid grid-cols-2 gap-3 w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                                {/* Widget 1: P&L */}
                                <img src="/assets/analytics-pnl.webp" alt="P&L" className="w-full h-full object-contain rounded-xl" loading="lazy" decoding="async" />
                                {/* Widget 2: Win Rate */}
                                <img src="/assets/analytics-winrate.webp" alt="Win Rate" className="w-full h-full object-contain rounded-xl" loading="lazy" decoding="async" />
                                {/* Widget 3: Total Trades */}
                                <img src="/assets/analytics-trades.webp" alt="Total Trades" className="w-full h-full object-contain rounded-xl" loading="lazy" decoding="async" />
                                {/* Widget 4: Monthly Profit */}
                                <img src="/assets/analytics-monthly.webp" alt="Monthly Profit" className="w-full h-full object-contain rounded-xl" loading="lazy" decoding="async" />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-8 text-left bg-[#0C0D1F] flex-1">
                            <h3 className="text-2xl text-white font-[family-name:var(--font-sora)] mb-3">Detailed Analytics</h3>
                            <p className="text-white/60 font-[family-name:var(--font-sora)] font-light text-sm leading-relaxed">
                                Enjoy faster rewards with payouts requests handled in as little as two weeks. Enjoy faster rewards with payouts requests handled in as.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 4: MT5 Platform */}
                <div className="group rounded-[32px] h-full">
                    <div className="flex flex-col overflow-hidden rounded-[32px] h-full">
                        {/* Image Area - MT5 Logo (SVG from User) */}
                        <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#07081D] to-[#121778] p-8">
                            <img
                                src="/assets/mt5-logo.svg"
                                alt="MT5 Platform"
                                className="w-[60%] h-auto object-contain drop-shadow-xl -translate-y-6"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-8 text-left bg-[#0C0D1F] flex-1">
                            <h3 className="text-2xl text-white font-[family-name:var(--font-sora)] mb-3">MT5 Platform</h3>
                            <p className="text-white/60 font-[family-name:var(--font-sora)] font-light text-sm leading-relaxed">
                                Enjoy faster rewards with payouts requests handled in as little as two weeks. Enjoy faster rewards with payouts requests handled in as.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* CTA Button */}
            <div className="mt-16">
                <button className="relative group overflow-hidden rounded-full min-w-[200px] h-[60px] transition-transform hover:scale-105 active:scale-95">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2B60C8] to-[#1C3F85] opacity-100" />
                    {/* Inner Shadow/Ring */}
                    <div className="absolute inset-0 shadow-[inset_0px_2px_10px_0px_rgba(255,255,255,0.2)] rounded-full pointer-events-none" />
                    <span className="relative z-10 flex items-center justify-center w-full h-full text-[18px] font-normal text-white font-[family-name:var(--font-sora)]">
                        Get Funded
                    </span>
                </button>
            </div>
        </section>
    );
}
