"use client";

import { gsap } from "gsap";
import { revealContactHeading } from "@/lib/gsap/RevealContactHeading";
import { revealHeading } from "@/lib/gsap/RevealHeading";
import { revealServiceHeading } from "@/lib/gsap/RevealServiceHeading";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    subTitle: ReactNode;
    className?: string;
    sectionType: "service" | "contact" | "default";
}

// Heading Animated
export default function HeadingAnimated({
    title,
    subTitle,
    className,
    sectionType,
}: Props) {
    const divRef = useRef<HTMLDivElement | null>(null);

    // Reveal heading animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!divRef.current) return;

            switch (sectionType) {
                case "service":
                    revealServiceHeading(divRef.current);
                    break;
                case "contact":
                    revealContactHeading(divRef.current);
                    break;
                default:
                    revealHeading(divRef.current);
                    break;
            }
        });

        return () => ctx.revert();
    }, [sectionType]);

    return (
        <div ref={divRef} className={cn("perspective-[1200px] w-full", className)}>
            {title}
            {subTitle}
        </div>
    );
}
