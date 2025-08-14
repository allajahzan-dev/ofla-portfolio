"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import BulletPoint from "@/components/ui/pointer";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { motion } from "framer-motion";

// Interface for Props
interface Props {
    item: string;
    itemImages: IItemImage[];
}

// Image section
export default function ImageSection({ item, itemImages }: Props) {
    return (
        <section
            className={cn(
                "relative z-10 min-h-screen bg-zinc-100 flex flex-col items-center justify-center gap-10",
                "px-10 -mt-0.5 rounded-b-[50px] will-change-transform overflow-hidden"
            )}
        >
            {/* Content */}
            {itemImages.length > 0 && (
                <>
                    <div className="w-full grid grid-cols-3 gap-5">
                        {/* Images */}
                        {itemImages.map((itemImage, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                key={itemImage.id}
                                className="group relative p-10 h-[500px] w-full bg-white rounded-3xl overflow-hidden 
                            cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.04)]"
                            >
                                <Link href={`/products/${item}/${itemImage.id}`}>
                                    <Image
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        src={itemImage?.img[0]}
                                        alt={item + index}
                                        className="h-full w-full object-contain group-hover:scale-100 transition-all duration-500"
                                    />

                                    <div
                                        className="absolute top-5 right-5 py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                       group-hover:opacity-100 opacity-0 duration-300 transition-opacity"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* More */}
                    <footer className="w-full flex items-center gap-10 pt-12 pb-10 col-span-2">
                        <BulletPoint />
                        <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                        <div className=" group flex items-center gap-2 cursor-pointer">
                            <Download className="w-7 h-7 text-orange-600" />
                            <div className="relative h-7 overflow-hidden">
                                <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                                    Dowload Brochure
                                </p>
                                <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                                    Dowload Brochure
                                </p>
                            </div>
                        </div>
                    </footer>
                </>
            )}

            {itemImages.length === 0 && (
                <h1 className="text-2xl font-semibold text-zinc-600 relative -top-10">
                    No images found!
                </h1>
            )}
        </section>
    );
}
