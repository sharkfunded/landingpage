"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTradingMobileOpen, setIsTradingMobileOpen] = useState(false);
    const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);

    return (
        <div
            className="w-full bg-black/40 relative flex items-center z-50 px-4 md:px-0 md:pl-[9.375%] md:pr-[9.375%] h-16 md:h-20"
            style={{}}
        >
            <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-between">

                {/* Logo Group */}
                <Link href="/" className="flex items-center shrink-0 z-[60]" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
                    <div className="relative shrink-0" style={{ height: 'clamp(28px, 3vw, 48px)' }}>
                        <img src="/assets/shark-logo.svg" alt="SharkFunded Logo" className="h-full w-auto object-contain" />
                    </div>
                    <div
                        className="font-normal leading-none text-transparent bg-clip-text bg-[linear-gradient(173deg,#FFF_44.98%,#4B4B56_103.76%)]"
                        style={{
                            fontSize: 'clamp(18px, 2vw, 32px)',
                            letterSpacing: 'clamp(-0.3px, -0.06vw, -1.1px)'
                        }}
                    >
                        Shark<span className="font-semibold">Funded</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Centered Flex Group */}
                <nav className="hidden lg:flex items-center text-white font-light" style={{ gap: 'clamp(10px, 1.5vw, 30px)' }}>
                    <Link
                        href="/#pricing"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: '14px',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Challenges
                    </Link>
                    <Link
                        href="/affiliate"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: '14px',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Partner Up
                    </Link>

                    {/* About Us Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 hover:text-blue-400 transition-colors focus:outline-none"
                            style={{
                                fontSize: '14px',
                                letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                            }}
                        >
                            About Us
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#040822] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top overflow-hidden">
                            <div className="p-1">
                                <Link href="/about-us" className="block px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors text-gray-200 hover:text-white">
                                    About Us
                                </Link>
                                <Link href="/careers" className="block px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors text-gray-200 hover:text-white">
                                    Careers
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Trading Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 hover:text-blue-400 transition-colors focus:outline-none"
                            style={{
                                fontSize: '14px',
                                letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                            }}
                        >
                            Trading
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#040822] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top overflow-hidden">
                            <div className="p-1">
                                <Link href="/blog" className="block px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors text-gray-200 hover:text-white">
                                    Blogs
                                </Link>
                                <Link href="/symbols" className="block px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors text-gray-200 hover:text-white">
                                    Symbols
                                </Link>
                                <Link href="/what-is-prop-trading" className="block px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors text-gray-200 hover:text-white">
                                    Prop Trading
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="https://intercom.help/sharkfunded/en"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: '14px',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        FAQs
                    </Link>
                    <Link
                        href="/reviews"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: '14px',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Reviews
                    </Link>
                </nav>
                {/* Action Buttons */}
                <div className="hidden lg:flex items-center shrink-0" style={{ gap: 'clamp(10px, 1vw, 16px)' }}>
                    <Link
                        href="https://dashboard.sharkfunded.com/login"
                        className="rounded-[65px] border border-[#6880ff] text-white font-normal hover:bg-[#6880ff]/10 transition-colors flex items-center justify-center"
                        style={{
                            width: 'clamp(80px, 8vw, 140px)',
                            height: 'clamp(36px, 3.5vw, 56px)',
                            fontSize: 'clamp(14px, 1.2vw, 22px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.75px)'
                        }}
                    >
                        Login
                    </Link>
                    <Link href="https://dashboard.sharkfunded.com/register" className="relative group overflow-hidden rounded-full w-[clamp(100px,10vw,180px)] h-[clamp(36px,3.5vw,56px)] transition-transform hover:scale-105 active:scale-95 block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                        <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                        <span className="relative z-10 flex items-center justify-center w-full h-full text-[clamp(14px,1.2vw,22px)] font-normal text-white font-sans tracking-[-0.05em]">
                            Get Started
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle - Hidden as we now use bottom navigation */}
                <div className="hidden lg:hidden text-white cursor-pointer z-[60]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Mobile Menu Dropdown (Floating Glass Card) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
                            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
                            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                            className="fixed top-1/2 left-1/2 z-[70] w-[90%] max-w-[400px] bg-[#040822]/80 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 flex flex-col items-center gap-6 shadow-2xl lg:hidden max-h-[70vh] overflow-y-auto no-scrollbar"
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-white text-lg font-medium transition-colors">Home</Link>
                            <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-white text-lg font-medium transition-colors">Challenges</Link>
                            <Link href="/affiliate" className="text-white/90 hover:text-white text-lg font-medium transition-colors">Partner Up</Link>

                            {/* Mobile About Us Accordion */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
                                    className="text-white/90 hover:text-white text-lg font-medium flex items-center gap-2 transition-colors"
                                >
                                    About Us
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${isAboutMobileOpen ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {isAboutMobileOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden w-full"
                                        >
                                            <div className="flex flex-col items-center gap-3 pt-3">
                                                <Link href="/about-us" className="text-gray-400 hover:text-white text-base block">About Us</Link>
                                                <Link href="/careers" className="text-gray-400 hover:text-white text-base block">Careers</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Trading Accordion */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => setIsTradingMobileOpen(!isTradingMobileOpen)}
                                    className="text-white/90 hover:text-white text-lg font-medium flex items-center gap-2 transition-colors"
                                >
                                    Trading
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${isTradingMobileOpen ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {isTradingMobileOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden w-full"
                                        >
                                            <div className="flex flex-col items-center gap-3 pt-3">
                                                <Link href="/blog" className="text-gray-400 hover:text-white text-base block">Blogs</Link>
                                                <Link href="/symbols" className="text-gray-400 hover:text-white text-base block">Symbols</Link>
                                                <Link href="/what-is-prop-trading" className="text-gray-400 hover:text-white text-base block">Prop Trading</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="#" className="text-white/90 hover:text-white text-lg font-medium transition-colors">FAQs</Link>
                            <Link href="/reviews" className="text-white/90 hover:text-white text-lg font-medium transition-colors">Reviews</Link>

                            <div className="w-full pt-4 flex flex-col gap-3">
                                <Link href="https://dashboard.sharkfunded.com/login" className="w-full h-[48px] rounded-full border border-[#6880ff] text-white text-base font-medium hover:bg-[#6880ff]/10 transition-colors flex items-center justify-center">Login</Link>
                                <Link href="https://dashboard.sharkfunded.com/register" className="relative group overflow-hidden rounded-full w-full h-[48px] transition-transform hover:scale-105 active:scale-95 block">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                    <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                    <span className="relative z-10 flex items-center justify-center w-full h-full text-base font-medium text-white font-sans tracking-[-0.05em]">
                                        Get Started
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                    </>
                )}
            </AnimatePresence>

            {/* Persistent Bottom Navigation Toggle */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="px-6 py-3 rounded-2xl bg-[#595c7b]/40 backdrop-blur-md border border-white/20 text-white font-medium flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
                >
                    {isMobileMenuOpen ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            Navigation
                        </>
                    )}
                </button>
            </div>
        </div >
    );
}
