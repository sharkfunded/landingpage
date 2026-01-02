"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RedirectLogic() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        // Dynamic dots animation for "Redirecting..."
        const dotInterval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        // Redirect delay
        const timer = setTimeout(() => {
            window.location.href = "https://dashboard.sharkfunded.com/client/dashboard";
        }, 2500);

        return () => {
            clearInterval(dotInterval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#020514]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[20%] -right-[10%] h-[1000px] w-[60%] opacity-40 mix-blend-screen blur-[100px] filter">
                    <div className="h-full w-full bg-blue-900/30 rounded-full"></div>
                </div>
                <div className="absolute -bottom-[20%] -left-[10%] h-[1000px] w-[60%] opacity-40 mix-blend-screen blur-[100px] filter">
                    <div className="h-full w-full bg-blue-900/20 rounded-full"></div>
                </div>
            </div>

            {/* Jellyfish Background (Optional, if available in path) */}
            <div className="absolute -top-[10%] -right-[15%] w-[60%] h-[1000px] pointer-events-none z-0 overflow-visible opacity-30 mix-blend-screen hidden md:block">
                <img
                    src="/assets/jellyfish-figma.webp"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>


            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 mx-4 w-full max-w-[500px] rounded-3xl border border-white/10 bg-[#0A0C1A]/80 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
            >
                {/* Logo Animation */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative h-16 w-16 md:h-20 md:w-20">
                        <img src="/assets/shark-logo.svg" alt="SharkFunded" className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                </motion.div>

                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-8 w-8 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-3 text-3xl font-bold text-white md:text-4xl"
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8 text-lg text-gray-400"
                >
                    Your order has been processed successfully. <br />
                    We are redirecting you to your dashboard.
                </motion.p>

                {/* Progress Bar / Spinner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                            className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full"
                            animate={{
                                x: ["-100%", "300%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                    <span className="text-sm font-medium text-blue-400">
                        Redirecting{dots}
                    </span>
                </motion.div>

                {/* Manual Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-xs text-gray-600"
                >
                    If you are not redirected automatically, <a href="https://dashboard.sharkfunded.com/client/dashboard" className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4 hover:decoration-blue-400">click here</a>.
                </motion.div>
            </motion.div>
        </div>
    );
}
