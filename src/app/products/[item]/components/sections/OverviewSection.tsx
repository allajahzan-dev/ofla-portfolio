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
            className="h-auto w-full relative bg-white flex flex-col items-center gap-20
        px-10 pt-40 pb-20 -mt-0.5 rounded-t-[50px] will-change-transform overflow-hidden"
        >
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
            <div className="w-full grid grid-cols-3 gap-5 items-start">
                <p className="font-semibold text-lg text-start leading-[1]">Overview</p>
                <h1 className="text-4xl text-start font-semibold col-span-2 w-[70%]">
                    {selectedProduct?.overview}
                </h1>
            </div>
        </section>
    );
}
