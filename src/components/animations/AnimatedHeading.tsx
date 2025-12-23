"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedHeadingProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function AnimatedHeading({ text, className = "", delay = 0 }: AnimatedHeadingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} // flex-wrap handles multiline, overflow hidden for mask effect
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
            ref={ref}
        >
            {text.split(" ").map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
