'use client';

import React, { useState } from 'react';
import RevealSection from './RevealSection';
import { AccountSize, accountSizesStandard, accountSizesInstantLite, accountSizesInstantPrime } from './pricing/data/products';
import { pricingConfig } from './pricing/data/pricing';
import { challenges } from './pricing/data/challenges';
import ChallengeCards from './pricing/components/ChallengeCards';
import MobileRulesCard from './pricing/components/MobileRulesCard';
import PhaseTable from './pricing/components/PhaseTable';
import PaymentMethods from './pricing/components/PaymentMethods';

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<'Forex' | 'Futures'>('Forex');
    const [selectedSize, setSelectedSize] = useState<AccountSize>('5K'); // Default
    const [selectedChallenge, setSelectedChallenge] = useState('Two Step Challenge');
    const [isPrime, setIsPrime] = useState(true);

    // Determine config based on selection
    let configSource;

    if (selectedChallenge === 'Instant Funding') {
        configSource = isPrime ? pricingConfig.InstantPrime : pricingConfig.InstantLite;
    } else if (selectedChallenge === 'One-Step Challenge' && !isPrime) {
        configSource = pricingConfig.LiteOneStep;
    } else if (selectedChallenge === 'Two Step Challenge' && !isPrime) {
        configSource = pricingConfig.LiteTwoStep;
    } else {
        configSource = isPrime ? pricingConfig.Prime : pricingConfig.LiteTwoStep;
    }

    // Determine active account sizes
    let currentAccountSizes: AccountSize[];
    if (selectedChallenge === 'Instant Funding') {
        currentAccountSizes = isPrime ? accountSizesInstantPrime : accountSizesInstantLite;
    } else {
        currentAccountSizes = accountSizesStandard;
    }

    // Ensure selectedSize is valid for current set, else default to first
    const data = configSource[selectedSize as keyof typeof configSource] || configSource[currentAccountSizes[0] as keyof typeof configSource];

    // Filter challenges based on Prime/Lite selection
    const filteredChallenges = isPrime
        ? challenges.filter(c => ['Instant Funding', 'Daily Payouts'].includes(c.title))
        : challenges.filter(c => ['Instant Funding', 'One-Step Challenge', 'Two Step Challenge'].includes(c.title));

    // Auto-select first available challenge when toggling Prime/Lite
    React.useEffect(() => {
        if (filteredChallenges.length > 0) {
            // If the currently selected challenge is NOT in the new list, switch to the first one
            if (!filteredChallenges.find(c => c.title === selectedChallenge)) {
                setSelectedChallenge(filteredChallenges[0].title);
            }
        }
    }, [isPrime, filteredChallenges]);

    // Auto-correct account size if not present in current list (e.g. switching from 200K (Standard) to Instant (max 100K))
    React.useEffect(() => {
        // We cast to string check to avoid TS complexity for now, or just check inclusion
        if (!currentAccountSizes.includes(selectedSize)) {
            setSelectedSize(currentAccountSizes[0]);
        }
    }, [selectedChallenge, currentAccountSizes]);

    return (
        <section
            id="pricing"
            className="w-full relative flex flex-col items-start justify-center text-left overflow-visible py-20"
        >
            <RevealSection>
                <div className="w-[95%] max-w-[1800px] mx-auto bg-[#020514] rounded-[60px] p-8 md:p-16 md:pb-24 relative overflow-hidden ring-1 ring-white/5">

                    {/* Jellyfish Background */}
                    <div className="absolute -top-[20%] -right-[15%] w-[60%] h-[1000px] pointer-events-none z-0 overflow-visible mix-blend-screen opacity-100 hidden md:block transform-gpu">
                        <img
                            src="/assets/jellyfish-figma.webp"
                            alt=""
                            className="w-full h-full object-contain opacity-100 transform-gpu"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-12 relative z-10 w-full">

                        {/* HEADLINE */}
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.1]" style={{ fontSize: 'clamp(32px, 5vw, 75px)', letterSpacing: '-3.75px' }}>
                                Bukle Up, your Journey Starts Here !
                            </h2>
                            <p className="font-sans text-white/90 font-normal" style={{ fontSize: 'clamp(12px, 1.25vw, 16px)', maxWidth: '867px' }}>
                                Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                            </p>
                        </div>

                        {/* --- MOBILE VIEW (RESTORED PILLS) --- */}
                        <div className="md:hidden w-full flex flex-col gap-6 items-center">

                            {/* 0. NEW: Instruments Selector (Forex/Futures) */}
                            <div className="w-full">

                                <div className="flex gap-3 w-full">
                                    <button
                                        onClick={() => setActiveTab('Forex')}
                                        className={`flex-1 px-4 py-4 rounded-2xl border transition-all flex flex-col items-center gap-2
                                            ${activeTab === 'Forex'
                                                ? 'bg-[#1E233B] text-white border-blue-500/50 shadow-[0_0_15px_rgba(30,35,66,0.5)]'
                                                : 'bg-[#0A0C1A] text-gray-500 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        <span className="text-2xl">$</span>
                                        <span className="text-sm font-bold">Forex</span>
                                        <span className="text-[10px] text-white/60">Raw spreads</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('Futures')}
                                        className={`flex-1 px-4 py-4 rounded-2xl border transition-all flex flex-col items-center gap-2
                                            ${activeTab === 'Futures'
                                                ? 'bg-[#1E233B] text-white border-blue-500/50 shadow-[0_0_15px_rgba(30,35,66,0.5)]'
                                                : 'bg-[#0A0C1A] text-gray-500 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        <img src="/assets/futures_icon.webp" alt="Futures" className="w-6 h-6 object-contain opacity-80" />
                                        <span className="text-sm font-bold">Futures</span>
                                        <span className="text-[10px] text-white/40">Coming Soon</span>
                                    </button>
                                </div>
                            </div>

                            {/* 1. Challenge Type Pills */}
                            <div className="flex flex-wrap justify-center gap-2 w-full">
                                {filteredChallenges.map((c) => (
                                    <button
                                        key={c.title}
                                        onClick={() => setSelectedChallenge(c.title)}
                                        className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border
                                            ${selectedChallenge === c.title
                                                ? 'bg-[#1E233B] text-white border-blue-500/50 shadow-[0_0_15px_rgba(30,35,66,0.5)]'
                                                : 'bg-[#0A0C1A] text-gray-500 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        {c.type || c.title}
                                    </button>
                                ))}
                            </div>

                            {/* 2. Prime/Lite Pills */}
                            <div className="bg-[#0A0C1A] p-1 rounded-full flex items-center border border-white/5">
                                <button
                                    onClick={() => setIsPrime(true)}
                                    className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${isPrime ? 'bg-[#1E233B] text-white ring-1 ring-white/10' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Prime 🔥
                                </button>
                                <button
                                    onClick={() => setIsPrime(false)}
                                    className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${!isPrime ? 'bg-[#1E233B] text-white ring-1 ring-white/10' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Lite
                                </button>
                            </div>

                            {/* 3. Account Size Pills */}
                            <div className="flex flex-wrap justify-center gap-2 w-full">
                                {currentAccountSizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all border
                                            ${selectedSize === size
                                                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                                                : 'bg-[#151932] text-gray-400 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        ${size}
                                    </button>
                                ))}
                            </div>

                            {/* 4. Mobile Data Card */}
                            <MobileRulesCard
                                selectedChallenge={selectedChallenge}
                                isPrime={isPrime}
                                data={data}
                                selectedSize={selectedSize}
                            />

                            <PaymentMethods />


                        </div>

                        {/* --- DESKTOP VIEW --- */}
                        <div className="w-full hidden md:flex flex-col">

                            {/* TABS (Restored) */}
                            <div className="flex items-end w-full pl-0 z-10 hidden md:flex">
                                <button
                                    onClick={() => setActiveTab('Forex')}
                                    className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all ${activeTab === 'Forex' ? 'bg-[#060B30] text-white' : 'bg-transparent text-white/40 hover:text-white/60'}`}
                                    style={{ marginBottom: '-2px' }}
                                >
                                    <span className="text-2xl font-light mb-2">$</span>
                                    <span className="text-[20px] font-bold">Forex</span>
                                    <span className="text-xs font-normal text-white/60">Raw spreads</span>
                                </button>
                                <button onClick={() => setActiveTab('Futures')} className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all ${activeTab === 'Futures' ? 'bg-[#060B30] text-white' : 'bg-transparent text-white/40 hover:text-white/60'}`}>
                                    <img src="/assets/futures_icon.webp" alt="Futures" className="w-8 h-8 object-contain mb-2 opacity-80" decoding="async" />
                                    <span className="text-[20px] font-bold">Futures</span>
                                    <span className="text-xs font-normal text-white/40 opacity-70">Coming Soon</span>
                                </button>
                            </div>

                            {/* CONTAINER */}
                            <div
                                className="w-full rounded-b-[48px] rounded-tr-[48px] rounded-tl-none p-8 flex flex-col gap-10 relative z-0 border-t border-white/5"
                                style={{
                                    background: 'linear-gradient(180deg, #060B30 0%, #00000A 100%)',
                                    boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.6)',
                                    borderTopLeftRadius: activeTab === 'Forex' ? '0px' : '48px'
                                }}
                            >
                                {/* 0. NEW: Big Prime/Lite Toggle */}
                                <div className="w-full flex justify-center mb-10">
                                    <div className="bg-[#0f1226] p-2 rounded-full inline-flex items-center gap-2 border border-white/5 relative z-10 shadow-xl">
                                        <button
                                            onClick={() => setIsPrime(true)}
                                            className={`px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 ${isPrime ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                        >
                                            Shark Funded Prime
                                        </button>
                                        <button
                                            onClick={() => setIsPrime(false)}
                                            className={`px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 ${!isPrime ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                        >
                                            Shark Funded Lite
                                        </button>
                                    </div>
                                </div>

                                {/* 1. CHALLENGE CARDS (Restored Previous Look) */}
                                <ChallengeCards
                                    filteredChallenges={filteredChallenges}
                                    selectedChallenge={selectedChallenge}
                                    setSelectedChallenge={setSelectedChallenge}
                                    isPrime={isPrime}
                                />

                                {/* 2. SIZE SELECTOR BUTTONS (Updated per Screenshot) */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Select Account Size</p>
                                    </div>

                                    <div className="flex flex-wrap justify-between gap-3 w-full">
                                        {currentAccountSizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`flex-1 min-w-[100px] py-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-1
                                                    ${selectedSize === size
                                                        ? 'bg-[#1E2342] border-blue-500/50 shadow-[0_0_20px_rgba(30,35,66,0.6)] z-10'
                                                        : 'bg-[#0A0C1A] border-white/5 text-white/40 hover:border-white/20 hover:text-white hover:bg-white/5'
                                                    }
                                                `}
                                            >
                                                <span className={`text-xl font-bold ${selectedSize === size ? 'text-white' : 'text-inherit'}`}>
                                                    ${size.replace('K', ',000')}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Promo Banner */}
                                <div className="w-full bg-[#1A3F45]/30 border border-[#4FD1C5]/20 rounded-xl p-3 flex items-center justify-center gap-4 text-[#4FD1C5] font-medium text-sm">
                                    <span>🎁 New Year Promo: <strong>50% OFF</strong> → Limited Time</span>
                                    <div className="bg-[#4FD1C5]/10 px-3 py-1 rounded border border-[#4FD1C5]/30 text-xs mono flex items-center gap-2">
                                        Code: NY50
                                    </div>
                                </div>

                                {/* 3. PHASE TABLE (Screenshot Structure) */}
                                <PhaseTable
                                    selectedChallenge={selectedChallenge}
                                    data={data}
                                    selectedSize={selectedSize}
                                />

                                <PaymentMethods />

                            </div>
                        </div>
                    </div>
                </div>
            </RevealSection>
        </section>
    );
}
