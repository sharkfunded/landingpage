"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
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

            {/* Background Effect - Ellipse Gradient */}
            <div className="absolute left-[-30%] top-[-50%] w-[80vw] h-[80vw] max-w-[1400px] max-h-[1400px] rounded-full bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-transparent blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] px-6 text-center mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[40px] md:text-[64px] lg:text-[82px] leading-[1.12] tracking-[-0.05em] mb-8">
                        Contact Us
                    </h1>

                    <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[1.35] tracking-[-0.04em] text-center max-w-[800px] mx-auto">
                        Have questions? We're here to help. Reach out to our dedicated support team for any inquiries regarding our trading programs, platform, or partnerships.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
