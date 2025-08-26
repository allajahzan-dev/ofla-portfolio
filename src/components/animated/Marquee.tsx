"use client";

import { gsap } from "gsap";
import { marquee } from "@/lib/gsap/Marquee";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";4

// Interface for Props
interface Props{
    className: string;
}

// Marquee
export default function Marquee({ className }: Props) {
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
                    "font-medium",
                    oswald.className,
                    className
                )}
            >
                OFLA <sup>TM</sup> —
            </h1>
        </div>
    );
}
