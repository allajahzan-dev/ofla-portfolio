"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    title: ReactNode;
    points: ReactNode;
}

export default function ServiceAnimated({ title, points }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = containerRef.current;

        if (!element) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                        // scrub: true // optional if you want scrub instead of quick trigger
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full grid grid-cols-3 gap-5 p-10 py-16 border-t-[0.5px] border-t-zinc-700"
        >
            {title}
            {points}
        </div>
    );
}
