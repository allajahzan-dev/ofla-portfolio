import ContactSection from "./ContactSection";
import { cn } from "@/lib/utils";
import { oswald } from "@/fonts/owald";

// Custom not found
export default function CustomNotFound() {
    return (
        <div className="bg-white">
            <div
                data-speed="0.1"
                style={{
                    backgroundImage: "url(/images/home/hero/hero-image.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-white text-[#171717] min-h-screen flex flex-col items-center justify-center"
            >
                {/* Shadow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/40" />

                {/* Not found content */}
                <div className="relative h-screen text-center flex flex-col justify-center">
                    <h1
                        className={cn(
                            "text-[160px] text-white/80 font-semibold tracking-wide",
                            "sm:text-[220px] md:text-[280px]",
                            oswald.className
                        )}
                    >
                        404
                    </h1>
                    <span
                        className={cn(
                            "text-xl text-white/80 font-semibold tracking-wide relative -top-5",
                            "md:text-2xl md:-top-10",
                            oswald.className
                        )}
                    >
                        PAGE NOT FOUND
                    </span>
                </div>+
            </div>

            {/* Contact section */}
            <div
                className="-mt-5
                md:mt-0"
            >
                <ContactSection />
            </div>
        </div>
    );
}
