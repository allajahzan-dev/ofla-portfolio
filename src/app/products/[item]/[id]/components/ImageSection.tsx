"use client";

import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Lens } from "@/components/ui/lens";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Image section
export default function ImageSection({ itemImage }: Props) {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Images
    const images = itemImage.img || [];
    const [mainImage, setMainImage] = useState(images[0]);
    const [thumbs, setThumbs] = useState(images.slice(1, 5));

    const handleThumbClick = (clickedImg: string, index: number) => {
        const newThumbs = [...thumbs];
        newThumbs[index] = mainImage;
        setMainImage(clickedImg);
        setThumbs(newThumbs);
    };

    return (
        <section
            ref={sectionRef}
            className="h-full w-full relative z-10 bg-white flex flex-col items-center
        -mt-0.5 will-change-transform"
        >
            {/* Images */}
            <motion.div
                initial={{ y: 60 }}
                animate={{ y: 0}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full h-full relative pt-10 grid grid-cols-2 bg-white"
            >
                <div className="w-full h-screen  bg-white flex justify-center cursor-pointer overflow-hidden">
                    <Lens>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={mainImage}
                                initial={{ x: 50 }}
                                animate={{ x: 0 }}
                                exit={{ x: 50 }}
                                transition={{ duration: 0.3 }}
                                src={mainImage}
                                alt="img"
                                className={cn("w-full h-full object-contain")}
                            />
                        </AnimatePresence>
                    </Lens>
                </div>

                {thumbs.length > 1 && (
                    <div className="relative w-full h-screen grid grid-cols-2 grid-rows-2">
                        {thumbs.map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative w-full h-full bg-white flex justify-center cursor-pointer overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={image}
                                        initial={{ x: -50 }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        exit={{ x: -50 }}
                                        src={image}
                                        alt="img"
                                        className="w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleThumbClick(image, index)}
                                    className="p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
