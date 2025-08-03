"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
    text: string;
    styles: {
        textColor: string;
        hoverTextColor: string;
        bgColor: string;
        hoverBgColor: string;
    };
}

// Navbar Items
export default function NavbarItems({ text, styles }: Props) {
    const pathname = usePathname();

    return (
        <div className="group flex flex-col gap-0.5 items-center cursor-pointer p-0 will-change-transform">
            {/* Text */}
            <p
                className={`text-sm font-bold ${styles.textColor} group-hover:${styles.hoverTextColor}`}
            >
                {text}
            </p>

            {/* Animated underline */}
            <div className="w-full h-[2px] relative overflow-hidden rounded-full">
                <span
                    className={cn(
                        `block h-full ${styles.bgColor} group-hover:${styles.hoverBgColor} transform scale-x-0 transition-transform duration-300 origin-left`,
                        (pathname.split("/")[1] === "" && text.toLowerCase() === "home") ||
                            pathname.split("/")[1] === text.toLowerCase()
                            ? "scale-x-100"
                            : "group-hover:scale-x-100"
                    )}
                />
            </div>
        </div>
    );
}
