"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Circle } from "lucide-react";
import Link from "next/link";
import {
    IItemImage,
    TCategory,
} from "@/app/products/[item]/utils/fetchItemImages";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BulletPoint from "@/components/ui/pointer";
import { IProduct } from "@/app/products/utils/fetchProducts";

// Interface for Props
interface Props {
    item: string;
    product: IProduct | undefined;
    itemImages: IItemImage[];
}

// Image section
export default function ImageSection({ item, product, itemImages }: Props) {
    // Item images category wise
    const [itemImagesCategoryWise, setItemImagesCategoryWise] =
        useState<IItemImage[]>(itemImages);

    // Category
    const [category, setCategory] = useState<TCategory>("All");

    // Filter images by category
    useEffect(() => {
        if (category === "All") {
            setItemImagesCategoryWise(itemImages);
        } else {
            const filteredImages = itemImages.filter(
                (itemImage) => itemImage.category === category
            );

            setItemImagesCategoryWise(filteredImages);
        }
    }, [category, itemImages]);

    return (
        <section
            className={cn(
                "relative z-10 min-h-screen bg-white flex flex-col items-center justify-between gap-10",
                "px-10 pb-0 -mt-0.5 rounded-b-[50px] will-change-transform overflow-hidden"
            )}
        >
            {/* category and Images */}

            <div className="w-full flex flex-col gap-10">
                {/* Categories */}
                {product && product.categories.length > 0 && (
                    <div className="col-span-3 relative w-full pt-10 flex flex-col items-center justify-center">
                        <div className="flex gap-5 items-center justify-center">
                            {product.categories.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCategory(item as TCategory)}
                                    className={cn(
                                        "group p-1 px-5 rounded-full cursor-pointer",
                                        item === category && "bg-[#171717] text-white"
                                    )}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ amount: 0.2, once: true }}
                                        transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                                        className="flex items-center gap-2 text-base font-semibold will-change-transform"
                                    >
                                        <span>{item}</span>
                                    </motion.span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Images */}
                <div className="grid grid-cols-3 gap-5">
                    {itemImagesCategoryWise &&
                        itemImagesCategoryWise.map((itemImage, index) => (
                            <motion.div
                                key={itemImage.id + category}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-5 h-auto w-full bg-white overflow-hidden 
                            cursor-pointer rounded-3xl"
                            >
                                <Link href={`/products/${item}/${itemImage.id}`}>
                                    <Image
                                        key={itemImage.id}
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        priority
                                        src={itemImage?.img[0]}
                                        alt={item + "-" + (index + 1)}
                                        className="h-[400px] w-full object-contain group-hover:scale-100 transition-all duration-500"
                                    />

                                    <div className="p-0 flex flex-col gap-5 items-center justify-center">
                                        <h1 className="text-base font-semibold">
                                            {itemImage.title}
                                        </h1>
                                        <div className="flex items-center gap-0">
                                            {itemImage.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0)]"
                                                >
                                                    <Circle
                                                        className={cn("w-3 h-3 text-white -skew-6", color)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="absolute top-5 right-5 py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white
                                    opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>

            {/* If no images */}
            {itemImagesCategoryWise.length === 0 && (
                <h1 className="text-2xl font-semibold text-zinc-600 flex-1 flex items-center justify-center">
                    No images found!
                </h1>
            )}

            {/* More */}
            <footer className="w-full flex items-center gap-10 pt-12 pb-10 col-span-3">
                <BulletPoint />
                <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                <div className=" group flex items-center gap-2 cursor-pointer">
                    <ArrowUpRight className="w-7 h-7 text-orange-600" />
                    <div className="relative h-7 overflow-hidden">
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                            Dowload brochure
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                            Dowload brochure
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
