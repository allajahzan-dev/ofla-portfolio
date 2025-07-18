"use client";

import { revealHeading } from "@/lib/gsap/RevealHeading";
import { revealServiceHeading } from "@/lib/gsap/RevealServiceHeading";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    subTitle: ReactNode;
    className?: string;
    isServiceSection?: boolean;
}

// Heading Animated
export default function HeadingAnimated({
    title,
    subTitle,
    className,
    isServiceSection,
}: Props) {
    const divRef = useRef<HTMLDivElement>(null);

    // Reveal heading animation
    useEffect(() => {
        if (divRef.current) {
            if (isServiceSection) revealServiceHeading(divRef);
            else revealHeading(divRef);
        }
    }, []);
    return (
        <div ref={divRef} className={cn("perspective-[1200px] w-full", className)}>
            {title}
            {subTitle}
        </div>
    );
}
