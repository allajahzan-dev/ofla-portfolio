"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight, Circle } from "lucide-react";
import Link from "next/link";
import {
    IItemImage,
    TCategory,
    TSubCategory,
} from "@/app/products/[item]/utils/fetchItemImages";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/products/utils/fetchProducts";
import BreakText from "@/components/helper/BreakText";
import Category from "../filter/Category";
import More from "@/components/common/More";

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
    const [category, setCategory] = useState<TCategory>(
        product ? (Object.keys(product.categories)[0] as TCategory) : "All"
    );

    // Category
    const [subCategory, setSubCategory] = useState<TSubCategory>("All");

    // Toggle category
    const [toggleCategoryMenu, SetToggleCategoryMenu] = useState<boolean>(false);

    // Filter images by category
    useEffect(() => {
        if (category === "All") {
            setItemImagesCategoryWise(itemImages);
        } else {
            const filteredImages = itemImages.filter(
                (itemImage) => itemImage.category === category
            );

            if (subCategory === "All") {
                setItemImagesCategoryWise(filteredImages);
            } else {
                const filteredImagesBySubCategory = filteredImages.filter(
                    (itemImage) => itemImage.subCategory === subCategory
                );
                setItemImagesCategoryWise(filteredImagesBySubCategory);
            }
        }

        SetToggleCategoryMenu(false);
    }, [category, subCategory, itemImages]);

    return (
        <section
            className="relative z-10 min-h-screen bg-white px-4 py-10 pb-40 flex flex-col items-center justify-between gap-10
            -mt-0.5 rounded-b-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:py-40 xl:rounded-b-[50px]"
        >
            <div className="w-full flex flex-col gap-10">
                {/* Filter by Category */}
                <Category
                    product={product}
                    category={category}
                    setCategory={setCategory}
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                    toggleCategoryMenu={toggleCategoryMenu}
                    SetToggleCategoryMenu={SetToggleCategoryMenu}
                />

                {/* Images */}
                <div
                    className="grid grid-cols-2
                    sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-16"
                >
                    {itemImagesCategoryWise &&
                        itemImagesCategoryWise.map((itemImage, index) => (
                            <motion.div
                                key={itemImage.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-2 h-auto w-full bg-white overflow-hidden cursor-pointer"
                            >
                                <Link href={`/products/${item}/${itemImage.id}`}>
                                    <Image
                                        key={itemImage.id}
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        priority
                                        src={itemImage?.img[1] || itemImage?.img[0] || "/"}
                                        alt={item + "-" + (index + 1)}
                                        className="h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] w-full object-contain group-hover:scale-100 transition-all duration-500"
                                    />

                                    <div className="py-2 flex flex-col gap-5 items-center justify-center">
                                        <h1
                                            className="text-sm text-center font-semibold leading-4
                                            md:text-base md:leading-5"
                                        >
                                            {BreakText({
                                                text: itemImage.title,
                                                breakAfter: 2,
                                                className: "block sm:hidden",
                                            })}
                                        </h1>
                                        <div className="flex items-center gap-0">
                                            {itemImage.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0)]"
                                                >
                                                    <Circle className={cn("w-3 h-3 text-white", color)} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="hidden absolute top-5 right-5 py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white
                                        opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all
                                        lg:block"
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
                <h1
                    className="text-lg font-semibold text-zinc-600 flex-1 flex items-center justify-center
                    sm:text-xl md:text-2xl"
                >
                    No images found!
                </h1>
            )}

            {/* More */}
            <More text="Brochure" action={() => alert("Downloading Brochure")} />
        </section>
    );
}
