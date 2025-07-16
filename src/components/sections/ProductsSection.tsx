"use client";

import { revealHeading } from "@/lib/gsap/RevealHeading";
import { useEffect, useRef } from "react";

// Products section
export default function ProductsSection() {
    const headingRef = useRef<HTMLDivElement>(null);

    // Reveal heading animation
    useEffect(() => {
        if (headingRef.current) {
            revealHeading(headingRef);
        }
    }, []);

    return (
        <section className="h-screen relative z-10 bg-white flex flex-col gap-20 items-center p-10 will-change-transform">
            <div ref={headingRef} className="perspective-[1200px] w-full p-[60px] flex flex-col gap-5 items-center">
                <h1 className="transform-style-preserve-3d font-semibold text-[120px] text-center text-zinc-900 leading-[1]">
                    Latest
                    <br />
                    Products
                </h1>
                <p className="text-xl text-center font-semibold text-zinc-600">
                    Discover our complete range of premium office furniture <br/> and workspace
                    solutions designed to enhance<br/>productivity and comfort.
                </p>
            </div>
        </section>
    );
}
