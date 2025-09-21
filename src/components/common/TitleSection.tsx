"use client";

import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    title: string;
    description: string;
    children?: ReactNode;
}

// Title section
export default function TitleSection({ title, description, children }: Props) {
    const pathanme = usePathname();
    const isAboutUs = pathanme === "/about-us";

    return (
        <section
            className={cn(
                "w-full relative px-4 bg-zinc-100 flex flex-col items-center justify-center",
                "will-change-transform overflow-hidden",
                isAboutUs ? "h-[70vh]" : "h-[58vh]",
                "md:h-[68vh] xl:h-[calc(100vh-9vh)] md:px-5 xl:px-10"
            )}
        >
            {/* Title */}
            <motion.div
                initial={{ y: -40, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative top-2 w-full grid grid-cols-1 gap-5
                md:grid-cols-3 md:top-14 md:gap-0"
            >
                {children || (
                    <p
                        className={cn(
                            "order-2 pl-1 font-semibold text-base text-start tracking-wide leading-[1] relative left-0 top-0 h-fit",
                            oswald.className,
                            "md:order-1 md:top-14 xl:top-20"
                        )}
                    >
                        2019 — {new Date().getFullYear()}
                    </p>
                )}

                <div
                    className="order-1 col-span-1 relative flex flex-col items-start justify-center text-start will-change-transform
                    md:order-2 md:col-span-2"
                >
                    <span className="overflow-hidden">
                        <h1
                            className="font-bold text-[80px] tracking-tight
                            sm:text-[100px] md:text-[110px] xl:text-[160px]"
                        >
                            {title}
                        </h1>
                    </span>

                    <span
                        className="overflow-hidden pl-1 w-[90%] relative -top-3
                        lg:pl-2 sm:w-[60%] md:w-[70%] lg:w-[55%] xl:w-[55%]"
                    >
                        <p
                            className="text-lg font-semibold text-zinc-600 transform-gpu leading-5
                            sm:text-xl xl:text-2xl sm:leading-6 xl:leading-7"
                        >
                            {description}
                        </p>
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
