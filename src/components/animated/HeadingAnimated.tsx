"use client";

import { revealHeading } from "@/lib/gsap/RevealHeading";
import React, { ReactNode, useEffect, useRef } from "react";

// Interface for Props
interface Props {
    title: ReactNode;
    subTitle: ReactNode;
}

// Heading Animated
export default function HeadingAnimated({ title, subTitle }: Props) {
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
            className="perspective-[1200px] w-full flex flex-col gap-5 items-center"
        >
            {title}
            {subTitle}
        </div>
    );
}
