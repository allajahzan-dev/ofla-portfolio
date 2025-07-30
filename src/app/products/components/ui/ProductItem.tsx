"use client";

import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    item: string;
    action: () => void;
    selectedItem: string;
}

// Product item
export default function ProductItem({ item, action, selectedItem }: Props) {
    return (
        <div onClick={action} className="group flex flex-col gap-0.5 items-center cursor-pointer p-0 will-change-transform">
            <p className={`cursor-pointer pointer-events-none`}>
                {item}
            </p>
            <div className="w-full h-[2px] relative overflow-hidden rounded-full bg-transparent">
                <span
                    className={cn(
                        `block h-full bg-[#171717] transform scale-x-0 transition-transform duration-300 origin-left`,
                        selectedItem === item.toLowerCase()
                            ? "scale-x-100"
                            : "group-hover:scale-x-100"
                    )}
                />
            </div>
        </div>
    );
}
