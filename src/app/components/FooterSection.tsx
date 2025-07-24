import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";

export default function FooterSection() {
  return (
    <section className=" relative z-20 bg-white flex flex-col gap-20 items-center 
    py-0 rounded-t-[0px] will-change-transform overflow-hidden">
      <Marquee
        speed={50}
        className="overflow-hidden p-0 bg-white text-[#171717]"
      >
        <h1 className={cn("text-[240px] font-semibold", oswald.className)}>
          SULTHAN — &nbsp;
        </h1>
      </Marquee>
    </section>
  );
}
