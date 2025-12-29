'use client';

import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Formatting slug for display title (e.g., "my-post-title" -> "My Post Title")
    const displayTitle = slug
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Loading...";

    return (
        <main className="relative w-full min-h-screen bg-white overflow-x-hidden">

            {/* Header & Hero Container */}
            <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5">
                <div className="relative z-50">
                    <StickyHeader>
                        <TopBar />
                        <Navbar />
                    </StickyHeader>
                </div>

                {/* Hero Content - Compact for Article */}
                <div className="relative w-full py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c1445] via-[#040822] to-[#040822] z-0" />

                    {/* Background Effect Image */}
                    <div
                        className="absolute inset-0 pointer-events-none overflow-hidden"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-hero-bg.png"
                            alt=""
                            className="absolute w-[108%] h-[112%] object-cover"
                            style={{
                                left: '-4%',
                                top: '-10%',
                                maxWidth: 'none',
                                transform: 'scaleY(-1)'
                            }}
                        />
                    </div>

                    {/* Rays Effect */}
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute"
                            style={{
                                width: '120%',
                                height: '140%',
                                left: '-10%',
                                top: '10%',
                                maxWidth: 'none',
                                transform: 'scaleY(-1)'
                            }}
                        />
                    </div>

                    <div className="relative z-10 max-w-[900px]">
                        <RevealSection>
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6 font-[family-name:var(--font-sora)]">
                                Trading Insights
                            </div>
                            <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-white mb-6 font-[family-name:var(--font-sora)] leading-tight tracking-tight">
                                {displayTitle}
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm md:text-base font-[family-name:var(--font-sora)]">
                                <span>December 20, 2024</span> // Mock Date
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>5 Min Read</span>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="relative w-full bg-white z-20 py-20 px-4">
                <article className="max-w-[800px] mx-auto prose prose-lg prose-headings:font-[family-name:var(--font-sora)] prose-p:font-[family-name:var(--font-sora)] prose-p:font-light prose-p:text-gray-600 prose-headings:text-[#040822]">
                    <RevealSection delay={0.1}>
                        <p className="lead text-xl md:text-2xl text-gray-500 font-light mb-8">
                            This is a placeholder for the article content. In a real implementation, you would fetch the content for <strong>{slug}</strong> from your CMS or local markdown files.
                        </p>

                        <h2>Introduction</h2>
                        <p>
                            Proprietary trading offers a unique opportunity for skilled traders to leverage significant capital without risking their own funds. However, success in this field requires more than just a profitable strategy; it demands disciplined risk management and emotional control.
                        </p>

                        <blockquote>
                            "The goal of a successful trader is to make the best trades. Money is secondary." – Alexander Elder
                        </blockquote>

                        <h2>Key Takeaways</h2>
                        <ul>
                            <li>Understand your risk tolerance before starting a challenge.</li>
                            <li>Develop a solid trading plan and stick to it.</li>
                            <li>Use stop losses to protect your capital.</li>
                            <li>Review your trades regularly to identify areas for improvement.</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <p>
                            By mastering the psychological aspects of trading and adhering to strict risk management rules, you can significantly increase your chances of passing a prop firm challenge and maintaining a funded account.
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <Link href="/blog" className="inline-flex items-center text-blue-600 font-bold font-[family-name:var(--font-sora)] hover:-translate-x-1 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                Back to Blog
                            </Link>
                        </div>
                    </RevealSection>
                </article>
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30 pt-[50px]">
                <Footer />
            </div>

        </main>
    );
}
