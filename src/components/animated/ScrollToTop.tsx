"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollSmoother } from "@/lib/gsap/ScrollSmoother";

export default function ScrollToTop() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        const smoother = scrollSmoother();

        requestAnimationFrame(() => {
            if (smoother) {
                smoother.scrollTo(0, false);
            } else {
                window.scrollTo({ top: 0, behavior: "auto" });
            }
        });
    }, [pathname]);

    return null;
}
