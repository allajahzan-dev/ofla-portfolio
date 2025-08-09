"use client";

import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IProduct } from "@/app/products/utils/fetchProducts";
import BulletPoint from "@/components/ui/pointer";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Title section
export default function TitleSection({ products }: Props) {
    return (
        <section
            className="h-[calc(100vh-9vh)] w-full relative bg-zinc-100 flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <motion.div
                initial={{ y: -50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative top-14 grid grid-cols-3"
            >
                <p
                    className={cn(
                        "font-semibold text-base text-start tracking-wide leading-[1] relative left-0 top-20 h-fit",
                        oswald.className
                    )}
                >
                    2023 — {new Date().getFullYear()}
                </p>

                <div className="col-span-2 relative flex flex-col items-start justify-center text-start will-change-transform">
                    <span className="overflow-hidden">
                        <h1 className="font-bold text-[160px] tracking-tight">Products</h1>
                    </span>

                    <span className="overflow-hidden pl-2 w-[60%] relative -top-5">
                        <p className="text-2xl font-semibold text-zinc-600 transform-gpu">
                            Quality chairs, tables, storage solutions, and office furniture
                            designed for modern workspaces.
                        </p>
                    </span>
                </div>
            </motion.div>

            {/* Products */}
            <div className="w-full absolute bottom-10 px-10 flex items-center justify-between">
                {products.map((product, index) => (
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        key={index}
                        href={`/products/${product.title.toLowerCase()}`}
                        className={cn(
                            "group text-lg font-semibold hover:text-orange-600 cursor-pointer",
                            "flex items-center gap-2 transform-gpu"
                        )}
                    >
                        <BulletPoint className="group-hover:text-orange-600" />
                        {product.title}
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
