"use client";

import { IProduct } from "@/app/products/utils/fetchProducts";
import More from "@/components/common/More";
import { motion } from "framer-motion";
import ProductImages from "@/components/common/ProductImages";
import { useLayoutEffect } from "react";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Image section
export default function ImageSection({ products }: Props) {
    // Clear local storage
    useLayoutEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <section
            className="min-h-screen relative z-30 px-4 pb-40 -mt-0.5 bg-zinc-100 flex flex-col gap-20 items-center 
            rounded-b-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:rounded-b-[50px]"
        >
            {/* All images */}
            <motion.div
                initial={{ y: 40, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5
                md:gap-y-10"
            >
                <ProductImages products={products} />
            </motion.div>

            {/* More */}
            <More text="Back to home" href="/" />
        </section>
    );
}
