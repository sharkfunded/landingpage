'use client';

import React from 'react';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#00020E] text-white pt-20 pb-48 relative overflow-hidden font-[family-name:var(--font-sora)]">

            {/* Background Watermark */}
            <div className="absolute bottom-[-5vw] left-0 w-full flex justify-center pointer-events-none opacity-[0.2] select-none z-0">
                <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#2B3557] to-[#131426] whitespace-nowrap">
                    SharkFunded
                </h1>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            {/* Shark Logo */}
                            <img
                                src="/assets/shark-logo.svg"
                                alt="SharkFunded Logo"
                                className="w-11 h-11"
                            />
                            <span className="text-3xl font-bold tracking-tight">SharkFunded</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                            Copyright ©2025 SharkFunded. All rights reserved.
                        </p>
                    </div>
                    <Link href="https://dashboard.sharkfunded.com/register" className="px-10 py-4 bg-gradient-to-b from-[#1C3F85] to-[#0A1835] border border-[#2B60C8] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(28,63,133,0.3)] hover:brightness-110 transition-all text-lg inline-block text-center">
                        Get Funded
                    </Link>
                </div>

                {/* Links & Newsletter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20">

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Column 1 - Company */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold text-xl">Company</h4>
                            <ul className="flex flex-col gap-4 text-gray-500 text-base">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* Column 2 - Trading */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold text-xl">Trading</h4>
                            <ul className="flex flex-col gap-4 text-gray-500 text-base">
                                <li><a href="/#pricing" className="hover:text-white transition-colors">Challenges</a></li>
                                <li><a href="/symbols" className="hover:text-white transition-colors">Symbols</a></li>
                                <li><a href="/what-is-prop-trading" className="hover:text-white transition-colors">What is Prop Trading</a></li>
                                <li><a href="/rewards" className="hover:text-white transition-colors">Rewards</a></li>
                            </ul>
                        </div>
                        {/* Column 3 - Resources */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold text-xl">Resources</h4>
                            <ul className="flex flex-col gap-4 text-gray-500 text-base">
                                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
                                <li><a href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</a></li>
                                <li><a href="https://intercom.help/sharkfunded/en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FAQs</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                        <h4 className="font-bold text-xl">Subscribe to our newsletter</h4>
                        <div className="flex gap-2 p-1.5 bg-transparent rounded-2xl border border-white/5">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="flex-1 bg-white text-black px-6 py-4 rounded-xl focus:outline-none text-base"
                            />
                            <Link href="https://dashboard.sharkfunded.com/register" className="px-8 py-4 bg-gradient-to-b from-[#1C3F85] to-[#0A1835] border border-[#2B60C8] text-white font-bold rounded-xl hover:brightness-110 transition-all whitespace-nowrap flex items-center justify-center">
                                Get Started
                            </Link>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed italic">
                            {String.fromCharCode(123)} Will send you weekly updates for your better business management. {String.fromCharCode(125)}
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 gap-6">
                    <div className="flex gap-10 text-base text-gray-400 font-medium">
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-8">
                        {/* Discord */}
                        <a href="https://discord.com/invite/aGnhzaZeCJ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" /></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/SharkFundedfirm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/sharkfundedfirm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
