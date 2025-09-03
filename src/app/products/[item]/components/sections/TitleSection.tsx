"use client";

import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { IProduct } from "@/app/products/utils/fetchProducts";
import BreakText from "@/components/helper/BreakText";

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
            className="min-h-screen w-full relative bg-zinc-100 px-4 text-white flex flex-col items-center justify-end
            will-change-transform overflow-hidden
            md:px-5 xl:px-10"
        >
            {/* Background image */}
            <motion.div
                key={formattedTitle}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                    backgroundImage: `url(/images/products/${title === "height-adjustable-table"
                            ? "height-adjustable-tables"
                            : title
                        }.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0"
            />

            {/* Shadow */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black via-black/40 to-transparent
                md:via-black/20"
            />

            <div className="w-full pb-20 flex flex-col items-start">
                <motion.div
                    key={formattedTitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="w-full relative flex flex-col gap-8 items-start text-start will-change-transform"
                >
                    {/* Year */}
                    <p
                        className={cn(
                            "pl-1 font-semibold text-base text-start tracking-wide",
                            oswald.className,
                            "md:pl-2"
                        )}
                    >
                        2019 — {new Date().getFullYear()}
                    </p>

                    {/* Heading */}
                    <h1
                        className="font-bold text-[80px]
                        md:text-[100px] lg:text-[120px] leading-[0.9]"
                    >
                        {title === "height-adjustable-table"
                            ? "HAT"
                            : formattedTitle.split("-").join(" ")}
                    </h1>

                    {/* Description */}
                    <p
                        className="pl-1 text-base font-semibold transform-gpu leading-5
                        md:pl-2 md:text-lg lg:text-xl lg:leading-6"
                    >
                        {BreakText({ text: description, breakAfter: 4})}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
