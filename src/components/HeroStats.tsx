import React from 'react';

const HeroStats = () => {
    return (
        <div className="md:mt-4 lg:mt-6 mt-6 w-full max-w-[800px]">
            <div className="bg-black/40 backdrop-blur-md rounded-[36px] border border-white/5 p-6 md:p-6 lg:p-7 grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-y-6 gap-x-4 md:gap-x-6 lg:gap-x-8 relative overflow-hidden">
                {/* Gradient Border/Glow effect if needed, for now standard border */}

                {/* Item 1: Daily Rewards */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 border-r md:border-r border-b md:border-b-0 border-white/10 pb-6 md:pb-0 pr-4">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[17px] lg:text-[19px]" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
                        DailyRewards
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[13px] lg:text-[15px]" style={{ fontSize: 'clamp(10px, 0.9vw, 15px)' }}>
                        upto 80% split
                    </span>
                </div>

                {/* Item 2: No Consistency */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:border-r border-b md:border-b-0 border-white/10 pb-6 md:pb-0 md:px-4">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[17px] lg:text-[19px]" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
                        NoConsistency
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[13px] lg:text-[15px]" style={{ fontSize: 'clamp(10px, 0.9vw, 15px)' }}>
                        Score Rules
                    </span>
                </div>

                {/* Item 3: 24 Hour Payout */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 border-r md:border-r-0 border-white/10 pr-4 md:pr-0 md:pl-4">
                    <div className="flex items-baseline gap-1">
                        <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[17px] lg:text-[19px]" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
                            24
                        </span>
                        <span className="font-bold font-[family-name:var(--font-sora)] text-[#5c8eff] mb-0 md:mb-1 text-[10px] md:text-[14px] lg:text-[16px]" style={{ fontSize: 'clamp(10px, 1vw, 16px)' }}>
                            /Hrs
                        </span>
                    </div>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[13px] lg:text-[15px]" style={{ fontSize: 'clamp(10px, 0.9vw, 15px)' }}>
                        Payout Guaranteed
                    </span>
                </div>

                {/* Item 4: Minimum Trading Days - Only visible on mobile */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 pl-4 md:hidden">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[17px] lg:text-[19px]" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
                        No Minimum
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[13px] lg:text-[15px]" style={{ fontSize: 'clamp(10px, 0.9vw, 15px)' }}>
                        Trading days
                    </span>
                </div>

            </div>
        </div>
    );
};

export default HeroStats;
