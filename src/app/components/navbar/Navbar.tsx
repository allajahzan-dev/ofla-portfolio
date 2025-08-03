"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
    const pathname = usePathname();

    // Color state
    const [styles, setStyles] = useState({
        textColor: "text-transparent",
        hoverTextColor: "text-transparent",
        bgColor: "bg-transparent",
        hoverBgColor: "bg-transparent",
    });

    useLayoutEffect(() => {
        const navItem = pathname.split("/")[1];

        switch (navItem) {
            case "products":
                setStyles({
                    textColor: "text-[#171717]",
                    hoverTextColor: "text-black",
                    bgColor: "bg-[#171717]",
                    hoverBgColor: "bg-black",
                });
                break;
            default:
                setStyles({
                    textColor: "text-zinc-100",
                    hoverTextColor: "text-white",
                    bgColor: "bg-zinc-100",
                    hoverBgColor: "bg-white",
                });
                break;
        }
    }, [pathname]);

    return (
        <div
        className="w-full px-10 fixed top-0 z-[1000] will-change-transform">
            <div
                className={`w-full h-20 flex items-center justify-between font-semibold text-sm ${styles.textColor}`}
            >
                {/* Logo */}
                <p className={`font-extrabold text-xl ${styles.hoverTextColor}`}>
                    LOGO
                </p>

                {/* Nav Links */}
                <div className="flex items-center gap-16 tracking-widest">
                    <Link href="/">
                        <NavbarItems text="HOME" styles={styles} />
                    </Link>
                    <Link href="/about-us">
                        <NavbarItems text="ABOUT US" styles={styles} />
                    </Link>
                    <Link href="/products">
                        <NavbarItems text="PRODUCTS" styles={styles} />
                    </Link>
                    <Link href="/careers">
                        <NavbarItems text="CAREERS" styles={styles} />
                    </Link>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-12 tracking-widest">
                    <NavbarItems text="(+91) 123456789" styles={styles} />
                </div>
            </div>
        </div>
    );
}
