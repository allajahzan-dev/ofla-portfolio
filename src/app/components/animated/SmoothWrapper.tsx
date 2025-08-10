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
            <div id="smooth-wrapper" className="relative">
                <div id="smooth-content">
                    <Navbar />
                    {children}
                </div>
            </div>

            <ScrollSmoother key={pathname} />
        </Fragment>
    );
}
