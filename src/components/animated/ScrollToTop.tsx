"use client";

import { scrollSmoother } from "@/lib/gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

// Interface for Props
interface Props {
    element: string;
}

// Scroll to top
export default function ScrollToTop({ element }: Props) {
    const pathname = usePathname();

    useLayoutEffect(() => {
        scrollSmoother().scrollTo(element, true, "top top");
    }, [pathname]);

    return null;
}
