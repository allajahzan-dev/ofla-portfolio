import ContactSection from "@/components/section/ContactSection";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";

// Not found page
export default function NotFound() {
    return (
        <div className="bg-white">
            <div
                data-speed="0.1"
                style={{
                    backgroundImage: "url(/images/home/hero/hero-image.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-white text-white min-h-screen flex flex-col items-center justify-center"
            >
                {/* Shadow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-transparent" />

                {/* Not found content */}
                <div className="relative h-screen text-center flex flex-col justify-center">
                    {/* <p className="w-full absolute top-40 left-1/2 -translate-x-1/2  text-lg text-center font-medium">
                        This page could not be found.
                    </p> */}
                    {/* <span
                        className={cn(
                            "absolute top-40 left-1/2 -translate-x-1/2 text-2xl text-white font-medium",
                            oswald.className
                        )}
                    >
                        PAGE NOT FOUND
                    </span> */}

                    <h1
                        className={cn(
                            "text-[280px] text-white/50 font-semibold tracking-wide",
                            oswald.className
                        )}
                    >
                        404 <span className="text-2xl relative right-20">PAGE NOT FOUND</span>
                    </h1>
                </div>
            </div>
            <ContactSection />
        </div>
    );
}
