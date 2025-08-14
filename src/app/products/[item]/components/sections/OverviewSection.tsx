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

    return (
        <section
            className="h-autof w-full relative bg-zinc-100 flex flex-col items-center
        px-10 py-40 rounded-t-[50px] will-change-transform overflow-hidden"
        >
            {/* Products */}
            <div className="w-full absolute top-10 px-10 flex items-center justify-between">
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
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                            className="flex items-center gap-2 will-change-transform"
                        >
                            <BulletPoint
                                className={cn(
                                    "group-hover:text-orange-600",
                                    title.split("-").join(" ") === product.title.toLowerCase() &&
                                    "text-orange-600"
                                )}
                            />
                            {product.title}
                        </motion.span>
                    </Link>
                ))}
            </div>

            {/* Overview */}
            <div className="grid grid-cols-3 gap-5 items-start">
                <p className="font-semibold text-lg text-start leading-[1]">Overview</p>
                <h1 className="text-4xl text-start font-semibold col-span-2 w-[75%]">
                    Our premium office chairs are expertly crafted for superior comfort
                    and professional aesthetics. Each chair combines ergonomic design with
                    high-quality materials to create seating solutions that enhance
                    productivity and style in any workspace.
                </h1>
            </div>
        </section>
    );
}
