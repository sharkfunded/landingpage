"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface StickyHeaderProps {
    children: React.ReactNode;
}

export default function StickyHeader({ children }: StickyHeaderProps) {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

        const handleScroll = () => {
            // Threshold can be adjusted. 100px ensures we are past the initial top margin.
            const threshold = 100;
            setIsSticky(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        // Resize observer to update height if needed
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setHeaderHeight(entry.contentRect.height);
            }
        });
        if (headerRef.current) ro.observe(headerRef.current);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            ro.disconnect();
        }
    }, []);

    return (
        <>
            {/* Placeholder to prevent layout shift when fixed */}
            <div style={{ height: isSticky ? headerHeight : 0 }} className="w-full" />

            {/* The Header */}
            <div
                ref={headerRef}
                className={`z-[100] transition-all duration-300 ease-in-out ${isSticky
                    ? "fixed top-0 left-0 w-full shadow-2xl bg-[#040822] animate-in fade-in slide-in-from-top-4 duration-300"
                    : "relative w-full bg-transparent"
                    }`}
            >
                {children}
            </div>
        </>
    );
}
