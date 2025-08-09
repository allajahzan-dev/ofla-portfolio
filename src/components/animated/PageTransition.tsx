"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

// Page transition
export default function PageTransition() {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.6, 0, 0.1, 1");

    // Page transition
    useEffect(() => {
        gsap.to(".page-transition", {
            scaleY: 0,
            duration: 0.5,
            delay: 1,
            ease: "hop",
        });
    }, []);

    return (
        <div
            className="opacity-0 page-transition fixed z-[1000] left-0 top-0 h-screen w-screen bg-[#171717] 
        flex items-center justify-center origin-top pointer-events-none"
        ></div>
    );
}
