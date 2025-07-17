"use client";

import { revealHeading } from "@/lib/gsap/RevealHeading";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    subTitle: ReactNode;
    className?: string;
}

// Heading Animated
export default function HeadingAnimated({ title, subTitle, className }: Props) {
    const divRef = useRef<HTMLDivElement>(null);

    // Reveal heading animation
    useEffect(() => {
        if (divRef.current) {
            revealHeading(divRef);
        }
    }, []);
    return (
        <div
            ref={divRef}
            className={cn("perspective-[1200px] w-full", className)}
        >
            {title}
            {subTitle}
        </div>
    );
}
