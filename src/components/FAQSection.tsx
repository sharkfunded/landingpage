'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';
import ParallaxBlock from './animations/ParallaxBlock';

const generalFaqs = [
    {
        question: "What is SharkFunded?",
        answer: "SharkFunded is a proprietary trading firm that provides capital to profitable traders. We offer a simulated trading environment where you can prove your skills and earn real rewards based on your performance."
    },
    {
        question: "How do i Get started with SharkFunded?",
        answer: "Getting started is easy! simply choose a challenge plan that fits your trading style, complete the evaluation phase by meeting the profit targets and respecting the risk rules, and once funded, you can start earning payouts."
    },
    {
        question: "What Trading Platforms do you support?",
        answer: "We support the industry-leading MetaTrader 5 (MT5) platform, offering advanced charting, multiple order types, and automated trading capabilities."
    },
    {
        question: "Do you offer support to traders?",
        answer: "Yes, we offer 24/7 customer support via live chat and email to assist you with any technical issues or account inquiries you may have."
    },
    {
        question: "Can I withdraw my Profits?",
        answer: "Absolutely! You can request payouts of your simulated profits. We offer flexible payout options including crypto and bank transfers via our partners."
    }
];

const challengesFaqs = [
    {
        question: "What are the different challenge options?",
        answer: `At SharkFunded, we offer two types of evaluation challenges:

Instant Funding
- Payout Frequency: Weekly
- Daily Drawdown: 4%
- Overall Drawdown: 7%

1-Step Challenge
- Profit Target: 8%
- Payout Frequency: Daily
- Daily Drawdown: 4%
- Overall Drawdown: 7%

2-Step Challenge
- Phase 1 Profit Target: 7%
- Phase 2 Profit Target: 5%
- Payout Frequency: Daily
- Daily Drawdown: 4%
- Overall Drawdown: 11%`
    },
    {
        question: "How long do I have to complete the challenge?",
        answer: "At SharkFunded, we offer unlimited time to complete the evaluation. You can take as long as needed, provided you follow the risk parameters."
    },
    {
        question: "Do I get a refund if I pass the challenge?",
        answer: "Refunds are only available during certain promotions. If a promotion includes a refund incentive, it will be clearly stated at the time of purchase."
    },
    {
        question: "Can I reset my challenge if I fail?",
        answer: "Resets are only available during certain promotions. At SharkFunded, we do not offer resets as a standard feature, but promotions may include this feature."
    },
    {
        question: "What happens after I pass the challenge?",
        answer: "Once you pass, you will be issued a funded account where you can trade and withdraw profits. At SharkFunded, you receive profit splits of up to 100% with no consultancy rules or restrictions on trading styles."
    }
];

const rulesFaqs = [
    {
        question: "What are the daily and overall drawdown limits?",
        answer: `At SharkFunded, our challenges have specific risk parameters:

Instant Funded Account:
- Daily Drawdown: 4%
- Maximum Overall Drawdown: 7%

1-Step Account:
- Daily Drawdown: 4%
- Maximum Overall Drawdown: 7%

2-Step Account:
- Daily Drawdown: 4%
- Maximum Overall Drawdown: 11%

If you exceed these limits, your account will be breached, and you will need to restart the challenge.`
    },
    {
        question: "Can I trade during news events?",
        answer: `Yes! You can trade prior to, after news in both the evaluation and funded stages but you cannot hold through it unless the trade is taken 5 minutes prior.

Why is this beneficial?
Many firms restrict news trading because of market volatility. However, at SharkFunded, we allow you to take advantage of high-impact news events, providing more opportunities to grow your profits.`
    },
    {
        question: "Can I hold trades over the weekend?",
        answer: `Yes!
Evaluation Phase: You can hold trades over the weekend.
Funded Phase: You cannot hold trades over the weekend.`
    },
    {
        question: "Am I allowed to use Expert Advisors (EAs) or copy trading?",
        answer: "Yes, EAs and copy trading are allowed as long as they do not violate any risk parameters. Strategies such as latency arbitrage, tick scalping, or exploiting platform vulnerabilities are strictly prohibited."
    },
    {
        question: "What happens if I violate a rule?",
        answer: "If you breach a rule (exceeding drawdowns, using prohibited strategies, etc.), your account will be invalidated, and you will need to restart the challenge. No refunds are provided for rule violations."
    }
];

interface FAQSectionProps {
    theme?: 'light' | 'dark';
}

export default function FAQSection({ theme = 'light' }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState('General');

    const isDark = theme === 'dark';
    const bgColor = isDark ? 'bg-[#050B25]' : 'bg-white';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-400' : 'text-gray-500';

    // Select FAQ array based on active tab
    const currentFaqs = activeTab === 'Challenges' ? challengesFaqs : activeTab === 'Rules' ? rulesFaqs : generalFaqs;

    return (
        <section className={`w-full py-12 px-4 flex flex-col items-center ${bgColor}`}>

            {/* Header */}
            <RevealSection>
                <div className="text-center mb-12">
                    <h2 className={`text-[clamp(32px,4vw,48px)] font-bold font-[family-name:var(--font-sora)] mb-4 ${textColor}`}>
                        Frequently Asked Questions
                    </h2>
                    <p className={`${subTextColor} font-[family-name:var(--font-sora)]`}>
                        The main reasons why traders choose to trade with SharkFunded.
                    </p>
                </div>
            </RevealSection>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['General', 'Rules', 'Challenges'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setOpenIndex(null);
                        }}
                        className={`px-8 py-2 rounded-full font-bold border transition-all font-[family-name:var(--font-sora)]
              ${activeTab === tab
                                ? 'bg-[#1E233B] text-white border-[#1E233B]'
                                : isDark
                                    ? 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                            }
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion */}
            <StaggerContainer className="w-full max-w-[900px] flex flex-col gap-4 mb-24" key={activeTab}>
                {currentFaqs.map((faq, index) => (
                    <StaggerItem key={index}>
                        <div
                            className="rounded-2xl overflow-hidden bg-[#050B25] text-white border border-white/5 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-white/5 transition-colors font-[family-name:var(--font-sora)]"
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUpIcon className="w-6 h-6 text-gray-400" />
                                ) : (
                                    <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed font-[family-name:var(--font-sora)] whitespace-pre-line">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Bottom CTA Banner */}
            <RevealSection className="w-full max-w-[1200px]">
                <div className="w-full rounded-[48px] overflow-hidden relative bg-[#020412]">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#05092B] via-[#0A1045] to-[#020412] z-0" />
                    <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

                    {/* Rays Effect Overlay */}
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute"
                            style={{
                                width: '160%',
                                height: '240%',
                                left: '-35%',
                                top: '-70%',
                                maxWidth: 'none'
                            }}
                        />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
                        {/* Left Text */}
                        <div className="flex-1 text-left max-w-[500px]">
                            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-[1.1] mb-6 font-[family-name:var(--font-sora)]">
                                The Game-Changing Prop Firm That Puts Traders First.
                            </h2>
                            <div className="text-gray-400 mb-8 font-[family-name:var(--font-sora)]">
                                SharkFunded has one mission – to help India get Funded!
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link href="https://dashboard.sharkfunded.com/register" className="relative group overflow-hidden rounded-full min-w-[140px] px-8 py-3 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                    <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                    <span className="relative z-10 flex items-center justify-center w-full h-full text-base font-normal text-white font-sans tracking-[-0.05em]">
                                        Get Started
                                    </span>
                                </Link>
                                <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors font-[family-name:var(--font-sora)]">
                                    How it works?
                                </button>
                            </div>
                        </div>

                        {/* Right Image (Dashboard Mockup) */}
                        <div className="flex-1 w-full max-w-[600px] relative">
                            <ParallaxBlock offset={-30}>
                                <img
                                    src="/assets/Frame 2147225728 (1).png"
                                    alt="Prop Trading Dashboard"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </ParallaxBlock>
                        </div>
                    </div>
                </div>
            </RevealSection>

        </section>
    );
}
