import React from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";

// Interface for Props
interface Props {
    color?: string;
    hoverColor?: string;
}

// Navbar
export default function Navbar({ color, hoverColor }: Props) {
    return (
        <div
            className={`w-full px-10 text-white fixed top-0 z-50 will-change-transform`}
        >
            <div className="w-full h-20 flex items-center justify-between font-semibold text-sm">
                <p className={`font-extrabold text-xl text-${hoverColor}`}>LOGO</p>

                <div className="flex items-center gap-16 tracking-widest">
                    <Link href={"/"}>
                        <NavbarItems text="HOME" color={color} hoverColor={hoverColor} />
                    </Link>
                    <Link href={"/about-us"}>
                        <NavbarItems
                            text="ABOUT US"
                            color={color}
                            hoverColor={hoverColor}
                        />
                    </Link>
                    <Link href={"/products"}>
                        <NavbarItems
                            text="PRODUCTS"
                            color={color}
                            hoverColor={hoverColor}
                        />
                    </Link>
                    <Link href={"/careers"}>
                        <NavbarItems text="CAREERS" color={color} hoverColor={hoverColor} />
                    </Link>
                </div>

                <div className="flex items-start gap-12 tracking-widest">
                    <NavbarItems text="(+91) 123456789" color={color} hoverColor={hoverColor} />
                    {/* <Mail className="w-5 h-5" /> */}
                </div>
            </div>
        </div>
    );
}
