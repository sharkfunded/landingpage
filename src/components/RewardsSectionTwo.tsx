import React from "react";

export default function RewardsSectionTwo() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-4 relative z-20">
            {/* 
        Node 174:88 - "Flexible & Secure Payout Options"
        Style: Sora Regular, 75px, -3.75px tracking
      */}
            <h2
                className="font-normal text-white leading-[1.118]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(32px, 5vw, 75px)',
                    letterSpacing: 'clamp(-1.5px, -0.05em, -3.75px)'
                }}
            >
                Flexible & Secure Payout Options
            </h2>

            <p className="font-extralight text-white/80 mt-6 max-w-[1131px]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(14px, 2vw, 28px)',
                    lineHeight: '1.35',
                    letterSpacing: 'clamp(-0.5px, -0.04em, -1.13px)'
                }}
            >
                {/* Placeholder description */}
                Explore our diverse and secure payout methods designed for your convenience.
            </p>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-[1240px]">

                {/* Card 1: Payout with Wise */}
                <div className="relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-visible h-[420px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full overflow-hidden flex flex-col justify-end p-0">
                        <img
                            src="/assets/rewards-card-1.png"
                            alt="Payout with Wise"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                        {/* Text Overlay */}
                        <div className="relative z-10 p-8 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                            <div className="mt-auto">
                                <h3
                                    className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.118] mb-3 text-left"
                                    style={{
                                        fontSize: 'clamp(20px, 2vw, 36px)',
                                        letterSpacing: '-0.05em'
                                    }}
                                >
                                    Payout<br />with Wise
                                </h3>
                                <p
                                    className="font-[family-name:var(--font-sora)] font-extralight text-white leading-[1.35] text-left"
                                    style={{
                                        fontSize: 'clamp(12px, 1vw, 18px)',
                                        letterSpacing: '-0.04em'
                                    }}
                                >
                                    Our partnership with Rise ensures secure, reliable bank transfers— profits go straight to your account through their trusted infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Payout with Crypto */}
                <div className="relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-visible h-[420px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full overflow-hidden flex flex-col justify-end p-0">
                        <img
                            src="/assets/rewards-card-2.png"
                            alt="Payout with Crypto"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                        {/* Text Overlay */}
                        <div className="relative z-10 p-8 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                            <div className="mt-auto">
                                <h3
                                    className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.118] mb-3 text-left"
                                    style={{
                                        fontSize: 'clamp(20px, 2vw, 36px)',
                                        letterSpacing: '-0.05em'
                                    }}
                                >
                                    Payout<br />with Crypto
                                </h3>
                                <p
                                    className="font-[family-name:var(--font-sora)] font-extralight text-white leading-[1.35] text-left"
                                    style={{
                                        fontSize: 'clamp(12px, 1vw, 18px)',
                                        letterSpacing: '-0.04em'
                                    }}
                                >
                                    Get your trading profits your way - we support both Bitcoin and major stable coins withdrawals for maximum flexibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Bi-Weekly Rewards (Full Width) */}
                <div className="md:col-span-2 relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-hidden min-h-[200px] h-auto">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full p-12 flex flex-col md:flex-row items-center justify-between text-left gap-8 overflow-hidden z-10">

                        {/* Decorative Grid & Number (Background) */}
                        <div className="absolute top-0 right-0 w-[40%] h-full mix-blend-plus-lighter z-0">
                            {/* Grid removed as requested */}
                            <div className="absolute top-[-20px] right-10 text-white/5 font-mono text-[160px] font-bold leading-none select-none tracking-tighter">
                                03
                            </div>
                        </div>

                        {/* Left Side */}
                        <div className="flex items-center gap-8 relative z-10">
                            {/* Icon Placeholder */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center border border-white/10">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white font-[family-name:var(--font-sora)] mb-2">Bi-Weekly Rewards</h3>
                                <p className="text-white/60 font-[family-name:var(--font-sora)] font-light text-sm max-w-[400px]">
                                    Enjoy faster rewards with payouts requests handled in as little as two weeks.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Stats */}
                        <div className="flex items-center gap-12 border-l border-white/10 pl-12 relative z-10">
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">3H</div>
                                <div className="text-white/40 text-xs mt-1">Avg. Payout Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">24/7</div>
                                <div className="text-white/40 text-xs mt-1">Customer Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">$120K+</div>
                                <div className="text-white/40 text-xs mt-1">Overall Payouts</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Scrolling Strips */}
            <div className="w-full mt-24 space-y-8 overflow-hidden pointer-events-none fade-mask">
                {/* Strip 1: Left */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-left min-w-full shrink-0 gap-0">
                        <img src="/assets/cert-strip-1.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-1.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-1.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-1.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                    </div>
                </div>

                {/* Strip 2: Right */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-right min-w-full shrink-0 gap-0">
                        <img src="/assets/cert-strip-2.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-2.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-2.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-2.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                    </div>
                </div>

                {/* Strip 3: Left */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-left min-w-full shrink-0 gap-0">
                        <img src="/assets/cert-strip-3.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-3.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-3.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                        <img src="/assets/cert-strip-3.png" alt="Certificates" className="h-[120px] w-auto max-w-none object-contain" />
                    </div>
                </div>
            </div>
            {/* How It Works Text Section */}
            <div className="mt-32 mb-20">
                <h2
                    className="font-normal text-white leading-[1.118] text-center"
                    style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontSize: 'clamp(32px, 5vw, 75px)',
                        letterSpacing: 'clamp(-1.5px, -0.05em, -3.75px)'
                    }}
                >
                    How it Works?
                </h2>
                <p
                    className="font-extralight text-white/80 mt-6 text-center max-w-[1010px] mx-auto"
                    style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontSize: 'clamp(14px, 2vw, 28px)',
                        lineHeight: '1.35',
                        letterSpacing: 'clamp(-0.5px, -0.04em, -1.13px)'
                    }}
                >
                    Your Skills with Our Capital. You&apos;re not liable for any losses.
                </p>
            </div>

            {/* Drop Line Visual */}
            <div className="relative w-full flex flex-col items-center justify-center mt-[-10px] sm:mt-[-20px] mix-blend-screen pointer-events-none">
                <div className="relative w-full max-w-[1000px] aspect-[1/2]">
                    <img
                        src="/assets/how-it-works-beam.png"
                        alt=""
                        className="w-full h-full object-contain object-top"
                    />
                </div>
            </div>
            {/* How It Works Steps */}
            <div className="relative w-full max-w-[1200px] mx-auto mt-[-150%] lg:mt-[-1500px] z-10 px-4 mb-32">
                <div className="backdrop-blur-[25px] bg-[rgba(33,38,75,0.25)] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-6 md:p-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-12 relative">
                            <div className="w-[42px] h-[42px] mb-8">
                                <img src="/assets/step-icon-1.svg" alt="Evaluation" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-['Sora'] font-normal text-[20px] md:text-[23.2px] text-white leading-none tracking-[-0.8px] mb-6">
                                Choose your Evaluation
                            </h3>
                            <div className="font-['Sora'] font-normal text-[16px] md:text-[20.6px] text-[#818089] leading-[1.6] tracking-[-0.6px]">
                                <p>Choose between Instant Funding,</p>
                                <p>1 Phase or 2 Phase Evaluation</p>
                            </div>
                        </div>

                        {/* Divider 1 */}
                        <div className="hidden md:block absolute right-[66%] top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-12 relative">
                            <div className="w-[42px] h-[42px] mb-8">
                                <img src="/assets/step-icon-2.svg" alt="Funded Account" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-['Sora'] font-normal text-[20px] md:text-[23.2px] text-white leading-none tracking-[-0.8px] mb-6">
                                Get Funded Account
                            </h3>
                            <div className="font-['Sora'] font-normal text-[16px] md:text-[20.6px] text-[#818089] leading-[1.6] tracking-[-0.6px]">
                                <p>Trade in a Simulated environment while</p>
                                <p>keep up to 100% of the rewards.</p>
                            </div>
                        </div>

                        {/* Divider 2 */}
                        <div className="hidden md:block absolute left-[66%] top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-12 relative">
                            <div className="w-[42px] h-[42px] mb-8">
                                <img src="/assets/step-icon-3.svg" alt="Rewards" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-['Sora'] font-normal text-[20px] md:text-[23.2px] text-white leading-none tracking-[-0.8px] mb-6">
                                Trade and Get Rewards
                            </h3>
                            <div className="font-['Sora'] font-normal text-[16px] md:text-[20.6px] text-[#818089] leading-[1.6] tracking-[-0.6px]">
                                <p>Generate rewards by Trading and Up to</p>
                                <p>100% of Rewards while Scaling to 200k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div className="mt-[-1%] mb-20 relative z-10">
                <h2
                    className="font-normal text-white leading-[1.118] text-center"
                    style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontSize: 'clamp(32px, 5vw, 75px)',
                        letterSpacing: 'clamp(-1.5px, -0.05em, -3.75px)'
                    }}
                >
                    What Sets us apart?
                </h2>
                <p
                    className="font-extralight text-white/80 mt-6 text-center max-w-[1010px] mx-auto px-4"
                    style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontSize: 'clamp(14px, 2vw, 28px)',
                        lineHeight: '1.35',
                        letterSpacing: 'clamp(-0.5px, -0.04em, -1.13px)'
                    }}
                >
                    The main reasons why traders choose to trade with SharkFunded.
                </p>
            </div>
            {/* Feature Cards Grid */}
            <div className="relative w-full max-w-[1598px] mx-auto px-4 mb-32">
                <div className="backdrop-blur-[25px] bg-[rgba(33,38,75,0.25)] border border-[rgba(255,255,255,0.1)] rounded-[20px] relative overflow-hidden">

                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 relative">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 relative group transition-all duration-300">
                            <div className="w-[100px] h-[100px] mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/assets/feature-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-[22px] md:text-[25.8px] text-white leading-[1.3] tracking-[-0.6px] mb-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                100% Refundable Fees
                            </h3>
                            <p className="font-normal text-[16px] md:text-[18px] text-[#818089] leading-tight tracking-[-0.6px] max-w-[380px] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Get 100% of your evaluation fees refunded, so you basically get funded for free!
                            </p>
                            {/* Right Divider for Desktop */}
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 relative group transition-all duration-300">
                            <div className="w-[100px] h-[100px] mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/assets/feature-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-[22px] md:text-[25.8px] text-white leading-[1.3] tracking-[-0.6px] mb-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                No Consistency Rules
                            </h3>
                            <p className="font-normal text-[16px] md:text-[18px] text-[#818089] leading-tight tracking-[-0.6px] max-w-[380px] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                All of our evaluations accounts do not have any consistency rules!
                            </p>
                            {/* Right Divider for Desktop */}
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 relative group transition-all duration-300">
                            <div className="w-[100px] h-[100px] mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/assets/feature-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-[22px] md:text-[25.8px] text-white leading-[1.3] tracking-[-0.6px] mb-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Daily Payouts
                            </h3>
                            <p className="font-normal text-[16px] md:text-[18px] text-[#818089] leading-tight tracking-[-0.6px] max-w-[380px] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Request a reward on demand no matter how much profit you&apos;ve made!
                            </p>
                        </div>
                    </div>

                    {/* Horizontal Divider */}
                    <div className="hidden md:block w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Bottom Row: 2 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 relative">
                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 relative group transition-all duration-300">
                            <div className="w-[100px] h-[100px] mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/assets/feature-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-[22px] md:text-[25.8px] text-white leading-[1.3] tracking-[-0.6px] mb-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Easiest Prop Firm Challenge
                            </h3>
                            <p className="font-normal text-[16px] md:text-[18px] text-[#818089] leading-tight tracking-[-0.6px] max-w-[380px] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                With targets as low as 6% and max drawdown up to 11% we give the most room to trade!
                            </p>
                            {/* Right Divider for Desktop */}
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col items-center text-center p-8 md:p-12 relative group transition-all duration-300">
                            <div className="w-[100px] h-[100px] mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/assets/feature-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                            </div>
                            <h3 className="font-semibold text-[22px] md:text-[25.8px] text-white leading-[1.3] tracking-[-0.6px] mb-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Weekend Trading Allowed
                            </h3>
                            <p className="font-normal text-[16px] md:text-[18px] text-[#818089] leading-tight tracking-[-0.6px] max-w-[380px] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Now trade best crypto through the weekend without any charges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Presence Section (Separate Card, Image Background) */}
            <div className="relative w-full max-w-[1598px] mx-auto px-4 mb-32">
                <div className="relative rounded-[32px] overflow-hidden bg-[#0A0B1E] min-h-[500px] flex items-center">

                    {/* Background Image */}
                    <img
                        src="/assets/world-map.png"
                        alt="Global Presence background"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/90 pointer-events-none" />

                    {/* Content on the Right */}
                    <div className="relative z-10 w-full flex justify-end p-8 md:p-20">
                        <div className="flex flex-col items-start text-left max-w-[600px]">
                            <h2
                                className="font-[family-name:var(--font-sora)] font-normal text-white text-[32px] md:text-[54px] leading-[1.1] tracking-[-0.04em] mb-6"
                            >
                                Global Presence with<br className="hidden md:block" /> Dedicated Team!
                            </h2>
                            <p className="font-[family-name:var(--font-sora)] font-light text-[#818089] text-[16px] md:text-[18px] leading-[1.6] mb-10">
                                SharkFunded is powered by a global team of over 30 dedicated professionals with extensive experience at Central Banks and the world&apos;s leading proprietary trading firms.
                            </p>

                            <button className="bg-white text-black font-[family-name:var(--font-sora)] font-medium text-[16px] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                                See all
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
