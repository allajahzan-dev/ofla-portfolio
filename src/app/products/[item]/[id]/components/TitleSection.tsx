"use client";

import BulletPoint from "@/components/ui/pointer";
import { motion } from "framer-motion";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import BreakText from "@/components/helper/BreakText";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Title section
export default function TitleSection({
    itemImage: { title, points, colors },
}: Props) {
    return (
        <section
            className="h-auto w-full relative px-4 pt-32 pb-5 bg-white flex flex-col items-center justify-center
            will-change-transform overflow-hidden
            md:px-5 xl:px-10 md:pt-36 lg:pt-44 lg:pb-20"
        >
            {/* Title */}
            <motion.div
                initial={{ y: -40, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative w-full h-full flex flex-col gap-10 items-center justify-center will-change-transform"
            >
                <h1
                    className="text-4xl text-center font-semibold tracking-tight leading-[1.2]
                    md:text-[68px] xl:text-[80px]"
                >
                    {BreakText({
                        text: title,
                        breakAfter: 2,
                        className: "block lg:hidden",
                    })}
                </h1>

                <ul
                    className="flex flex-col items-center justify-center gap-1
                    lg:flex-row lg:gap-3"
                >
                    {points.map((point, index) => (
                        <li
                            key={index}
                            className="text-lg font-semibold list-none flex items-center gap-3 leading-5"
                        >
                            {point} 
                            {index !== 2 && (
                                <BulletPoint className="text-zinc-600 hidden lg:block" />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center mt-5">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0)]"
                        >
                            <Circle className={cn("w-4 h-4 text-white -skew-6", color)} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
