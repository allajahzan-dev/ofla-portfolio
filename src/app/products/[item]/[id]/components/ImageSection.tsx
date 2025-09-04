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
                <div className="relative h-full w-full flex flex-col gap-2 justify-center cursor-pointer overflow-hidden">
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
                    {thumbs.length > 0 && (
                        <div
                            className="relative h-40 grid grid-cols-4 grid-rows-1 gap-0 overflow-hidden 
                            md:h-48"
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

                {/* {thumbs.length > 0 && (
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
                )} */}
            </motion.div>
        </section>
    );
}
