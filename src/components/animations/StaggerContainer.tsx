"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    viewportMargin?: string;
    component?: any;
}

export default function StaggerContainer({
    children,
    className = "",
    delay = 0,
    viewportMargin = "-10%",
    component = "div"
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const MotionComponent = (motion as any)[component];

    return (
        <MotionComponent
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </MotionComponent>
    );
}

export const StaggerItem = ({
    children,
    className = "",
    component = "div"
}: {
    children: React.ReactNode,
    className?: string,
    component?: any
}) => {
    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
    };

    const MotionComponent = (motion as any)[component];

    return (
        <MotionComponent variants={item} className={className}>
            {children}
        </MotionComponent>
    );
};
