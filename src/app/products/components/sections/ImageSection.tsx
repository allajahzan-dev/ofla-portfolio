"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BulletPoint from "@/components/ui/pointer";
import { IProduct } from "@/app/products/utils/fetchProducts";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { oswald } from "@/fonts/owald";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Image section
export default function ImageSection({ products }: Props) {
    return (
        <section
            className="min-h-screen relative z-30 bg-zinc-100 flex flex-col gap-10 items-center 
        px-8 rounded-b-[50px] -mt-0.5 will-change-transform overflow-hidden"
        >
            {/* All images */}
            <motion.div
                initial={{ y: 80, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-2 gap-x-3 gap-y-3"
            >
                {products.filter((item) => item.id !== 5).map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="group flex flex-col w-full p-2 rounded-4xl 
                    hover:bg-transparent transition-colors duration-300 "
                    >
                        {/* Image */}
                        <div className="relative w-full h-[720px] rounded-3xl overflow-hidden cursor-pointer">
                            <Image
                                src={item.img}
                                alt={item.img.slice(1).split(".")[0]}
                                width={1000}
                                height={1000}
                                priority
                                className={cn(
                                    "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300",
                                    item.id === 3 ? "object-left" : "object-center"
                                )}
                            />

                            {/* Shadow */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"/>

                            {/* Arrow */}
                            <div
                                className="absolute z-10 right-5 top-5 py-2.5 px-4 rounded-full bg-white hover:bg-orange-600 hover:text-white 
                       opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </div>

                            {/* Title */}
                            <div className="absolute inset-0 z-0 p-1 px-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-3xl">
                                <p
                                    className={cn(
                                        "text-2xl font-semibold text-white tracking-wide",
                                        oswald.className
                                    )}
                                >
                                    {item.title.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>

            {/* More */}
            <footer className="w-full flex items-center gap-10 pt-12 pb-10 col-span-2">
                <BulletPoint />
                <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                <Link
                    href={"/"}
                    className=" group flex items-center gap-2 cursor-pointer"
                >
                    <ArrowUpRight className="w-7 h-7 text-orange-600" />
                    <div className="relative h-7 overflow-hidden">
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                            Back to home
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                            Back to home
                        </p>
                    </div>
                </Link>
            </footer>
        </section>
    );
}
