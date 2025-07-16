"use client";

import { revealHeading } from "@/lib/gsap/RevealHeading";
import {
    ArrowRight,
    ArrowUpRight,
    Dot,
    Info,
    Plus,
    Pointer,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Products section
export default function ProductsSection() {
    const divRef = useRef<HTMLDivElement>(null);

    // Reveal heading animation
    useEffect(() => {
        if (divRef.current) {
            revealHeading(divRef);
        }
    }, []);

    return (
        <section
            id="about-section"
            className="min-h-screen relative bg-white flex flex-col gap-20 items-center px-10 py-40 will-change-transform"
        >
            {/* Title */}
            <div
                ref={divRef}
                className="perspective-[1200px] w-full flex flex-col gap-5 items-center"
            >
                <h1 className="transform-style-preserve-3d font-semibold text-[120px] text-center text-zinc-900 leading-[1]">
                    Latest
                    <br />
                    Products
                </h1>
                <p className="text-xl text-center font-semibold text-zinc-600">
                    Discover our complete range of premium office furniture <br /> and
                    workspace solutions designed to enhance
                    <br />
                    productivity and comfort.
                </p>
            </div>

            {/* Products */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-10 mt-10">
                {[1, 2, 3, 4].map((_, index) => (
                    <div
                        key={index}
                        className="group flex flex-col w-full p-2 rounded-3xl 
                cursor-pointer hover:bg-zinc-100 transition-colors duration-500"
                    >
                        <img
                            src="/product-2.jpg"
                            alt="product-chair"
                            className="h-[700px] w-full object-cover object-bottom rounded-3xl"
                        />
                        <div className="w-full flex gap-2 p-5">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="text-4xl font-semibold">AeroSeat</h1>
                                <p className=" text-lg text-zinc-600 font-medium tracking-tight">
                                    A sleek, modern swivel chair with a curved
                                    <br /> faux-leather finish.
                                </p>
                            </div>
                            <div
                                className="self-center py-2.5 px-4 rounded-full bg-black text-white 
                       group-hover:opacity-100 opacity-0 duration-500 transition-opacity"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More */}
            <div className="absolute bottom-0 w-full flex items-center gap-5 p-10 pt-28">
                <Dot className="w-8 h-8 text-zinc-400" />
                <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                <div className=" group flex items-center gap-2 cursor-pointer">
                    <ArrowUpRight className="w-7 h-7 text-orange-600" />
                    <div className="relative h-7 overflow-hidden">
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                            More Products
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                            More Products
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
