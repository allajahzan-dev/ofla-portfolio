"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
  text: string;
  color?: string;
  hoverColor?: string;
}

// Navbar Items
export default function NavbarItems({ text, color, hoverColor }: Props) {
  const pathname = usePathname();

  console.log(pathname.split("/")[1]);

  return (
    <div className="group flex flex-col gap-0.5 items-center cursor-pointer p-0 will-change-transform">
      {/* Text */}
      <p
        className={`text-sm font-bold ${color ? `text-${color}` : "text-zinc-100"
          } group-hover:${hoverColor ? `text-${hoverColor}` : "text-white"
          } transition-colors duration-100`}
      >
        {text}
      </p>

      {/* Animated underline */}
      <div className="w-full h-[2px] relative overflow-hidden rounded-full bg-transparent">
        <span
          className={cn(
            `block h-full bg-${hoverColor || "white"} transform scale-x-0 transition-transform duration-300 origin-left`,
            (pathname.split("/")[1] === "" && text.toLowerCase() === "home") ||
              pathname.split("/")[1] === text.toLowerCase()
              ? "scale-x-100"
              : "group-hover:scale-x-100"
          )}
        />
      </div>
    </div>
  );
}
