"use client";

import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { Lens } from "@/components/ui/lens";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BulletPoint from "@/components/ui/pointer";

// Interface for Props
interface Props {
    itemImage: IItemImage;
}

// Image section
export default function ImageSection({ itemImage }: Props) {
    const pathname = usePathname();
    const item = pathname.split("/")[2].split("-").join(" ");
    const itemTitle = item.charAt(0).toUpperCase() + item.slice(1);

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
            className="h-full w-full relative z-20 px-4 pb-40 bg-white flex gap-8 flex-col items-start
            -mt-0.5 rounded-b-[35px] will-change-transform
            md:px-5 xl:px-10 xl:rounded-b-[50px]"
        >
            <div
                className="w-full h-full relative grid grid-cols-1 gap-10
                 lg:grid-cols-2"
            >
                {/* Item images */}
                <div className="relative h-full w-full flex flex-col gap-2 justify-start cursor-pointer overflow-hidden">
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
                            className="relative h-28 grid grid-cols-4 grid-rows-1 gap-2 overflow-hidden 
                            sm:h-40 md:h-48"
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

                {/* Item details */}
                <div className="flex-1 flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        {/* Rate */}
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-3 h-3 text-orange-400 fill-orange-400"
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <p
                            className="w-[100%] text-base font-medium transform-gpu leading-5
                            md:w-[75%] lg:w-[55%] sm:text-lg sm:leading-6 xl:leading-7"
                        >
                            Ergonomic executive mesh chair designed for superior comfort and
                            posture support, featuring breathable mesh, adjustable height, and
                            smooth-rolling wheels.
                        </p>
                    </div>

                    {/* Key features */}
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-lg text-start">Key features</p>
                        <ul
                            className="flex flex-col justify-center gap-0 text-base font-medium text-nowrap text-ellipsis overflow-hidden
                            sm:text-lg"
                        >
                            {itemImage.keyFeatures.map((point, index) => (
                                <li key={index} className="list-none">
                                    <BulletPoint className="text-orange-600" />
                                    &nbsp;&nbsp;
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Material specifications */}
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-lg text-start">
                            Material Specifications
                        </p>
                        <ul
                            className="flex flex-col justify-center gap-0 text-base font-medium text-nowrap text-ellipsis overflow-hidden
                            sm:text-lg"
                        >
                            {itemImage.materialSpecification.map((point, index) => (
                                <li key={index} className="list-none">
                                    <BulletPoint className="text-orange-600" />
                                    &nbsp;&nbsp;
                                    <span className="font-bold">
                                        {point.split(": ")[0] + ": "}
                                    </span>
                                    {point.split(": ")[1]}
                                </li>
                            ))}
                        </ul>
                    </div>
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
            </div>
        </section>
    );
}
