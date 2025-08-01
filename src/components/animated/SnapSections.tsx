"use client";

import { gsap } from "gsap";
import { snapSections } from "@/lib/gsap/SnapSections";
import { ReactNode, RefObject, useEffect } from "react";

// Interface for Props
interface Props {
    divRef: RefObject<HTMLDivElement | null>;
    sections: ReactNode[];
    sectionsLength: number;
}

// Snap sections
export default function SnapSections({
    divRef,
    sections,
    sectionsLength,
}: Props) {
    // Snap animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = document.querySelectorAll(".panel");
            if (!divRef.current) return;

            snapSections(sections, sectionsLength, divRef.current);
        }, divRef);

        return () => ctx.revert();
    }, [sectionsLength]);

    return (
        <div
            ref={divRef}
            className="relative z-10 h-screen bg-[#292929] overflow-hidden rounded-b-[50px] will-change-transform"
        >
            <div
                style={{ width: `${sectionsLength * 100}vw` }}
                className="flex h-screen will-change-transform"
            >
                {sections}
            </div>
        </div>
    );
}
