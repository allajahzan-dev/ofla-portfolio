"use client";

import React, { useLayoutEffect, useState } from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const [color, setColor] = useState<string>("zinc-100");
    const [hoverColor, setHoverColor] = useState<string>("white");

    useLayoutEffect(() => {
        applyColorByPath(pathname);
    }, [pathname]);

    // Apply color by path
    const applyColorByPath = (path: string) => {
        const navItem = path.split("/")[1];

        switch (navItem) {
            case "products":
                setColor("[#171717]");
                setHoverColor("black");
                break;
            default:
                setColor("zinc-100");
                setHoverColor("white");
        }
    };

    return (
        <nav
            className={`w-full px-10 text-white fixed top-0 z-50 will-change-transform`}
        >
            <div className="w-full h-20 flex items-center justify-between font-semibold text-sm">
                <p className={`font-extrabold text-xl text-${hoverColor}`}>LOGO</p>

                <div className="flex items-center gap-16 tracking-widest">
                    <Link href="/">
                        <NavbarItems text="HOME" color={color} hoverColor={hoverColor} />
                    </Link>
                    <Link href="/about-us">
                        <NavbarItems
                            text="ABOUT US"
                            color={color}
                            hoverColor={hoverColor}
                        />
                    </Link>
                    <Link href="/products">
                        <NavbarItems
                            text="PRODUCTS"
                            color={color}
                            hoverColor={hoverColor}
                        />
                    </Link>
                    <Link href="/careers">
                        <NavbarItems text="CAREERS" color={color} hoverColor={hoverColor} />
                    </Link>
                </div>

                <div className="flex items-start gap-12 tracking-widest">
                    <NavbarItems
                        text="(+91) 123456789"
                        color={color}
                        hoverColor={hoverColor}
                    />
                </div>
            </div>
        </nav>
    );
}
