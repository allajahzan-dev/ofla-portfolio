"use client";

import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { IProduct } from "@/app/products/utils/fetchProducts";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Title section
export default function TitleSection({ products }: Props) {
    // Title
    const pathname = usePathname();
    const title = pathname.split("/")[pathname.split("/").length - 1];
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    // Selected product
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Set description
    useLayoutEffect(() => {
        const product = products.find(
            (product) =>
                (selectedProduct.toLowerCase() || title) === product.title.toLowerCase()
        );

        if (!product) {
            setDescription("No description found!");
            return;
        }

        setDescription(product.description);
        setSelectedProduct(product.title);
    }, [selectedProduct, products, title, pathname]);

    return (
        <section
            data-speed={0.1}
            style={{
                backgroundImage: `url(/images/products/${title}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center 64%",
            }}
            className="min-h-screen w-full relative bg-zinc-100 text-white flex flex-col items-center justify-end
        px-10 will-change-transform overflow-hidden"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black via-black/40 to-transparent" />

            {/* Title */}
            <div className="relative top-0 w-full h-88 flex flex-col items-start">
                <p
                    className={cn(
                        "font-semibold text-base text-start tracking-wide leading-[1] absolute left-2 top-0",
                        oswald.className
                    )}
                >
                    2023 — {new Date().getFullYear()}
                </p>

                <div
                    className={cn(
                        "col-span-2 relative flex flex-col gap-0 items-start text-start will-change-transform"
                    )}
                >
                    <span className="overflow-hidden">
                        <motion.h1
                            key={selectedProduct || formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={cn("font-bold text-[160px]")}
                        >
                            {selectedProduct || formattedTitle}
                        </motion.h1>
                    </span>

                    <span className="overflow-hidden pl-2 w-[70%] relative -top-5">
                        <motion.p
                            key={selectedProduct || formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-xl font-semibold transform-gpu"
                        >
                            {description}
                        </motion.p>
                    </span>
                </div>
            </div>
        </section>
    );
}
