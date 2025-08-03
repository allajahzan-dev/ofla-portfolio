"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    href: string;
    img: string;
    heading: string;
    headingClassName?: string;
}

// Product item
export default function ProductsItem({ href, img, heading, headingClassName }: Props) {
    return (
        <Link
            href={href}
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="panel w-screen h-screen flex items-center justify-center will-change-transform"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ amount: 0.5 }}
            >
                <h1
                    className={cn(
                        "text-[160px] text-white font-bold tracking-wide transform-gpu",
                        headingClassName
                    )}
                >
                    {heading}
                </h1>
            </motion.div>
        </Link>
    );
}
