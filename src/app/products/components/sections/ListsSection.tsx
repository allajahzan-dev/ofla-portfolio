"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ProductItem from "../ui/ProductItem";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { smoothScroller } from "@/lib/gsap/SmoothScroller";

gsap.registerPlugin(ScrollTrigger);

// Lists section
export default function ListsSection() {
    const [selectedItem, setSelectedItem] = useState<string | "">("");

    const sectionRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);
    const innerContentRef = useRef<HTMLDivElement | null>(null);

    const scrollToSectionTop = (product: string) => {
        smoothScroller()?.scrollTo(sectionRef.current, true, "top top");
        setSelectedItem(product);
    };

    useEffect(() => {
        if (!sectionRef.current || !navRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=9999",
            pin: navRef.current,
            scrub: false,
            pinType: "transform",
        });

        return () => trigger.kill();
    }, []);

    return (
        <section
            id="lists-section"
            ref={sectionRef}
            className={`${selectedItem ? "min-h-screen" : "h-auto"
                } relative bg-white flex flex-col items-center justify-center gap-10
            ${selectedItem && "pb-0"
                } rounded-b-[50px] shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] will-change-transform overflow-hidden`}
        >
            <div
                ref={navRef}
                className="sticky top-0 z-50 w-full py-[34px] bg-white 
             shadow-none transform-gpu"
            >
                <div className="flex items-center justify-center gap-10 text-lg font-medium">
                    {["Chairs", "Tables", "Storage", "Lockers", "Accessories"].map(
                        (item) => (
                            <ProductItem
                                key={item}
                                item={item}
                                action={() => scrollToSectionTop(item.toLowerCase())}
                                selectedItem={selectedItem}
                            />
                        )
                    )}
                </div>
            </div>

            {selectedItem && (
                <div
                    ref={innerContentRef}
                    className="w-full px-10 flex flex-col gap-20 items-center justify-start will-change-transform"
                >
                    <div className="w-full grid grid-cols-3 gap-x-3 gap-y-10">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                            <div
                                key={idx}
                                className="p-2 hover:bg-zinc-100 flex flex-col rounded-3xl"
                            >
                                <div className="h-[500px] rounded-3xl overflow-hidden">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="/images/products/chair.jpg"
                                        alt={`chair-${idx + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-0 p-5">
                                    <h1 className="text-2xl font-semibold">
                                        Lorem ipsum dolor sit amet
                                    </h1>
                                    <p className="text-zinc-600 font-medium">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
