"use client";

import { Fragment, ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import ScrollSmoother from "./ScrollSmoother";
import { usePathname } from "next/navigation";

// Smooth wrapper
export default function SmoothWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <Fragment key={pathname}>
            {/* Mobile navbar */}
            <Navbar className="block md:hidden" />

            {/* Smooth wrapper */}
            <div id="smooth-wrapper" className="relative">
                <div id="smooth-content">
                    {/* Desktop navbar */}
                    <Navbar className="hidden md:block" />
                    {children}
                </div>
            </div>

            <ScrollSmoother key={pathname} />
        </Fragment>
    );
}
