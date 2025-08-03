"use client";

import { gsap } from "gsap";
import { revealDefaultHeading } from "@/lib/gsap/RevealDefaultHeading";
import { revealServiceHeading } from "@/lib/gsap/RevealServiceHeading";
import { revealContactHeading } from "@/lib/gsap/RevealContactHeading";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    subTitle: ReactNode;
    className?: string;
    sectionType: "service" | "contact" | "default";
}

// Reveal heading
export default function RevealHeading({
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
                    revealDefaultHeading(headerRef.current);
                    break;
            }
        });

        return () => ctx.revert();
    }, [sectionType]);

    return (
        <header
            ref={headerRef}
            className={cn(
                "w-full will-change-transform",
                className
            )}
        >
            {title}
            {subTitle}
        </header>
    );
}
