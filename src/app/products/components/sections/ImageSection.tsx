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
            className="min-h-screen relative z-30 px-4 pb-40 bg-zinc-100 flex flex-col gap-20 items-center 
            -mt-0.5 will-change-transform overflow-hidden
            md:px-5 xl:px-10"
        >
            {/* All images */}
            <motion.div
                initial={{ y: 80, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5
                md:gap-y-10"
            >
                {products
                    .filter((item) => item.id !== 5)
                    .map((item) => (
                        // <Link
                        // key={item.id}
                        // href={item.href}
                        //     className="group flex flex-col w-full p-0 rounded-4xl
                        //     hover:bg-transparent transition-colors duration-300
                        //     lg:p-2"
                        // >
                        //     <div className="relative w-full h-[720px] rounded-3xl overflow-hidden cursor-pointer">
                        //         <Image
                        //             src={item.img}
                        //             alt={item.img.slice(1).split(".")[0]}
                        //             width={1000}
                        //             height={1000}
                        //             priority
                        //             className={cn(
                        //                 "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300",
                        //                 item.id === 3 ? "object-left" : "object-center"
                        //             )}
                        //         />

                        //         <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"/>

                        //         <div
                        //             className="absolute z-10 right-5 top-5 py-2.5 px-4 rounded-full bg-white hover:bg-orange-600 hover:text-white
                        //    opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all"
                        //         >
                        //             <ArrowRight className="w-5 h-5" />
                        //         </div>

                        //         <div className="absolute inset-0 z-0 p-1 px-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-3xl">
                        //             <p
                        //                 className={cn(
                        //                     "text-2xl font-semibold text-white tracking-wide",
                        //                     oswald.className
                        //                 )}
                        //             >
                        //                 {item.title.toUpperCase()}
                        //             </p>
                        //         </div>
                        //     </div>
                        // </Link>

                        <Link
                            key={item.id}
                            href={item.href}
                            className="group flex flex-col w-full p-0 hover:bg-transparent transition-colors duration-300 rounded-4xl
                            lg:p-2 lg:hover:bg-white"
                        >
                            <div
                                className="w-full h-[520px] rounded-3xl overflow-hidden cursor-pointer
                                md:h-[500px] lg:h-[600px] xl:h-[700px]"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.img.slice(1).split(".")[0]}
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    priority
                                    className="h-full w-full object-cover object-bottom scale-105"
                                />
                            </div>
                            <figcaption className="w-full flex gap-2 p-5 py-5 cursor-pointer will-change-transform">
                                <div className="flex flex-col gap-2 flex-1">
                                    <h1
                                        className="text-2xl font-semibold
                                        md:text-[28px] lg:text-4xl"
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        className="w-[80%] text-base text-zinc-600 font-semibold tracking-tight leading-5
                                        sm:w-[80%] lg:w-[78%] xl:w-[60%] lg:text-lg lg:font-medium"
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div
                                    className="hidden self-center py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                                    group-hover:opacity-100 opacity-0 duration-300 transition-opacity
                                    lg:block"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </figcaption>
                        </Link>
                    ))}
            </motion.div>

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
                    <ArrowUpRight
                        className="w-5 h-5 text-orange-600
                        md:w-7 md:h-7"
                    />
                    <div
                        className="relative h-7 text-lg font-semibold overflow-hidden
                        md:text-2xl"
                    >
                        <p className="group-hover:-translate-y-full transition-transform duration-300">
                            Back to home
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                            Back to home
                        </p>
                    </div>
                </Link>
            </footer>
        </section>
    );
}
