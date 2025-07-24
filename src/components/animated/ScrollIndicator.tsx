"use client";

import { useEffect, useState } from "react";

// Scroll Indicator
const ScrollIndicator = ({ sections }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const index = sections.findIndex((id: any) => {
            const element = document.getElementById(id);
            if (!element) return false;
            const top = element.offsetTop;
            const bottom = top + element.offsetHeight;
            return scrollPosition >= top - 200 && scrollPosition < bottom - 200;
        });
        setActiveIndex(index);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // init on load
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, handleScroll]);

    // On dot click: scroll to section
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-50 p-3 py-8 rounded-full">
            {sections.map((id: string, index: number) => (
                <div
                    key={index}
                    onClick={()=>scrollToSection(id)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeIndex === index
                            ? "bg-black border-zinc-200"
                            : "border-zinc-100"
                        }`}
                />
            ))}
        </div>
    );
};

export default ScrollIndicator;
