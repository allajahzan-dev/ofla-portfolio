"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    ArrowDownRight,
    ArrowRight,
    Check,
    Circle,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import {
    IItemImage,
    TCategory,
} from "@/app/products/[item]/utils/fetchItemImages";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BulletPoint from "@/components/ui/pointer";
import { IProduct } from "@/app/products/utils/fetchProducts";
import BreakText from "@/components/helper/BreakText";

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

            setItemImagesCategoryWise(filteredImages);
        }

        SetToggleCategoryMenu(false);
    }, [category, itemImages]);

    return (
        <section
            className="relative z-10 min-h-screen bg-white px-4 py-10 pb-40 flex flex-col items-center justify-between gap-10
            -mt-0.5 rounded-b-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:py-40 xl:rounded-b-[50px]"
        >
            {/* category and Images */}
            <div className="w-full flex flex-col gap-10">
                {/* Categories on desktop */}
                {product && product.categories.length > 0 && (
                    <div
                        className="col-span-3 relative w-full pt-0 hidden flex-col items-center justify-center
                        lg:flex"
                    >
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

                {/* Categories on mobile */}
                {product && product.categories.length > 0 && (
                    <div
                        className="col-span-3 relative w-full pt-0 flex flex-col items-start justify-between
                        lg:hidden"
                    >
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                SetToggleCategoryMenu(!toggleCategoryMenu);
                            }}
                            className="p-0 flex items-center gap-2 cursor-pointer"
                        >
                            {toggleCategoryMenu ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                            <span className="text-lg font-semibold">
                                {category === "All" ? "Filter by categories" : category}
                            </span>
                        </div>

                        <div
                            className={cn(
                                "relative z-50 left-0 top-5 w-full shadow-[0_0_10px_0_rgba(0,0,0,0)] rounded-lg overflow-hidden",
                                toggleCategoryMenu ? "block" : "hidden"
                            )}
                        >
                            <div
                                className="flex flex-col gap-0 p-0 bg-white text-base font-semibold
                                sm:font-medium"
                            >
                                {product.categories.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCategory(item as TCategory);
                                        }}
                                        className="p-2 flex items-center justify-between text-start hover:bg-zinc-100 rounded-md cursor-pointer"
                                    >
                                        {item}
                                        {category === item && <Check className="w-5 h-5" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Images */}
                <div
                    className="grid grid-cols-2
                    sm:grid-cols-2 lg:grid-cols-3 gap-2"
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
                                        src={itemImage?.img[1] || "/"}
                                        alt={item + "-" + (index + 1)}
                                        className="h-[230px] sm:h-[300px] md:h-[350px] lg:h-[380px] w-full object-contain group-hover:scale-100 transition-all duration-500"
                                    />

                                    <div className="py-2 flex flex-col gap-5 items-center justify-center">
                                        <h1
                                            className="text-sm text-center font-semibold leading-4
                                            md:text-base md:leading-5"
                                        >
                                            {BreakText({ text: itemImage.title, breakAfter: 2, className: "block sm:hidden" })}
                                        </h1>
                                        <div className="flex items-center gap-0">
                                            {itemImage.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0)]"
                                                >
                                                    <Circle
                                                        className={cn("w-3 h-3 text-white", color)}
                                                    />
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
            <footer
                className="w-full px-4 py-10 absolute bottom-0 flex items-center gap-3 col-span-1
                md:px-10 md:gap-10 md:col-span-2"
            >
                <BulletPoint />
                <div
                    className="bg-zinc-200 w-24 h-[1.6px] rounded-full flex-1
                    md:h-0.5"
                />
                <Link
                    href={"/products"}
                    className="group flex items-center gap-2 cursor-pointer"
                >
                    <ArrowDownRight
                        className="w-5 h-5 text-orange-600
                        md:w-7 md:h-7"
                    />
                    <div
                        className="relative h-7 text-lg font-semibold overflow-hidden
                        md:text-2xl"
                    >
                        <p className="group-hover:-translate-y-full transition-transform duration-300">
                            Brochure
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                            Brochure
                        </p>
                    </div>
                </Link>
            </footer>
        </section>
    );
}
