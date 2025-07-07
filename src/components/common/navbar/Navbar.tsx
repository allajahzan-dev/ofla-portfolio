"use client";

import { Mail } from "lucide-react";
import React from "react";
import NavbarItems from "./NavbarItems";

// Navbar
export default function Navbar() {
    return (
        <div
            className={`w-full px-10 text-white fixed top-0 z-50 transition-transform duration-[1.5s]`}
        >
            <div className="w-full h-20 flex items-center justify-between font-semibold text-sm">
                <p className="font-extrabold text-xl">LOGO</p>

                <div className="flex items-center gap-16 tracking-widest">
                    <NavbarItems text="HOME" />
                    <NavbarItems text="PRODUCTS" />
                    <NavbarItems text="INSIGHTS" />
                    <NavbarItems text="SERVICES" />
                </div>

                <div className="flex items-start gap-12 tracking-widest">
                    <NavbarItems text="(+91) 123456789" color="text-white" />
                    <Mail className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
