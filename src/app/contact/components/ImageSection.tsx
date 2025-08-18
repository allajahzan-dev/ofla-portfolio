"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image section
export default function ImageSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (!sectionRef.current) return;

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top", 
            end: "+=100%", 
            pin: true, 
            pinSpacing: false, 
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundImage: "url(/images/home/contact/contact.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen w-full relative flex flex-col items-center justify-center
        px-10 rounded-b-[50px] will-change-transform overflow-hidden"
        ></section>
    );
}
