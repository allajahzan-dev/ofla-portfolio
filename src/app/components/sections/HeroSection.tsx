import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";

// Hero Section
export default function HeroSection() {
    return (
        <section
            data-speed="0.1"
            style={{
                backgroundImage: "url(/images/home/hero/hero-image.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen relative -z-10 bg-white flex flex-col items-center justify-start px-10 will-change-transform"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/60" />

            {/* Header */}
            <header className="relative h-screen text-center flex flex-col justify-center">
                <p
                    className={cn(
                        "w-full absolute bottom-40 text-2xl text-white font-medium tracking-wide",
                        "flex items-center justify-center gap-5",
                        oswald.className
                    )}
                >
                    <span>OFFICE</span>
                    <span>LIFESTYLE</span>
                    <span>ARABIA</span>
                </p>

                <p
                    className={cn(
                        "text-[280px] text-white/80 font-semibold tracking-wide",
                        oswald.className
                    )}
                >
                    OFLA
                </p>
            </header>

            {/* Explore */}
            <footer className="w-[50%] absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5 items-center justify-between text-white font-medium text-nowrap tracking-wide">
                <p>Scroll down</p>
                <div className="bg-white w-full h-0.5 rounded-full" />
                <Mouse className="w-6 h-6 animate-bounce shrink-0" />
                <div className="bg-white w-full h-0.5 rounded-full" />
                <p>Explore more</p>
            </footer>
        </section>
    );
}
