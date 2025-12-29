"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Sparkles, ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";

export default function PromotionalPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");

        if (!hasSeenPopup) {
            // Show popup after a short delay (e.g., 2 seconds)
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem("hasSeenPromoPopup", "true");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSuccess(true);
        setIsSubmitting(false);

        // Close after success
        setTimeout(() => {
            handleClose();
            // Reset for next time (if we were to remove session storage)
            setIsSuccess(false);
            setEmail("");
        }, 3000);
    };

    if (!mounted) return null;

    const popupContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#040822] rounded-[32px] w-full max-w-[480px] overflow-hidden shadow-2xl relative pointer-events-auto border border-white/10 flex flex-col">

                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#00C2FF]/20 to-transparent pointer-events-none" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#0047FF]/30 rounded-full blur-[80px] pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-5 right-5 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 relative z-10 flex flex-col items-center text-center">

                                {isSuccess ? (
                                    <div className="py-10 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6 ring-1 ring-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                                            <Gift className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-[family-name:var(--font-sora)] text-white mb-2">
                                            You're In!
                                        </h3>
                                        <p className="text-gray-400">
                                            Good luck! Check your inbox for confirmation and your 50% discount code.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Icon/Badge */}
                                        <div className="mb-6 relative">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#0047FF] flex items-center justify-center shadow-[0_10px_40px_rgba(0,194,255,0.3)] rotate-3">
                                                <Gift className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 bg-[#FFD600] text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg border border-yellow-200">
                                                LIMITED TIME
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-bold font-[family-name:var(--font-sora)] text-white mb-3">
                                            Win Big & Save 50%
                                        </h2>
                                        <p className="text-gray-400 mb-8 max-w-[320px] leading-relaxed">
                                            Enter your email to join our exclusive giveaway and instantly unlock a <span className="text-[#00C2FF] font-semibold">50% discount</span> on your first challenge.
                                        </p>

                                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email address"
                                                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF] outline-none transition-all text-base"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#0047FF] text-white font-bold text-lg shadow-[0_0_25px_rgba(0,194,255,0.4)] hover:shadow-[0_0_35px_rgba(0,194,255,0.6)] active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 group"
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Unlock 50% Off <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        <p className="text-xs text-gray-500 mt-6">
                                            No spam. Unsubscribe anytime. Terms apply.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(popupContent, document.body);
}
