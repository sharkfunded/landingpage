"use client";

import { motion } from "framer-motion";

export default function ContactContent() {
    return (
        <section className="relative w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Support Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                        style={{ backgroundColor: "#0B1029" }}
                    >
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all duration-500" />

                        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-[24px] mb-4">Email Support</h3>
                            <p className="font-[family-name:var(--font-sora)] text-gray-400 text-[16px] mb-8 max-w-[300px]">
                                Our team is available 24/7 to assist you.
                            </p>
                            <a href="mailto:support@sharkfunded.com" className="px-8 py-4 rounded-full bg-white text-[#0B1029] font-semibold hover:bg-gray-100 transition-colors">
                                support@sharkfunded.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Live Chat Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                        style={{ backgroundColor: "#0B1029" }}
                    >
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />

                        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>
                            <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-[24px] mb-4">Live Chat</h3>
                            <p className="font-[family-name:var(--font-sora)] text-gray-400 text-[16px] mb-8 max-w-[300px]">
                                Chat with us instantly via Intercom.
                            </p>
                            <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors" onClick={() => (window as any).Intercom?.('show')}>
                                Open Chat
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
