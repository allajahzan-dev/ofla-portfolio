"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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
            className="min-h-screen w-full relative bg-zinc-100 flex flex-col items-center justify-center
        will-change-transform overflow-hidden"
        >
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0} }
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <img
                    src="/images/home/contact/contact.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </motion.div>
        </section>
    );
}
