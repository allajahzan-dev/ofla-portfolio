"use client";

import { killScroller, scrollSmoother } from "@/lib/gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

// Scroll Smoother
export default function ScrollSmoother() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        killScroller();
        scrollSmoother();
    }, [pathname]);

    return null;
}
