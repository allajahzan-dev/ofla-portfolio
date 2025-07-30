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
            className="min-h-screen relative bg-white flex flex-col items-center justify-start px-10 will-change-transform"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-transparent" />

            {/* Hero content */}
            <div className="relative h-screen z-10 text-center flex flex-col justify-center">
                {/* Left side */}
                {/* <div className="hidden relative -top-12 flex flex-col gap-8 items-start justify-center">
                
                    <div className="w-full flex items-center gap-5">
                        <div className="bg-white w-24 h-0.5 rounded-full" />
                        <p
                        className={cn(
                            "text-lg font-medium tracking-wide",
                            oswald.className
                        )}
                    >
                        SULTHAN <sup className="text-xs relative -top-[5px]">TM</sup>
                    </p>
                    </div>
               
                    <h1 className={cn("text-6xl font-extrabold tracking-wide")}>
                        Where comfort meets productivity, every seat tells
                        a success story.
                    </h1>

                    <p className="text-xl font-medium w-[80%]">
                        Experience the perfect fusion of innovative design, premium
                        craftsmanship, and all day comfort.
                    </p>
                </div> */}

                {/*  */}
                <p className="w-full absolute top-40 left-1/2 -translate-x-1/2  text-lg text-white text-center font-medium">
                    Experience the perfect fusion of innovative design,
                    <br /> premium craftsmanship, and all day comfort.
                </p>

                <p
                    className={cn(
                        "text-[280px] text-white/50 font-semibold tracking-wide",
                        oswald.className
                    )}
                >
                    SULTHAN
                </p>
                
            </div>

            {/* Explore */}
            <div className="w-[50%] absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-5 items-center justify-between text-white font-medium text-nowrap tracking-wide">
                <p>Scroll down</p>
                <div className="bg-white w-full h-0.5 rounded-full" />
                <Mouse className="w-6 h-6 animate-bounce duration-500 shrink-0" />
                <div className="bg-white w-full h-0.5 rounded-full" />
                <p>Explore more</p>
            </div>
        </section>
    );
}
