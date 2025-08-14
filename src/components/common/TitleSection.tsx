"use client";

import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Interface for Props
interface Props {
    title: string;
    description: string;
}

// Title section
export default function TitleSection({ title, description }: Props) {
    return (
        <section
            className="h-[calc(100vh-9vh)] w-full relative bg-zinc-100 flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <motion.div
                initial={{ y: -50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative top-14 w-full grid grid-cols-3"
            >
                <p
                    className={cn(
                        "font-semibold text-base text-start tracking-wide leading-[1] relative left-0 top-20 h-fit",
                        oswald.className
                    )}
                >
                    2019 — {new Date().getFullYear()}
                </p>

                <div className="col-span-2 relative flex flex-col items-start justify-center text-start will-change-transform">
                    <span className="overflow-hidden">
                        <h1 className="font-bold text-[160px] tracking-tight">{title}</h1>
                    </span>

                    <span className="overflow-hidden pl-2 w-[65%] relative -top-5">
                        <p className="text-2xl font-semibold text-zinc-600 transform-gpu">
                            {description}
                        </p>
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
