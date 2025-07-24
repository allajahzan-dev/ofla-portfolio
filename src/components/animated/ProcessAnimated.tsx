"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    className: string;
    title: ReactNode;
    number: ReactNode;
}

// Process animated
export default function ProcessAnimated({ title, number, className }: Props) {
    return (
        <motion.div
            // initial={{ opacity: 1, y: 0 }}
            // whileInView={{ opacity: 1, y : 0, }}
            // transition={{ duration: 0.3 }}
            className={cn("flex items-center justify-between px-10 pr-16", className)}
        >
            {title}
            {number}
        </motion.div>
    );
}
