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
                        "text-[160px] text-white/80 font-semibold tracking-wide",
                        "sm:text-[220px] md:text-[280px]",
                        oswald.className
                    )}
                >
                    OFLA
                </p>

                <p
                    className={cn(
                        "w-full relative -top-6 text-lg text-white font-medium tracking-wide",
                        "flex items-center justify-center gap-3",
                        "sm:text-xl md:text-2xl sm:-top-8 md:-top-10",
                        oswald.className
                    )}
                >
                    <span>Office</span>
                    <span>Lifestyle</span>
                    <span>Arabia</span>
                </p>
            </header>

            {/* Explore */}
            <footer
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden gap-5 items-center justify-between text-sm text-white font-medium text-nowrap tracking-wide
                w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] sm:text-base md:flex"
            >
                <p>Scroll</p>
                <div className="bg-white w-full h-0.5 rounded-full" />
                <Mouse className="w-5 h-5 animate-bounce shrink-0" />
                <div className="bg-white w-full h-0.5 rounded-full" />
                <p>Explore</p>
            </footer>

            <div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white flex flex-col items-center animate-pulse
            md:hidden"
            >
                <p className="text-base font-semibold">Scroll Down</p>
            </div>
        </section>
    );
}
