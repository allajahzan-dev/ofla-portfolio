"use client";

import { IProduct } from "@/app/products/utils/fetchProducts";
import BulletPoint from "@/components/ui/pointer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Overview section
export default function OverviewSection({ products }: Props) {
    const pathname = usePathname();
    const title = pathname.split("/")[pathname.split("/").length - 1];

    const selectedProduct = products.find(
        (product) => product.title.toLowerCase() === title.split("-").join(" ")
    );

    return (
        <section
            className="h-auto w-full relative px-4 pt-24 pb-10 bg-white flex flex-col items-center gap-20
            -mt-0.5 rounded-t-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:pt-40 xl:pb-0 xl:rounded-t-[50px]"
        >
            {/* Holder
            <div
                className="w-32 h-3 bg-zinc-200 absolute top-5 left-[50%] -translate-x-1/2 rounded-full
                md:w-40"
            /> */}

            {/* Products */}
            <div className="w-full absolute top-0 p-10 hidden items-center justify-between">
                {products.map((product, index) => (
                    <Link
                        key={index}
                        href={product.href}
                        className={cn(
                            "group text-lg font-semibold hover:text-orange-600 cursor-pointer",
                            title.split("-").join(" ") === product.title.toLowerCase() &&
                            "text-orange-600"
                        )}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.2, once: true }}
                            transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                            className="flex items-center gap-2 will-change-transform"
                        >
                            <BulletPoint
                                className={cn(
                                    "text-orange-600",
                                    title.split("-").join(" ") === product.title.toLowerCase() &&
                                    "text-orange-600"
                                )}
                            />
                            {product.title === "Height adjustable table"
                                ? "HAT"
                                : product.title}
                        </motion.span>
                    </Link>
                ))}
            </div>

            {/* Overview */}
            <div
                className="w-full grid md:flex lg:grid grid-cols-1 gap-10 items-start
                md:grid-cols-3"
            >
                <p className="font-semibold text-lg text-start leading-[1]">
                    Overview
                </p>
                <h1
                    className="w-[100%] text-2xl text-start font-semibold col-span-2 leading-6 
                    md:w-[80%] lg:w-[90%] xl:w-[85%] md:text-[28px] lg:text-4xl md:leading-7 lg:leading-9"
                >
                    {selectedProduct?.overview}
                </h1>
            </div>
        </section>
    );
}
