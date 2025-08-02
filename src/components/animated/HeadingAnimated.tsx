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
    const headerRef = useRef<HTMLDivElement | null>(null);

    // Reveal heading animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!headerRef.current) return;

            switch (sectionType) {
                case "service":
                    revealServiceHeading(headerRef.current);
                    break;
                case "contact":
                    revealContactHeading(headerRef.current);
                    break;
                default:
                    revealHeading(headerRef.current);
                    break;
            }
        });

        return () => ctx.revert();
    }, [sectionType]);

    return (
        <header
            ref={headerRef}
            className={cn("perspective-[1200px] w-full", className)}
        >
            {title}
            {subTitle}
        </header>
    );
}
