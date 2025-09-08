"use client";

import BulletPoint from "@/components/ui/pointer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Interface for Props
interface Props {
    text: string;
    href?: string;
    action?: () => void;
}

// More
export default function More({ href, text }: Props) {
    return (
        <div
            className="w-full px-4 py-10 absolute bottom-0 flex items-center gap-3 col-span-1
            md:px-10 md:gap-10 md:col-span-2"
        >
            <BulletPoint />
            <div
                className="bg-zinc-200 w-24 h-[1.6px] rounded-full flex-1
                md:h-0.5"
            />
            <Link
                href={href || "/"}
                className="group flex items-center gap-2 cursor-pointer"
            >
                <ArrowUpRight
                    className="w-5 h-5 text-orange-600
                    md:w-7 md:h-7"
                />
                <div
                    className="relative h-8 text-lg font-semibold overflow-hidden
                    md:text-2xl"
                >
                    <p className="group-hover:-translate-y-full transition-transform duration-300">
                        {text}
                    </p>
                    <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                        {text}
                    </p>
                </div>
            </Link>
        </div>
    );
}
