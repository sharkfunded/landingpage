"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AffiliateContent() {
    return (
        <section className="relative w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Section 1: Hunt with Us */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 md:mb-32">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-[family-name:var(--font-sora)] font-bold text-black text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.03em] mb-6">
                                Hunt with Us.<br />
                                Eat with Us.
                            </h2>
                            <p className="font-[family-name:var(--font-sora)] text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[500px]">
                                The industry's most aggressive affiliate program.
                                Lifetime commissions, luxury milestone rewards,
                                and on-demand payouts.
                            </p>
                            <Link href="https://dashboard.sharkfunded.com/register" className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30 inline-block">
                                Join the Affiliate
                            </Link>
                        </motion.div>
                    </div>
                    {/* Placeholder for potential image or empty space if design suggests text-heavy left side */}
                    <div className="hidden md:block w-full md:w-1/2"></div>
                </div>

                {/* Section 2: The Shark Difference */}
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-[800px]"
                    >
                        <h2 className="font-[family-name:var(--font-sora)] font-bold text-black text-[32px] md:text-[48px] leading-tight mb-6">
                            The Shark Difference
                        </h2>
                        <p className="font-[family-name:var(--font-sora)] text-gray-600 text-[16px] leading-relaxed">
                            SharkFunded is powered by a global team of over 30 dedicated professionals with extensive
                            experience at Central Banks and the world's leading proprietary trading firms.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* Card 1 */}
                        <FeatureCard
                            title="On Demand Liquidity"
                            description="Stop waiting 30 days for &quot;NET-30&quot; terms. At Shark Funded, you control your cash flow. Request a withdrawal any time, and we process it in under 24 hours*."
                        />

                        {/* Card 2 */}
                        <FeatureCard
                            title="Lifetime Commissions"
                            description="We don't just pay you on the first sale. You earn on every *Top-Up, Reset, and Re-purchase* your referrals make. Forever."
                        />

                        {/* Card 3 */}
                        <FeatureCard
                            title="Real Milestone Rewards"
                            description="SharkFunded is powered by a global team of over 30 dedicated professionals with extensive experience."
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left p-8 rounded-[24px] bg-[#E8F2FC]" // Light blue background matching image
        >
            <div className="mt-auto pt-16"> {/* Push content to bottom */}
                <h3 className="font-[family-name:var(--font-sora)] font-bold text-black text-[20px] mb-4">
                    {title}
                </h3>
                <p className="font-[family-name:var(--font-sora)] text-gray-700 text-[14px] leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
