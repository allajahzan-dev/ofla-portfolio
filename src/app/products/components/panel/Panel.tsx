"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
    href: string;
    img: string;
    title: string;
    titleClassName?: string;
}

// Panel
export default function Panel({ href, img, title, titleClassName }: Props) {
    const pathname = usePathname();

    // Page navigator
    const navigator = usePageTransition();

    // Handle navigation
    const handleNavigation = (href: string) => {
        return (e: React.MouseEvent) => {
            if (pathname === href) {
                e.preventDefault();
                return;
            }

            navigator(href);
        };
    };

    return (
        <span
            onClick={handleNavigation(href)}
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="panel w-screen h-screen flex items-center justify-center cursor-pointer will-change-transform"
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
                        titleClassName
                    )}
                >
                    {title}
                </h1>
            </motion.div>
        </span>
    );
}
