import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import React from "react";

// Product section
export default function ProductsSection() {
    return (
        <section
            data-speed="0.1"
            // style={{
            //     // backgroundImage: "url(/images/products/bg-image.jpg)",
            //     backgroundSize: "cover",
            //     backgroundPosition: "bottom",
                // filter: "grayscale(100%)",
            // }}
            className="min-h-screen relative bg-white flex flex-col items-center justify-center gap-0
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <div className="relative z-10 w-full flex items-center justify-center">
                <p className={cn("font-semibold text-base text-start leading-[1] absolute left-0 top-16 h-fit", oswald.className)}>
                    2023 — {new Date().getFullYear()}
                </p>

   
                <div className="flex flex-col gap-0 relative right-0">
                    <h1
                    className={cn(
                        "text-[160px] text-center text-black font-bold"
                    )}
                >
                    Products
                </h1>

                <p className="text-2xl text-center font-semibold text-zinc-600">
                    Quality chairs, tables, storage solutions, and office furniture
                    <br/>designed for modern workspaces.
                </p>
                </div>
            </div>
        </section>
    );
}
