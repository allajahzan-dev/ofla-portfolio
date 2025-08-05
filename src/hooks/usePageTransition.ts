"use client";

import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

// Page transition navigator
export function usePageTransition() {
    const router = useRouter();

    const navigator = (href: string) => {
        const transition = document.querySelector(".page-transition");
        if (!transition) return;

        gsap.registerPlugin(CustomEase);

        CustomEase.create("hop", "0.9, 0, 0.1, 1");

        // Reset transition 
        gsap.set(transition, {
            scaleY: 1,
            height: "100vh",
            onComplete: () => {
                router.push(href);
            },
        });

        gsap.to(transition, {
            height: "92vh",
            duration: 0.5,
            delay: 0.6,
        });

        gsap.to(transition, {
            scaleY: 0,
            duration: 0.5,
            delay: 1,
            ease: "hop",
        });
    };

    return navigator;
}
