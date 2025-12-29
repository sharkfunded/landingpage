"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AffiliateRanks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative w-full bg-white py-16 md:py-24" ref={containerRef}>
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-[family-name:var(--font-sora)] font-bold text-black text-[32px] md:text-[48px] leading-tight mb-4"
                    >
                        Climb the Ranks
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-[family-name:var(--font-sora)] text-gray-600 text-[16px] max-w-[800px]"
                    >
                        SharkFunded is powered by a global team of over 30 dedicated professionals with extensive
                        experience at Central Banks and the world's leading proprietary trading firms.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line Background */}
                    <div className="absolute left-[20px] md:left-[28px] top-0 bottom-0 w-[2px] bg-blue-100 h-full z-0" />

                    {/* Vertical Line Progress */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[20px] md:left-[28px] top-0 bottom-0 w-[2px] bg-blue-600 h-full z-0 origin-top"
                    />

                    <div className="space-y-12 md:space-y-24">
                        <RankLevel
                            index={0}
                            level={1}
                            title="The Scout"
                            requirements={["$0 - $19,999 Sales"]}
                            commissions="10%"
                            perks="Instant Dashboard Access, 24H Payouts"
                            imagePlaceholder="Dashboard Preview"
                            imageSrc="/assets/Frame 2147225728 (1).png"
                        />
                        <RankLevel
                            index={1}
                            level={2}
                            title="The Hunter"
                            requirements={["$20,000 Sales"]}
                            commissions="Upgrades to 15%"
                            unlocks="iPhone 17 Pro Max (Shipped to you)"
                            imagePlaceholder="iPhone 17 Pro Max"
                            imageSrc="/assets/iphone-rank.png"
                        />
                        <RankLevel
                            index={2}
                            level={3}
                            title="The Predator"
                            requirements={["$100,000 Sales"]}
                            commissions="Upgrades to 20%"
                            unlocks="MacBook Pro M4 or Sports Bike"
                            imagePlaceholder="MacBook Pro / Bike"
                            imageSrc="/assets/bike-rank.png"
                            secondaryImageSrc="/assets/mb.png"
                        />
                        <RankLevel
                            index={3}
                            level={4}
                            title="The Apex"
                            requirements={["$500,000 Sales"]}
                            commissions="Upgrades to 20% (Capped)"
                            unlocks="Ford Mustang"
                            imagePlaceholder="Ford Mustang"
                            imageSrc="/assets/car-rank.webp"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

function RankLevel({
    index,
    level,
    title,
    requirements,
    commissions,
    perks,
    unlocks,
    imagePlaceholder,
    imageSrc,
    secondaryImageSrc
}: {
    index: number;
    level: number;
    title: string;
    requirements: string[];
    commissions: string;
    perks?: string;
    unlocks?: string;
    imagePlaceholder: string;
    imageSrc?: string;
    secondaryImageSrc?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col md:flex-row gap-8 md:gap-16 pl-12 md:pl-20 transition-colors"
        >
            {/* Number Bubble */}
            <div className="absolute left-0 top-0 md:top-8 w-[40px] h-[40px] md:w-[56px] md:h-[56px] rounded-full bg-[#040822] border-[4px] border-white shadow-lg flex items-center justify-center z-10">
                <span className="font-[family-name:var(--font-sora)] font-bold text-white text-lg md:text-2xl">
                    {level}
                </span>
            </div>

            {/* Content Card */}
            <div className="w-full bg-gradient-to-br from-[#050A25] to-[#000000] rounded-[30px] p-6 md:p-10 overflow-hidden relative min-h-[300px] flex flex-col md:flex-row items-center gap-8 border border-white/5 shadow-2xl">

                {/* Text Content */}
                <div className="flex-1 w-full relative z-10">
                    <h3 className="font-[family-name:var(--font-sora)] font-medium text-white text-[24px] md:text-[32px] mb-8">
                        Level {level} : {title}
                    </h3>

                    <div className="space-y-4">
                        {/* Boxed Info Block */}
                        <div className="bg-[#0B1029]/60 rounded-2xl p-6 border border-white/5 space-y-4 max-w-md shadow-inner backdrop-blur-sm">
                            <div>
                                <p className="text-white/60 text-sm mb-1">Requirements :</p>
                                {requirements.map((req, i) => (
                                    <p key={i} className="text-white font-medium">{req}</p>
                                ))}
                            </div>

                            <div>
                                <p className="text-white/60 text-sm mb-1">Commissions :</p>
                                <p className="text-white font-medium">{commissions}</p>
                            </div>

                            {(perks || unlocks) && (
                                <div>
                                    <p className="text-white/60 text-sm mb-1">
                                        {unlocks ? "Unlocks :" : "Perks :"}
                                    </p>
                                    <p className="text-white font-medium">
                                        {unlocks || perks}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Image Area */}
                <div className={`flex-1 w-full min-h-[250px] relative transition-all duration-500 ${!imageSrc ? 'h-[200px] md:h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-blue-600/10 rounded-2xl border border-white/5 overflow-hidden group' : 'h-[320px] md:h-full'}`}>
                    {imageSrc && secondaryImageSrc ? (
                        <div className="absolute inset-0 w-full h-full">
                            {/* Blue ambient glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Primary Image (Bike) - Back Left/Top */}
                            <div className="absolute top-[-20%] right-[5%] w-[90%] h-[90%] z-0">
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* "OR" Badge */}
                            <div className="absolute top-[45%] right-[25%] w-10 h-10 bg-[#0047FF] rounded-full flex items-center justify-center z-20 border-[3px] border-[#020412] shadow-xl">
                                <span className="font-[family-name:var(--font-sora)] font-bold text-white text-[12px]">or</span>
                            </div>

                            {/* Secondary Image (Laptop) - Front Right/Bottom */}
                            <div className="absolute bottom-[0%] right-[0%] w-[70%] h-[70%] z-10">
                                <img
                                    src={secondaryImageSrc}
                                    alt="Secondary Reward"
                                    className="w-full h-full object-contain object-bottom"
                                />
                            </div>
                        </div>
                    ) : imageSrc ? (
                        level === 1 ? (
                            // Level 1 (Dashboard) - Standard fit, not merged/cropped
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-4 flex items-center justify-center z-0">
                                <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ) : level === 4 ? (
                            // Level 4 (Car) - Extra Large Merged/Cropped style
                            <div className="absolute -bottom-[10%] md:-bottom-[20%] -right-[5%] md:-right-[10%] w-[110%] md:w-[100%] h-[130%] md:h-[140%] flex items-end justify-center z-0">
                                {/* Blue ambient glow */}
                                <div className="absolute bottom-[20%] right-[20%] w-[100%] h-[100%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-contain object-bottom scale-[1.6] md:scale-[2.2]"
                                />
                            </div>
                        ) : (
                            // Level 2 (iPhone) - Merged/Cropped style
                            <div className="absolute -bottom-[20%] -right-[10%] w-[100%] h-[140%] flex items-end justify-center z-0">
                                {/* Blue ambient glow */}
                                <div className="absolute bottom-[20%] right-[20%] w-[100%] h-[100%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-full object-contain object-bottom scale-150"
                                />
                            </div>
                        )
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                            <span className="text-white/40 font-[family-name:var(--font-sora)] font-medium">
                                {imagePlaceholder}
                            </span>
                        </>
                    )}
                </div>

            </div>
        </motion.div>
    );
}
