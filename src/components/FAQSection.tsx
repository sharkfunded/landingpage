'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';
import ParallaxBlock from './animations/ParallaxBlock';

const faqs = [
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

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeTab, setActiveTab] = useState('General');

    return (
        <section className="w-full bg-white py-20 px-4 flex flex-col items-center">

            {/* Header */}
            <RevealSection>
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-black font-[family-name:var(--font-sora)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 font-[family-name:var(--font-sora)]">
                        The main reasons why traders choose to trade with SharkFunded.
                    </p>
                </div>
            </RevealSection>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['General', 'Rules', 'Challenges'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-2 rounded-full font-bold border transition-all font-[family-name:var(--font-sora)]
              ${activeTab === tab
                                ? 'bg-[#1E233B] text-white border-[#1E233B]'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                            }
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion */}
            <StaggerContainer className="w-full max-w-[900px] flex flex-col gap-4 mb-24">
                {faqs.map((faq, index) => (
                    <StaggerItem key={index}>
                        <div
                            className="rounded-2xl overflow-hidden bg-[#0A0C1A] text-white border border-white/5 transition-all"
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
                                        <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed font-[family-name:var(--font-sora)]">
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
                                <button className="relative group overflow-hidden rounded-full min-w-[140px] px-8 py-3 transition-transform hover:scale-105 active:scale-95">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                    <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                    <span className="relative z-10 flex items-center justify-center w-full h-full text-base font-normal text-white font-sans tracking-[-0.05em]">
                                        Get Started
                                    </span>
                                </button>
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
