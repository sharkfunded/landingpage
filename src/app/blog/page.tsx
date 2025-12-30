'use client';

import React from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

import { blogPosts } from "./blogData";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = React.useState('View all');
    const categories = ['View all', 'Trading Psychology', 'Risk Management', 'Prop Trading'];

    const filteredPosts = activeCategory === 'View all'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

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

                {/* Hero Content */}
                <div className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
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

                    {/* Blue Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

                    {/* Rays Effect */}
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-rays.webp"
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
                            <h1 className="text-[clamp(40px,6vw,72px)] font-bold text-white mb-6 font-[family-name:var(--font-sora)] leading-tight tracking-tight">
                                SharkFunded Blog
                            </h1>
                        </RevealSection>

                        <RevealSection delay={0.1}>
                            <p className="text-gray-400 text-lg md:text-xl font-[family-name:var(--font-sora)] font-light leading-relaxed max-w-[700px] mx-auto">
                                Insights, strategies, and news to help you fast-track your journey to becoming a funded trader.
                            </p>
                        </RevealSection>


                    </div>
                </div>
            </div>

            {/* Blog Grid Section */}
            <div className="relative w-full bg-white z-20 py-20 px-4">
                <div className="max-w-[1200px] mx-auto">

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 font-[family-name:var(--font-sora)] border ${activeCategory === category
                                    ? 'bg-[#040822] text-white border-[#040822]' // Dark blue for active
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400' // Light style for inactive
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <RevealSection key={post.slug} delay={index * 0.1}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <div className="bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className="w-full h-[240px] relative overflow-hidden bg-gray-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#040822] font-[family-name:var(--font-sora)] border border-gray-100 shadow-sm">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="text-sm text-gray-400 mb-3 font-[family-name:var(--font-sora)]">
                                                {post.date}
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#040822] mb-3 group-hover:text-blue-600 transition-colors font-[family-name:var(--font-sora)] leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-500 font-light leading-relaxed mb-6 font-[family-name:var(--font-sora)] line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto flex items-center text-blue-600 font-bold font-[family-name:var(--font-sora)] group-hover:translate-x-2 transition-transform">
                                                Read Article
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30 pt-[50px]">
                <Footer />
            </div>

        </main>
    );
}
