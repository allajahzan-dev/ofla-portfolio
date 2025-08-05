"use client";

import { oswald } from "@/fonts/owald";
import { usePageTransition } from "@/hooks/usePageTransition";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "../../layout";

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

    // Page transition navigator
    const navigator = usePageTransition();

    // Selected product
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Set description
    useEffect(() => {
        if (title === "products") {
            setSelectedProduct("");
            setDescription(
                "Quality chairs, tables, storage solutions, and office furniture designed for modern workspaces."
            );
            return;
        }
        const product = products.find(
            (product) =>
                (selectedProduct.toLowerCase() || title) === product.title.toLowerCase()
        );

        if (!product) {
            setDescription("No description found!");
            return;
        }

        setDescription(product.description);
    }, [selectedProduct, title, pathname]);

    return (
        <section
            id="title-section"
            className="h-[calc(100vh-9vh)] w-screen relative bg-zinc-100 flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <div className="relative w-full grid grid-cols-3">
                <p
                    className={cn(
                        "font-semibold text-base text-start leading-[1] relative left-0 top-16 h-fit",
                        oswald.className
                    )}
                >
                    2023 — {new Date().getFullYear()}
                </p>

                <div className="col-span-2 flex flex-col text-start will-change-transform">
                    <span className="overflow-hidden w-[80%]">
                        <motion.h1
                            key={selectedProduct || formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className={cn("text-[160px] font-bold")}
                        >
                            {selectedProduct || formattedTitle}
                        </motion.h1>
                    </span>

                    <span className="overflow-hidden pl-2">
                        <motion.p
                            key={selectedProduct || formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="w-[70%] text-2xl font-semibold text-zinc-600 transform-gpu"
                        >
                            {description}
                        </motion.p>
                    </span>
                </div>
            </div>

            {/* Products */}
            <div className="fixed bottom-10 left-[49.5%] -translate-x-1/2 flex items-center gap-12">
                {products.map((product, index) => (
                    <p
                        key={index}
                        onClick={() => {
                            navigator(`/products/${product.title.toLowerCase()}`);
                            setSelectedProduct(product.title);
                        }}
                        className={cn(
                            "text-lg font-medium hover:text-orange-600 cursor-pointer transform-gpu",
                            (selectedProduct.toLowerCase() || title) ===
                            product.title.toLowerCase() && "text-orange-600"
                        )}
                    >
                        {product.title}
                    </p>
                ))}
            </div>
        </section>
    );
}
