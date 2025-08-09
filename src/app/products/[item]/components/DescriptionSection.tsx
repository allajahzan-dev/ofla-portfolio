"use client";

import { IProduct } from "@/app/products/utils/fetchProducts";
import BulletPoint from "@/components/ui/pointer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Description section
export default function DescriptionSection({ products }: Props) {
    const pathname = usePathname();
    const title = pathname.split("/")[pathname.split("/").length - 1];

    return (
        <section
            className="min-h-screen w-full relative bg-zinc-100 flex flex-col items-center justify-end
        px-10 pt-20 py-40 rounded-[50px] will-change-transform overflow-hidden"
        >
            {/* Products */}
            <div className="w-full absolute top-10 px-10 flex items-center justify-between">
                {products.map((product, index) => (
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                        key={index}
                        href={`/products/${product.title.toLowerCase()}`}
                        className={cn(
                            "group text-lg font-semibold hover:text-orange-600 cursor-pointer",
                            "flex items-center gap-2 transform-gpu",
                            title === product.title.toLowerCase() && "text-orange-600"
                        )}
                    >
                        <BulletPoint className="group-hover:text-orange-600" />{" "}
                        {product.title}
                    </motion.a>
                ))}
            </div>

            {/* Description */}
            
        </section>
    );
}
