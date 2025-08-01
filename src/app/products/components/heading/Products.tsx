"use client";

import { oswald } from "@/fonts/owald";
import { scrollToPanel } from "@/lib/gsap/ScrollToPanel";
import { cn } from "@/lib/utils";
import { Mouse, Pointer } from "lucide-react";
import { RefObject } from "react";

// Interface for Props
interface Props {
    items: string[];
    divRef: RefObject<HTMLDivElement | null>;
}

// Products
export default function Products({ items, divRef }: Props) {
    // Handle scroll to panel
    const handleScrollToPanel = (index: number) => {
        if (!divRef.current) return;
        scrollToPanel(index, divRef.current);
    };

    return (
        <section
            className="panel h-screen w-screen relative bg-white flex flex-col items-center justify-center gap-0
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <div className="relative z-10 w-full flex items-center justify-center">
                <p
                    className={cn(
                        "font-semibold text-base text-start leading-[1] absolute left-0 top-16 h-fit",
                        oswald.className
                    )}
                >
                    2023 — {new Date().getFullYear()}
                </p>

                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className={cn("text-[160px] font-bold")}>Products</h1>

                    <p className="text-2xl font-semibold text-zinc-600">
                        Quality chairs, tables, storage solutions, and office furniture
                        <br />
                        designed for modern workspaces.
                    </p>

                    {/* <p className="text-lg font-semibold text-zinc-200 relative top-16 flex items-center">
                        Click&nbsp;
                        <Pointer className="w-5 h-5" />
                        &nbsp;&nbsp;/&nbsp;&nbsp;Scroll&nbsp;
                        <Mouse className="w-5 h-5" />
                    </p> */}
                </div>
            </div>

            {/* Products */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-10">
                {items.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => handleScrollToPanel(index + 1)}
                        className="text-lg font-medium cursor-pointer will-change-transform"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </section>
    );
}
