"use client";

import { gsap } from "gsap";
import { revealService } from "@/lib/gsap/RevealService";
import { useEffect, useRef } from "react";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    points: ReactNode;
}

// Reveal service
export default function RevealService({ title, points }: Props) {
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!divRef.current) return;
            revealService(divRef.current);
        }, divRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={divRef}
            className="w-full grid grid-cols-3 gap-5 p-10 py-16 border-t-[0.5px] border-t-zinc-700 will-change-transform"
        >
            {title}
            {points}
        </div>
    );
}
