"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { supabase } from "@/lib/supabaseClient";

interface ApplicationFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplicationFormModal({ isOpen, onClose, jobTitle }: ApplicationFormModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);
        const applicationData = {
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            why_join: formData.get("why_join") as string,
            job_title: jobTitle,
            resume_url: "",
            status: "pending"
        };

        try {
            // 1. Upload Resume if exists
            if (file) {
                const fileExt = file.name.split('.').pop();
                const filePath = `${Date.now()}_${applicationData.last_name}.${fileExt}`;
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('resumes')
                    .upload(filePath, file);

                if (uploadError) {
                    console.warn("Resume upload failed (Bucket 'resumes' might not exist):", uploadError);
                    // Proceed without resume URL if upload fails, or handle as strict error
                } else {
                    applicationData.resume_url = filePath;
                }
            }

            // 2. Insert Application Data
            const { error: insertError } = await supabase
                .from('career_applications')
                .insert([applicationData]);

            if (insertError) throw insertError;

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFileName(null);
                setFile(null);
                onClose();
            }, 2000);

        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-[24px] w-full max-w-[650px] max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative border border-white/20">
                            {/* Header */}
                            <div className="sticky top-0 bg-[#040822] z-10 px-8 py-6 border-b border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-blue-200/60 font-medium mb-1 tracking-wide uppercase">Apply for position</p>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-sora)] text-white pr-8">
                                        {jobTitle}
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors absolute right-4 top-4 group"
                                >
                                    <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {isSuccess ? (
                                    <div className="py-16 flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6 ring-4 ring-green-500/5">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-sora)]">Application Sent!</h4>
                                        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                                            Thank you for your interest. We have received your application and our team will get back to you shortly.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="mt-8 px-8 py-3 rounded-xl bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="col-span-2 md:col-span-1 space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    required
                                                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-4 focus:ring-[#00C2FF]/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50/50 focus:bg-white"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-1 space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    required
                                                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-4 focus:ring-[#00C2FF]/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50/50 focus:bg-white"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-4 focus:ring-[#00C2FF]/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50/50 focus:bg-white"
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-4 focus:ring-[#00C2FF]/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50/50 focus:bg-white"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        <div className="pt-2 pb-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Resume/CV <span className="text-red-500">*</span></label>
                                            <div
                                                onClick={() => fileInputRef.current?.click()}
                                                className={`group w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${fileName ? 'border-[#00C2FF] bg-[#00C2FF]/5' : 'border-gray-200 hover:border-[#00C2FF] hover:bg-gray-50'}`}
                                            >
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    required={!fileName}
                                                />
                                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm transition-transform group-hover:scale-110 ${fileName ? 'bg-[#00C2FF] text-white' : 'bg-white border border-gray-100 text-[#00C2FF]'}`}>
                                                    <Upload className="w-7 h-7" />
                                                </div>
                                                {fileName ? (
                                                    <div className="text-center">
                                                        <p className="text-sm font-bold text-[#00C2FF] break-all max-w-[300px]">{fileName}</p>
                                                        <p className="text-xs text-[#00C2FF]/70 mt-1">Click to replace</p>
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <p className="text-base font-semibold text-gray-700 mb-1">Click to upload resume</p>
                                                        <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">Why do you want to join us?</label>
                                            <textarea
                                                rows={4}
                                                name="why_join"
                                                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-4 focus:ring-[#00C2FF]/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50/50 focus:bg-white resize-none"
                                                placeholder="Tell us a bit about yourself and why you're a great fit..."
                                            />
                                        </div>

                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#0047FF] text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-3"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        <span>Submitting...</span>
                                                    </>
                                                ) : (
                                                    "Submit Application"
                                                )}
                                            </button>
                                            <p className="text-center text-xs text-gray-400 mt-4">
                                                By submitting this form, you agree to our <span className="underline cursor-pointer hover:text-gray-600">Privacy Policy</span>.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    if (!mounted) return null;

    return createPortal(modalContent, document.body);
}
