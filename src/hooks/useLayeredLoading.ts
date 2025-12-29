"use client";

import { useState, useEffect } from "react";

export function useLayeredLoading() {
    const [layer2, setLayer2] = useState(false);
    const [layer3, setLayer3] = useState(false);
    const [layer4, setLayer4] = useState(false);

    useEffect(() => {
        // We defer heavy visual effects slightly to allow the main thread
        // to handle initial React hydration without blocking.
        // 1. Layer 2 (Glows/Blur): 200ms
        const t1 = setTimeout(() => setLayer2(true), 200);

        // 2. Layer 3 (Video): 400ms - gives time for LCP (text) to paint first if possible
        const t2 = setTimeout(() => setLayer3(true), 400);

        // 3. Layer 4 (Animations): 500ms
        const t3 = setTimeout(() => setLayer4(true), 500);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return { layer2, layer3, layer4 };
}
