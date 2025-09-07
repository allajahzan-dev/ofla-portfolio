"use client";

import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Lens } from "@/components/ui/lens";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Image section
export default function ImageSection({ itemImage }: Props) {
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

    return (
        <section
            className="h-full w-full relative z-20 px-4 bg-white flex gap-8 flex-col items-start
            -mt-0.5 will-change-transform
            md:px-5 xl:px-10"
        >
            <motion.div
                initial={{ y: 40, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full h-full relative grid grid-cols-1 gap-10
                lg:grid-cols-1"
            >
                {/* Item images */}
                <div
                    className="relative h-full w-full grid grid-cols-1 gap-2 justify-center cursor-pointer overflow-hidden
                     lg:grid-cols-2"
                >
                    {/* Lens */}
                    <div className="bg-white rounded-lg">
                        <Lens>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={mainImage}
                                    initial={{ x: 0, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    src={mainImage}
                                    alt="img"
                                    className="w-full h-[calc(62vh)] object-contain 
                                    sm:h-[calc(60vh)] md:h-[calc(78vh)]"
                                />
                            </AnimatePresence>
                        </Lens>
                    </div>

                    {/* Remaining images */}
                    <div className="h-36 lg:h-[calc(78vh)]">
                        {thumbs.length > 0 && (
                            <div
                                className="relative h-full grid grid-cols-4 grid-rows-1 overflow-hidden 
                            md:h-full lg:grid-cols-2 lg:grid-rows-2"
                            >
                                {thumbs.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        onClick={() => handleSwapImage(image, index)}
                                        className="group relative w-full h-full bg-white rounded-lg cursor-pointer"
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={image}
                                                initial={{ x: 0, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                src={image}
                                                alt="img"
                                                className="w-full h-full object-contain"
                                            />
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
