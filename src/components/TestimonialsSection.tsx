"use client";
import React, { useRef } from "react";

export default function TestimonialsSection() {
    const textScrollRef = useRef<HTMLDivElement>(null);
    const videoScrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    const reviews = [
        {
            name: "Robert W",
            country: "🇬🇧",
            title: "For start they don't have...",
            text: "What can I say other than that this prop firm blows the rest out of the park. With extensive experience of prop firms over the last few years, I've not found one that even comes close to this one and it goes to show just how disreputable a lot of the others are when Brightfunded does what they do. Phase 2 credentials immediately upon passing phase 1, funded account credentials the next day and most importantly...",
        },
        {
            name: "Robert W",
            country: "🇬🇧",
            title: "For start they don't have...",
            text: "What can I say other than that this prop firm blows the rest out of the park. With extensive experience of prop firms over the last few years, I've not found one that even comes close to this one and it goes to show just how disreputable a lot of the others are when Brightfunded does what they do. Phase 2 credentials immediately upon passing phase 1, funded account credentials the next day and most importantly...",
        },
        {
            name: "Robert W",
            country: "🇬🇧",
            title: "For start they don't have...",
            text: "What can I say other than that this prop firm blows the rest out of the park. With extensive experience of prop firms over the last few years, I've not found one that even comes close to this one and it goes to show just how disreputable a lot of the others are when Brightfunded does what they do. Phase 2 credentials immediately upon passing phase 1, funded account credentials the next day and most importantly...",
        },
        {
            name: "Robert W",
            country: "🇬🇧",
            title: "For start they don't have...",
            text: "What can I say other than that this prop firm blows the rest out of the park. With extensive experience of prop firms over the last few years, I've not found one that even comes close to this one and it goes to show just how disreputable a lot of the others are when Brightfunded does what they do. Phase 2 credentials immediately upon passing phase 1, funded account credentials the next day and most importantly...",
        },
    ];

    const videoTestimonials = [
        { name: "Jordy", country: "🇧🇪", amount: "$24,827.20", image: "/assets/testimonial-1.png" }, // Placeholder paths
        { name: "Emre", country: "🇹🇷", amount: "$14,319.90", image: "/assets/testimonial-2.png" },
        { name: "Dave", country: "🇳🇱", amount: "$4,195.37", image: "/assets/testimonial-3.png" },
        { name: "John", country: "🇺🇸", amount: "$24,827.20", image: "/assets/testimonial-4.png" },
        { name: "Emre", country: "🇹🇷", amount: "$24,827.20", image: "/assets/testimonial-2.png" },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center py-24 relative z-20">

            {/* 1. TEXT TESTIMONIALS */}
            <div className="w-full max-w-[1598px] px-4 mx-auto mb-32">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-[family-name:var(--font-sora)] font-medium text-black text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.04em] mb-4">
                            Hear from our Traders
                        </h2>
                        <p className="font-[family-name:var(--font-sora)] font-light text-black text-[18px] max-w-[600px]">
                            Enjoy hassle-free payouts as a reward for your simulated trading. Because you shouldn&apos;t wait for your money.
                        </p>
                    </div>

                    {/* Nav Buttons */}
                    <div className="hidden md:flex gap-4">
                        <button onClick={() => scrollLeft(textScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                            ←
                        </button>
                        <button onClick={() => scrollRight(textScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                            →
                        </button>
                    </div>
                </div>

                {/* Text Cards Carousel */}
                <div
                    ref={textScrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pt-4 pb-4 px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((review, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] bg-[#F5F5F7] border border-black/5 rounded-[24px] p-8 snap-center flex flex-col items-start hover:border-blue-500/50 transition-colors duration-300">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4 text-[#F7B919]">
                                {[...Array(5)].map((_, s) => <span key={s}>★</span>)}
                            </div>

                            <h3 className="font-[family-name:var(--font-sora)] font-bold text-black text-[18px] mb-2">
                                {review.title}
                            </h3>

                            <p className="font-[family-name:var(--font-sora)] font-light text-black text-[14px] leading-[1.6] mb-6 line-clamp-6">
                                {review.text}
                            </p>

                            <div className="mt-auto flex items-center gap-2">
                                <span className="text-black font-medium text-sm">{review.name}</span>
                                <span className="text-lg">{review.country}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* 2. VIDEO TESTIMONIALS */}
            <div className="w-full max-w-[1598px] px-4 mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-[family-name:var(--font-sora)] font-medium text-black text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.04em] mb-4">
                            Video Testimonials
                        </h2>
                        <p className="font-[family-name:var(--font-sora)] font-light text-black text-[18px] max-w-[600px]">
                            Don&apos;t just rely on written reviews. Watch and listen to video testimonials from real SharkFunded traders who are thriving with us.
                        </p>
                    </div>

                    {/* Nav Buttons */}
                    <div className="hidden md:flex gap-4">
                        <button onClick={() => scrollLeft(videoScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                            ←
                        </button>
                        <button onClick={() => scrollRight(videoScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                            →
                        </button>
                    </div>
                </div>

                {/* Video Cards Carousel */}
                <div
                    ref={videoScrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pt-4 pb-4 px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {videoTestimonials.map((video, i) => (
                        <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative rounded-[24px] overflow-hidden snap-center group cursor-pointer border border-white/5">
                            {/* Fallback Background (Gradient if no image) */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500" />

                            {/* Image would go here: <img src={video.image} className="absolute inset-0 w-full h-full object-cover" /> */}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-white font-[family-name:var(--font-sora)] font-medium text-lg">{video.name}</span>
                                    <span className="text-xl">{video.country}</span>
                                </div>
                                <div className="text-white/80 font-[family-name:var(--font-sora)] text-sm">
                                    {video.amount}
                                </div>
                                {/* Shark Logo */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 opacity-80">
                                    <img src="/assets/shark-logo.svg" alt="SharkFunded Logo" className="w-full h-full brightness-0 invert" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
