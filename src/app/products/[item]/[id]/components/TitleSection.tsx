"use client";

import BulletPoint from "@/components/ui/pointer";
import { motion } from "framer-motion";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Title section
export default function TitleSection({ itemImage: { title, points } }: Props) {
    return (
        <section
            className="h-[calc(100vh-30vh)] w-full relative bg-white flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <motion.div
                initial={{ y: -50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative top-16 w-full flex flex-col items-center justify-center will-change-transform"
            >
                <h1 className="font-bold text-[100px] tracking-tight">{title}</h1>

                <ul className="flex items-center justify-center gap-5 text-lg font-semibold">
                    {points.map((point, index) => (
                        <li key={index} className="text-lg list-none">
                            <BulletPoint className="text-orange-600" />
                            &nbsp;&nbsp;{point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
