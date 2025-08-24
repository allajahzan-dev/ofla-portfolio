"use client";

import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Lens } from "@/components/ui/lens";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Image section
export default function ImageSection({ itemImage }: Props) {
    const [hasMounted, setHasMounted] = useState(false);

    // Images
    const images = itemImage.img || [];
    const [mainImage, setMainImage] = useState(images[0]);
    const [thumbs, setThumbs] = useState(images.slice(1, 5));

    // Handle swap image
    const handleSwapImage = (clickedImg: string, index: number) => {
        const newThumbs = [...thumbs];
        newThumbs[index] = mainImage;
        setMainImage(clickedImg);
        setThumbs(newThumbs);
    };

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <section
            className="h-full w-full relative z-10 bg-white flex flex-col items-center
        -mt-0.5 will-change-transform"
        >
            {/* Images */}
            <motion.div
                initial={{ y: 30, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={cn(
                    "w-full h-full relative grid bg-white",
                    thumbs.length === 0 ? "grid-cols-1" : "grid-cols-2"
                )}
            >
                <div className="relative w-full h-screen bg-white flex justify-center cursor-pointer overflow-hidden">
                    <Lens>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={mainImage}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={mainImage}
                                alt="img"
                                className={cn("w-full h-full object-contain")}
                            />
                        </AnimatePresence>
                    </Lens>
                </div>

                {thumbs.length > 0 && (
                    <div className={cn("relative w-full h-screen grid grid-cols-2 grid-rows-2")}>
                        {thumbs.map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative w-full h-full bg-white flex justify-center cursor-pointer"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={image}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        src={image}
                                        alt="img"
                                        className="w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileTap={{ scale: 0 }}
                                    onClick={() => handleSwapImage(image, index)}
                                    className="p-3 bg-zinc-100 shadow absolute top-1/2 -translate-y-1/2 -left-8 rounded-xl opacity-100 group-hover:opacity-100 transition-all duration-300"
                                >
                                    <ArrowLeftRight className="w-5 h-5" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </section>
    );
}
