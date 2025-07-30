"use client";

import { useRef, useState, useEffect } from "react";
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
    const maskRef = useRef<HTMLDivElement | null>(null);

    const scrollToSectionTop = (product: string) => {
        smoothScroller()?.scrollTo(sectionRef.current, true, "top top");
        setSelectedItem(product);
    };

    useEffect(() => {
        const refs = [navRef, maskRef];
        const starts = ["top 0.2%", "top top"];

        if (!sectionRef.current || refs.some((ref) => !ref.current)) return;

        const triggers = refs.map((ref, index) =>
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: starts[index],
                end: "+=9999",
                pin: ref.current,
            })
        );

        return () => triggers.forEach((trigger) => trigger.kill());
    }, []);

    return (
        <section
            id="lists-section"
            ref={sectionRef}
            className={`${selectedItem ? "min-h-screen" : "h-auto"
                } relative bg-white flex flex-col items-center justify-center gap-1
            ${selectedItem && "pb-40"
                } rounded-[50px] shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] will-change-transform overflow-hidden`}
        >
            {/* Product items */}
            <div
                ref={navRef}
                className="w-full relative top-0 z-50 p-[32px] bg-white will-change-transform
             shadow-none"
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

            {/* Maske for pin */}
            <div
                ref={maskRef}
                className="absolute z-40 top-0 w-full h-2 bg-white pointer-events-none"
            />

            {/* Selected item */}
            {selectedItem && (
                <div className="w-full px-10 flex flex-col gap-20 items-center justify-start will-change-transform transform-gpu overflow-hidden">
                    {/* Heading */}
                    {/* <div className="flex flex-col gap-5 items-center">
                        <h1 className={cn("font-semibold text-8xl text-center text-zinc-900 tracking-wide", oswald.className)}>
                            {selectedItem}
                        </h1>
                    </div> */}

                    {/* Images */}
                    <div className="w-full grid grid-cols-3 gap-x-2 gap-y-10">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                            <div key={idx} className="p-2 flex flex-col rounded-3xl">
                                <div className="h-[540px] rounded-2xl overflow-hidden">
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
