"use client";

import { killScroller, smoothScroller } from "@/lib/gsap/SmoothScroller";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll Smoother
export default function ScrollSmoother() {
    const pathname = usePathname();

    useEffect(() => {
        killScroller();
        smoothScroller();
    }, [pathname]);

    return null;
}
