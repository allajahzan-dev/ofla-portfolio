import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
    return (
        <Marquee speed={50} className="overflow-hidden p-0">
            <h1 className={cn("text-9xl font-semibold", oswald.className)}>NUJOOMU SULTHAN</h1>
        </Marquee>
    );
}
