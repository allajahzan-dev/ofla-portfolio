"use client";

import { smoothScroller } from "@/lib/gsap/SmoothScroller";
import { useEffect } from "react";

// Scroll Smoother
export default function ScrollSmoother() {
    useEffect(() => {
        smoothScroller();
    }, []);
    return null;
}
