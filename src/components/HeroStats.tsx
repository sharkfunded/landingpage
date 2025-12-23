import React from 'react';

const HeroStats = () => {
    return (
        <div className="md:mt-4 lg:mt-12 mt-6 w-full max-w-[900px]">
            <div className="bg-black/40 backdrop-blur-md rounded-[36px] border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative overflow-hidden">
                {/* Gradient Border/Glow effect if needed, for now standard border */}

                {/* Item 1: Min Deposit */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:pr-8 md:border-r border-white/10 last:border-0">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent" style={{ fontSize: 'clamp(24px, 2.2vw, 22px)' }}>
                        DailyRewards
                    </span>
                    <span className="font-normal text-white leading-normal mt-1" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
                        upto 80% split
                    </span>
                </div>

                {/* Item 2: Leverage */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:px-8 md:border-r border-white/10 last:border-0">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent" style={{ fontSize: 'clamp(24px, 2.2vw, 20px)' }}>
                        NoConsistency
                    </span>
                    <span className="font-normal text-white leading-normal mt-1" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
                        Score Rules
                    </span>
                </div>

                {/* Item 3: Commission */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:px-8 md:border-r border-white/10 last:border-0">
                    <div className="flex items-baseline gap-1">
                        <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent" style={{ fontSize: 'clamp(24px, 2.2vw, 20px)' }}>
                            24
                        </span>
                        <span className="font-bold font-[family-name:var(--font-sora)] text-[#5c8eff] mb-1" style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}>
                            /HourPayout
                        </span>
                    </div>
                    <span className="font-normal text-white leading-normal mt-1" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
                        Guaranteed
                    </span>
                </div>

                {/* Item 4: Spreads */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:pl-8">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent" style={{ fontSize: 'clamp(24px, 2.2vw, 22px)' }}>
                        No Minimumdays
                    </span>
                    <span className="font-normal text-white leading-normal mt-1" style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
                        Trading days
                    </span>
                </div>

            </div>
        </div>
    );
};

export default HeroStats;
