'use client';

import { useState } from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<'Forex' | 'Futures'>('Forex');
    const [selectedSize, setSelectedSize] = useState('100K');
    const [selectedChallenge, setSelectedChallenge] = useState('Two Step Challenge');
    const [isPrime, setIsPrime] = useState(true);

    const challenges = [
        {
            title: 'One-Step Challenge',
            type: '1-Step',
            features: ['Only 8% profit target', 'Get Funded fast'],
            badge: 'Popular',
            badgeColor: 'bg-[#292D32] text-white' // Dark grey badge
        },
        {
            title: 'Two Step Challenge',
            type: '2-Step',
            features: ['Standard evaluation', '10% max drawdown'],
            badge: null,
            badgeColor: ''
        },
        {
            title: 'Try Shark Funding',
            type: 'Trial',
            features: ['Fastest evaluation', 'Fastest evaluation'],
            badge: 'New',
            badgeColor: 'bg-white text-black'
        },
        {
            title: 'Instant Funding',
            type: 'Instant',
            features: ['No evaluation', 'Fastest Way'],
            badge: 'Fastest',
            badgeColor: 'bg-[#ff3b3b] text-white',
            isSpecial: true // For reddish background/border
        }
    ];

    const accountSizes = [
        { size: '5K', price: '$35.6', oldPrice: '$89', link: '/buy/5k' },
        { size: '10K', price: '$55.46', oldPrice: '$139', link: '/buy/10k' },
        { size: '25K', price: '$95.6', oldPrice: '$239', link: '/buy/25k' },
        { size: '50K', price: '$159.6', oldPrice: '$399', link: '/buy/50k' },
        { size: '100K', price: '$308', oldPrice: '$770', link: '/buy/100k' }
    ];

    return (
        <section
            className="w-full relative flex flex-col items-start justify-center text-left overflow-visible"
        >
            {/* Main Container behaving like a large card */}
            <RevealSection>
                <div className="w-[95%] max-w-[1800px] mx-auto bg-[#020514] rounded-[60px] p-8 md:p-16 md:pb-24 relative overflow-hidden ring-1 ring-white/5">

                    {/* Jellyfish Background - Centered more to the right and adjusted for Figma image */}
                    <div className="absolute -top-[20%] -right-[15%] w-[60%] h-[1000px] pointer-events-none z-0 overflow-visible mix-blend-screen opacity-100 hidden md:block transform-gpu">
                        <img
                            src="/assets/jellyfish-figma.png"
                            alt=""
                            className="w-full h-full object-contain opacity-100 transform-gpu"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-12 relative z-10">

                        {/* Header Text */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Title */}
                            <h2
                                className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.1]"
                                style={{
                                    fontSize: 'clamp(32px, 5vw, 75px)',
                                    letterSpacing: '-3.75px'
                                }}
                            >
                                Straightforward Challenges!
                            </h2>

                            {/* Subtitle */}
                            <p
                                className="font-sans text-white/90 font-normal"
                                style={{
                                    fontSize: 'clamp(12px, 1.25vw, 16px)',
                                    maxWidth: '867px'
                                }}
                            >
                                Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                            </p>
                        </div>

                        {/* --- MOBILE VIEW --- */}
                        <div className="md:hidden w-full flex flex-col gap-6 items-center">
                            {/* Challenge Type Pills */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {challenges.map((c) => (
                                    <button
                                        key={c.title}
                                        onClick={() => setSelectedChallenge(c.title)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all
                                    ${selectedChallenge === c.title
                                                ? 'bg-[#1E233B] text-white border border-white/20 shadow-lg'
                                                : 'bg-[#0A0C1A] text-gray-500 border border-transparent'}
                                `}
                                    >
                                        {c.type || c.title}
                                    </button>
                                ))}
                            </div>

                            {/* Prime/Lite Pills */}
                            <div className="bg-[#0A0C1A] p-1 rounded-full flex items-center border border-white/5 w-fit">
                                <button
                                    onClick={() => setIsPrime(true)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${isPrime ? 'bg-[#1E233B] text-white' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Prime 🔥
                                </button>
                                <button
                                    onClick={() => setIsPrime(false)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${!isPrime ? 'bg-[#1E233B] text-white' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Lite
                                </button>
                            </div>

                            {/* Size Selector Pills */}
                            <div className="flex flex-wrap justify-center gap-2 pb-2">
                                {accountSizes.map((size) => (
                                    <button
                                        key={size.size}
                                        onClick={() => setSelectedSize(size.size)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all
                                    ${selectedSize === size.size
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                                                : 'bg-[#151932] text-gray-400 border border-white/5'}
                                `}
                                    >
                                        ${size.size}
                                    </button>
                                ))}
                            </div>

                            {/* Details Card for Selected Size */}
                            <div className="w-full bg-[#151932] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div>
                                        <div className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-sora)]">
                                            ${accountSizes.find(s => s.size === selectedSize)?.size} Challenge
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                                            Virtual Capital <InformationCircleIcon className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white font-[family-name:var(--font-sora)]">
                                            {accountSizes.find(s => s.size === selectedSize)?.price}
                                        </div>
                                        <div className="text-xs text-gray-500 line-through">
                                            {accountSizes.find(s => s.size === selectedSize)?.oldPrice}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 relative z-10">
                                    {[
                                        { label: 'Reward Target', value: '3%' },
                                        { label: 'Max Daily Drawdown', value: '3%' },
                                        { label: 'Max Overall Drawdown', value: '5%' },
                                        { label: 'Profit Split', value: '80%' },
                                        { label: 'Consistency', value: '15%' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                            <span className="text-gray-400 text-xs font-medium">{item.label}</span>
                                            <span className="text-white font-bold text-sm">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-4 bg-white text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-gray-100 transition-colors relative z-10">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* --- DESKTOP VIEW --- */}
                        {/* Tabs & Pricing Wrapper Group */}
                        <div className="w-full hidden md:flex flex-col">
                            {/* Tabs: Forex / Futures - Moved OUTSIDE the gradient container */}
                            <div className="flex items-end w-full pl-0 z-10"> {/* Removed pl-8 to align flush left */}
                                <button
                                    onClick={() => setActiveTab('Forex')}
                                    className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all
                                ${activeTab === 'Forex'
                                            ? 'bg-[#060B30] text-white'
                                            : 'bg-transparent text-white/40 hover:text-white/60'
                                        }`}
                                    style={{ marginBottom: '-2px' }} // Negative margin to overlapping border/gap
                                >
                                    <span className="text-2xl font-light mb-2">¥</span>
                                    <span className="text-[20px] font-bold">Forex</span>
                                    <span className="text-xs font-normal text-white/60">Raw spreads low commissions</span>
                                </button>

                                <button
                                    onClick={() => setActiveTab('Futures')}
                                    className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all
                                ${activeTab === 'Futures'
                                            ? 'bg-[#060B30] text-white'
                                            : 'bg-transparent text-white/40 hover:text-white/60'
                                        }`}
                                >
                                    <img src="/assets/futures_icon.webp" alt="Futures" className="w-8 h-8 object-contain mb-2 opacity-80" decoding="async" />
                                    <span className="text-[20px] font-bold">Futures (Coming Soon!)</span>
                                    <span className="text-xs font-normal text-white/40">50+ Crypto Coins to trade</span>
                                </button>
                            </div>

                            <div
                                className="w-full rounded-b-[48px] rounded-tr-[48px] rounded-tl-none p-8 flex flex-col gap-8 relative z-0"
                                style={{
                                    background: 'linear-gradient(180deg, #060B30 0%, #00000A 100%)',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                    borderTopRightRadius: '48px',
                                    borderBottomRightRadius: '48px',
                                    borderBottomLeftRadius: '48px',
                                    borderTopLeftRadius: activeTab === 'Forex' ? '0px' : '48px' // Dynamic corner based on active tab? For now fix to Forex active design
                                }}
                            >

                                {/* Challenge Cards Grid */}
                                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                    {challenges.map((challenge, index) => (
                                        <StaggerItem key={index}>
                                            <div
                                                onClick={() => setSelectedChallenge(challenge.title)}
                                                // Specific colors from design: standard is dark blue, instant is reddish, selected is highlighted
                                                className={`relative p-8 rounded-2xl border transition-all cursor-pointer group min-h-[180px] flex flex-col justify-between h-full
                                        ${challenge.isSpecial
                                                        ? 'bg-[linear-gradient(180deg,rgba(226,27,50,0.37)_0%,rgba(226,27,50,0.1)_100%)] border-[#E21B32]/30 hover:border-[#E21B32]/60'
                                                        : (challenge.title === 'Two Step Challenge' || challenge.title === 'Try Shark Funding')
                                                            ? 'bg-[linear-gradient(180deg,rgba(34,67,139,0.84)_0%,rgba(34,67,139,0)_100%)] border-[#22438B]/30 hover:border-[#22438B]/60'
                                                            : selectedChallenge === challenge.title
                                                                ? 'bg-[#1e2342] border-blue-500/50 shadow-[0_0_30px_rgba(30,35,66,0.5)]'
                                                                : 'bg-[#151932] border-white/5 hover:border-white/10'
                                                    }
                                                `}
                                            >
                                                {/* Badge */}
                                                {challenge.badge && (
                                                    <div className={`absolute -top-7 left-8 px-4 py-1 rounded-t-xl text-xs font-bold uppercase tracking-wider ${challenge.badgeColor}`}>
                                                        {challenge.badge}
                                                    </div>
                                                )}

                                                <h3 className="text-lg xl:text-[20px] font-bold text-white mt-2 mb-2 whitespace-nowrap">{challenge.title}</h3>

                                                <div className="flex flex-col gap-2">
                                                    {challenge.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-white/60 text-[14px] font-medium">
                                                            <CheckCircleIcon className={`w-4 h-4 ${challenge.isSpecial ? 'text-[#ff3b3b]' : 'text-white'}`} />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>

                                {/* Controls: Prime/Lite Toggle - Moved to Table Header */}
                                {/* Data Grid Table */}
                                <div className="w-full overflow-x-auto pb-6"> {/* Added scroll wrapper with padding for scrollbar visibility */}
                                    <table className="w-full text-left border-collapse table-fixed min-w-[1000px] rounded-2xl"> {/* ADDED BORDER HERE */}
                                        <thead>
                                            <tr>
                                                <th className="p-4 w-[20%] text-left align-bottom pb-8"> {/* ADDED BORDER-R HERE */}
                                                    <div className="bg-[#0f1226] p-1.5 rounded-full inline-flex gap-1 border border-white/5 shadow-inner">
                                                        <button
                                                            onClick={() => setIsPrime(true)}
                                                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2
                                                        ${isPrime
                                                                    ? 'bg-black border border-white/10 text-white shadow-lg'
                                                                    : 'text-white/40 hover:text-white/70'}`}
                                                        >
                                                            Prime <img src="/assets/Vector.webp" alt="Prime" className="w-3 h-3 object-contain" decoding="async" />
                                                        </button>
                                                        <button
                                                            onClick={() => setIsPrime(false)}
                                                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all
                                                        ${!isPrime
                                                                    ? 'bg-black border border-white/10 text-white shadow-lg'
                                                                    : 'text-white/40 hover:text-white/70'}`}
                                                        >
                                                            Lite
                                                        </button>
                                                    </div>
                                                </th>
                                                {accountSizes.map((size, index) => (
                                                    <th
                                                        key={index}
                                                        onMouseEnter={() => setSelectedSize(size.size)}
                                                        className={`pb-8 text-center relative cursor-default transition-colors duration-300 ${size.size === selectedSize ? 'bg-[#1e2342] rounded-t-xl' : ''}`}
                                                    >
                                                        <div className="text-[32px] font-bold text-white mb-1">${size.size}</div>
                                                        <div className="text-white/40 text-xs font-medium flex items-center justify-center gap-1 uppercase tracking-wide">
                                                            Virtual Capital <img src="/assets/info_icon.webp" alt="Info" className="w-3.5 h-3.5 object-contain opacity-50" decoding="async" />
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="text-white/80">
                                            {/* Specs Rows */}
                                            {[
                                                { label: 'Reward Target', vals: ['3%', '3%', '3%', '3%', '3%'], highlight: false },
                                                { label: 'Max Daily Drawdown', vals: ['3%', '3%', '3%', '3%', '3%'], highlight: false },
                                                { label: 'Max Overall Drawdown', vals: ['5%', '5%', '5%', '5%', '5%'], highlight: false },
                                                { label: 'Profit Split', vals: ['80%', '80%', '80%', '80%', '80%'], highlight: false },
                                                { label: 'Consistency', vals: ['15%', '15%', '15%', '15%', '15%'], highlight: false },
                                            ].map((row, rowIndex) => (
                                                <tr key={rowIndex} className="group hover:bg-white/[0.02]">
                                                    <td className="py-6 px-4 font-medium text-white flex items-center gap-3 text-sm">
                                                        {rowIndex === 0 && <img src="/assets/reward_icon.webp" alt="Reward" className="w-5 h-5 object-contain" decoding="async" />}
                                                        {rowIndex === 1 && <img src="/assets/drawdown_icon.webp" alt="Drawdown" className="w-5 h-5 object-contain" decoding="async" />}
                                                        {rowIndex === 2 && <img src="/assets/max_overall_emoji.webp" alt="Max Overall Drawdown" className="w-5 h-5 object-contain" decoding="async" />}
                                                        {rowIndex === 3 && <img src="/assets/profit_icon.webp" alt="Profit Split" className="w-5 h-5 object-contain" decoding="async" />}
                                                        {rowIndex === 4 && <img src="/assets/consistency_icon.webp" alt="Consistency" className="w-5 h-5 object-contain" decoding="async" />}
                                                        {row.label}
                                                        <img src="/assets/info_icon.webp" alt="Info" className="w-4 h-4 object-contain opacity-20" decoding="async" />
                                                    </td>
                                                    {row.vals.map((val, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            onMouseEnter={() => setSelectedSize(accountSizes[colIndex].size)}
                                                            className={`py-6 text-center text-xl font-bold font-[family-name:var(--font-sora)] transition-colors duration-300
                                                    ${accountSizes[colIndex].size === selectedSize ? 'bg-[#1e2342]' : ''}
                                                `}>
                                                            {val}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}

                                            {/* Price Row */}
                                            <tr>
                                                <td className="py-8 px-4"></td>
                                                {accountSizes.map((size, index) => (
                                                    <td
                                                        key={index}
                                                        onMouseEnter={() => setSelectedSize(size.size)}
                                                        className={`py-8 px-4 text-center transition-colors duration-300 ${size.size === selectedSize ? 'bg-[#1e2342] rounded-b-xl' : ''}`}
                                                    >
                                                        <div className="flex flex-col items-center gap-0 mb-6">
                                                            <motion.span
                                                                key={size.price}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="text-[36px] font-bold bg-gradient-to-b from-white to-[#7496FF] bg-clip-text text-transparent tracking-tight"
                                                            >
                                                                {size.price}
                                                            </motion.span>
                                                            <span className="text-sm text-white/30 line-through decoration-white/30">{size.oldPrice}</span>
                                                        </div>

                                                        <div className="mb-6 flex justify-center">
                                                            <div className="bg-[#151932] px-4 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 text-xs font-bold text-white/70">
                                                                V40 <img src="/assets/copy_icon.webp" alt="Copy" className="w-3.5 h-3.5 object-contain opacity-50" decoding="async" />
                                                            </div>
                                                        </div>

                                                        <button className="relative group overflow-hidden rounded-full w-full py-3.5 transition-transform hover:scale-105 active:scale-95">
                                                            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                                            <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                                            <span className="relative z-10 flex items-center justify-center w-full h-full text-sm font-normal text-white font-sans tracking-[-0.05em]">
                                                                Buy Now
                                                            </span>
                                                        </button>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Challenge Rules */}
                                <div className="mt-16 flex flex-col items-center justify-center space-y-8 w-full pb-8">
                                    <h4 className="text-[#8E9BAE] text-sm font-bold tracking-[0.2em] uppercase">Challenge Rules</h4>
                                    <div className="flex items-center gap-4">
                                        {[
                                            'Hold Over Weekend',
                                            'News trading allowed',
                                            'News trading allowed'
                                        ].map((rule, idx) => (
                                            <div key={idx} className="bg-[#05091D] border border-white/5 rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-lg">
                                                <div className="bg-[#0055FF] rounded-full p-1">
                                                    <CheckCircleIcon className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-white text-sm font-medium">{rule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealSection>
        </section >
    );
}


