"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarItems from "./NavbarItems";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/hooks/usePageTransition";

export default function Navbar() {
    const pathname = usePathname();

    // Color state
    const [styles, setStyles] = useState({
        textColor: "text-transparent",
        hoverTextColor: "text-transparent",
        bgColor: "bg-transparent",
        hoverBgColor: "bg-transparent",
    });

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

    // Set style
    useLayoutEffect(() => {
        const route = pathname;

        if (
            route === "/products" ||
            route === "/about-us" ||
            route === "/contact" ||
            /^\/products\/[^/]+\/[^/]+$/.test(route)
        ) {
            setStyles({
                textColor: "text-[#171717]",
                hoverTextColor: "text-black",
                bgColor: "bg-[#171717]",
                hoverBgColor: "bg-black",
            });
        } else {
            setStyles({
                textColor: "text-zinc-100",
                hoverTextColor: "text-white",
                bgColor: "bg-zinc-100",
                hoverBgColor: "bg-white",
            });
        }
    }, [pathname]);

    return (
        <div
            className={cn(
                "w-full px-10 fixed z-[100] top-0 will-change-transform",
                // /^\/products\/[^/]+\/[^/]+$/.test(pathname) ? "hidden" : "block"
            )}
        >
            <div
                className={`w-full h-20 flex items-center justify-between font-semibold text-sm ${styles.textColor}`}
            >
                {/* Logo */}
                <p
                    className={cn(
                        "font-medium text-xl tracking-wide",
                        styles.hoverTextColor,
                        oswald.className
                    )}
                >
                    <span onClick={handleNavigation("/")}>
                        OFLA <sup className="text-sm relative -top-[5px]">TM</sup>
                    </span>
                </p>

                {/* Nav Links */}
                <div className="flex items-center gap-16 tracking-widest">
                    <Link href={"/"}>
                        <NavbarItems text="HOME" styles={styles} />
                    </Link>
                    <Link href="/about-us">
                        <NavbarItems text="ABOUT US" styles={styles} />
                    </Link>
                    <Link href={"/products"}>
                        <NavbarItems text="PRODUCTS" styles={styles} />
                    </Link>
                    <Link href="/contact">
                        <NavbarItems text="CONTACT" styles={styles} />
                    </Link>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-12 tracking-widest">
                    <NavbarItems text="CALL" styles={styles} />
                </div>
            </div>
        </div>
    );
}
