"use client";

import BulletPoint from "@/components/ui/pointer";
import { motion } from "framer-motion";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

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
            className="h-[60vh] w-full relative bg-white flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <motion.div
                initial={{ y: -30, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative top-20 w-full h-full flex flex-col items-center justify-center will-change-transform"
            >
                <h1 className="font-bold text-[80px] tracking-tight">{title}</h1>

                <ul className="flex items-center justify-center gap-5 text-lg font-semibold">
                    {points.map((point, index) => (
                        <li key={index} className="text-lg list-none">
                            <BulletPoint className="text-orange-600" />
                            &nbsp;&nbsp;{point}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center mt-10">
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
