"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealSectionProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
}

export default function RevealSection({ children, width = "100%", className = "" }: RevealSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" }); // Triggers when 10% of element is in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 75 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "relative", width, zIndex: 10, willChange: "transform, opacity" }} // z-bound to keep context
            className={`transform-gpu ${className}`}
        >
            {children}
        </motion.div>
    );
}
