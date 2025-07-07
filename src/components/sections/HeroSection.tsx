import { Mouse } from "lucide-react";

// Hero Section
export default function HeroSection() {
    return (
        <section
            id="hero-section"
            data-speed="0.1"
            style={{
                backgroundImage: "url(/bg-bg-new.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen relative text-white flex flex-col items-center justify-start px-10 will-change-transform"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/10 to-black/30" />

            {/* Cuttout */}
            <img className="absolute bottom-[51px] -right-[84px] w-[calc(100%-280px)]" src="/bg-bg.png" alt="" />

            {/* Hero content */}
            <div className="h-[calc(100vh-70px)] relative -top-5 z-10 grid grid-cols-2">
                {/* Left side */}
                <div className="flex flex-col gap-8 items-start justify-center">
                    {/* Line */}
                    <div className="w-full flex items-center gap-5">
                        <div className="bg-white w-24 h-0.5 rounded-full" />
                        <p className="text-base font-medium text-nowrap tracking-wider">
                            NUJOOMU SULTHAN
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-6xl font-extrabold tracking-wide">
                        Where comfort meets productivity, every seat tells
                        <span className="italic font-serif"> a success</span> story.
                    </h1>

                    {/* Sub title */}
                    <p className="text-xl font-medium w-[80%]">
                        Experience the perfect fusion of innovative design, premium
                        craftsmanship, and all day comfort.
                    </p>
                </div>

                {/* Right side */}
                <div></div>
            </div>

            {/* Explore */}
            <div className="w-[50%] relative z-10 flex gap-5 items-center justify-between font-medium text-nowrap tracking-wide">
                <p>Scroll down</p>
                <div className="bg-white w-full h-0.5 rounded-full" />
                <Mouse className="w-6 h-6 animate-bounce duration-500 shrink-0" />
                <div className="bg-white w-full h-0.5 rounded-full" />
                <p>Explore more</p>
            </div>
        </section>
    );
}
