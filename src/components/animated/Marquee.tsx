"use client";

import { gsap } from "gsap";
import { marquee } from "@/lib/gsap/Marquee";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// Marquee
export default function Marquee() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!textRef.current || !wrapperRef.current) return;
            marquee(textRef.current, wrapperRef.current);
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="flex whitespace-nowrap will-change-transform"
        >
            <h1
                ref={textRef}
                className={cn(
                    "text-[170px] font-medium text-zinc-200",
                    oswald.className
                )}
            >
                OFLA <sup className="">TM</sup> —
            </h1>
        </div>
    );
}
