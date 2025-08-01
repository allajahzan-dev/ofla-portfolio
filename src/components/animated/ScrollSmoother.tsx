"use client";

import { killScroller, scrollSmoother } from "@/lib/gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll Smoother
export default function ScrollSmoother() {
    const pathname = usePathname();

    useEffect(() => {
        killScroller();
        scrollSmoother();
    }, [pathname]);

    return null;
}
