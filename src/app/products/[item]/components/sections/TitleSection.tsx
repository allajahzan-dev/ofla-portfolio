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

    // Product description
    const [description, setDescription] = useState<string>("");

    // Set product description
    useLayoutEffect(() => {
        const product = products.find(
            (product) => title.split("-").join(" ") === product.title.toLowerCase()
        );

        if (!product) {
            setDescription("No description found!");
            return;
        }

        setDescription(product.description);
    }, [products, title, pathname]);

    return (
        <section
            data-speed={0.1}
            style={{
                backgroundImage: `url(/images/products/${title === "height-adjustable-table"
                        ? "height-adjustable-tables"
                        : title
                    }.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen w-full relative bg-zinc-100 text-white flex flex-col items-center justify-end
        px-10 will-change-transform overflow-hidden"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black via-black/30 to-transparent" />

            <div className="relative top-0 w-full p-10 pb-12 pl-0 flex flex-col items-start">
                <div
                    className={cn(
                        "relative flex flex-col gap-0 items-start text-start will-change-transform"
                    )}
                >
                    {/* Year */}
                    <p
                        className={cn(
                            "pl-1 font-semibold text-base text-start tracking-wide relative top-0",
                            oswald.className
                        )}
                    >
                        2019 — {new Date().getFullYear()}
                    </p>

                    {/* Heading */}
                    <span className="overflow-hidden">
                        <motion.h1
                            key={formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={cn("font-bold text-[120px]")}
                        >
                            {title === "height-adjustable-table"
                                ? "HAT"
                                : formattedTitle.split("-").join(" ")}
                        </motion.h1>
                    </span>

                    {/* Description */}
                    <span className="overflow-hidden w-[63%] relative -top-0">
                        <motion.p
                            key={formattedTitle}
                            initial={{ translateY: "100%" }}
                            animate={{ translateY: "0%" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="pl-1 text-lg font-semibold transform-gpu"
                        >
                            {description}
                        </motion.p>
                    </span>
                </div>
            </div>
        </section>
    );
}
