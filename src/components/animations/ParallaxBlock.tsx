"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxBlockProps {
    children: React.ReactNode;
    offset?: number; // How much it moves. 50 = moves 50px up/down relative to scroll
    className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ParallaxBlock({ children, offset = 50, className = "" }: ParallaxBlockProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, offset);

    return (
        <div ref={ref} className={className} style={{ position: "relative", overflow: "visible" }}>
            <motion.div style={{ y }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}
