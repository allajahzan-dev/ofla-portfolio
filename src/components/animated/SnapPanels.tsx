"use client";

import { gsap } from "gsap";
import { snapPanels } from "@/lib/gsap/SnapPanels";
import { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    panels: ReactNode[];
    panelsLength: number;
}

// Snap panels
export default function SnapPanels({ panels, panelsLength }: Props) {
    const divRef = useRef<HTMLDivElement | null>(null);

    // Snap animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = document.querySelectorAll(".panel");
            if (!divRef.current) return;

            snapPanels(panels, divRef.current);
        }, divRef);

        return () => ctx.revert();
    }, [panelsLength]);

    return (
        <div
            ref={divRef}
            className="relative h-screen bg-[#292929] overflow-hidden rounded-b-[50px]"
        >
            <div
                style={{ width: `${panelsLength * 100}vw` }}
                className="flex h-screen will-change-transform"
            >
                {panels}
            </div>
        </div>
    );
}
