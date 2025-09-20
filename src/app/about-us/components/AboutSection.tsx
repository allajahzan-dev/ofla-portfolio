import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

// About section
export default function AboutSection() {
    return (
        <section
            className="min-h-screen relative z-20 py-24 bg-zinc-100 flex flex-col gap-20
            rounded-b-[35px] will-change-transform overflow-hidden
            lg:pt-40 xl:gap-40 lg:rounded-b-[50px]"
        >
            <div
                className="flex flex-col gap-20 px-4 
                md:px-5 xl:px-10 xl:gap-40"
            >
                <div
                    className="w-full grid grid-cols-1 xl:grid-cols-3 gap-10
                    xl:gap-0"
                >
                    {/* Desctiption */}
                    <h1
                        className="w-[100%] text-2xl text-start font-semibold col-span-1 leading-6 
                        md:w-[80%] lg:w-[90%] xl:w-[85%] md:text-[28px] lg:text-4xl md:col-span-2 md:leading-7 lg:leading-9"
                    >
                        Welcome to OFLA Office Lifestyle Arabia, a leading destination for
                        luxury office furniture and workspace solutions with headquarters in
                        Dubai and operations extending to India. Since our establishment, we
                        have been dedicated to revolutionizing the corporate landscape
                        across the UAE and Indian markets by providing exceptional office
                        furniture that combines style, functionality, and comfort.
                    </h1>

                    {/* Mission */}
                    <div className="flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-5">
                            <span className="w-fit group flex items-center gap-2 cursor-pointer">
                                <ArrowDownRight className="w-5 h-5 text-orange-600" />
                                <div className="relative h-7 overflow-hidden text-lg font-semibold">
                                    <p className="group-hover:-translate-y-full transition-transform duration-300">
                                        Our mission
                                    </p>
                                    <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                                        Our mission
                                    </p>
                                </div>
                            </span>
                            <p
                                className="text-base font-semibold text-zinc-600 leading-5 tracking-tight
                                lg:text-lg lg:font-medium"
                            >
                                At OFLA, we believe that exceptional workspaces inspire
                                exceptional work. Our mission is to transform ordinary offices
                                into extraordinary environments through our carefully curated
                                collection of premium office furniture, modern workspace
                                solutions, and innovative design concepts that reflect the
                                dynamic business cultures of Dubai, the broader Middle East
                                region, and India&apos;s thriving corporate sector.
                            </p>
                        </div>

                        <p
                            className={cn(
                                "text-xl font-medium tracking-wide hidden xl:block",
                                oswald.className
                            )}
                        >
                            OFLA <sup className="text-sm relative -top-[5px]">TM</sup>
                        </p>
                    </div>
                </div>

                {/* Sustainability */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Designing a Better Future</h1>

                    <div
                        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-5
                        md:gap-y-10"
                    >
                        {[
                            "Eco-Friendly Materials",
                            "Green Parternership",
                            "Energy-Efficient Production",
                            "Longevity in Design",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="group flex flex-col w-full p-0 hover:bg-transparent transition-colors duration-300 rounded-4xl
                                lg:p-2 lg:hover:bg-white"
                            >
                                <div
                                    className="w-full h-[520px] rounded-3xl overflow-hidden cursor-pointer
                                    md:h-[500px] lg:h-[600px] xl:h-[400px]"
                                >
                                    <Image
                                        src={`/images/about-us/material${index + 1}.jpg`}
                                        alt={"/"}
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        priority
                                        className="h-full w-full object-cover object-bottom scale-105"
                                    />
                                </div>
                                <figcaption className="w-full flex gap-2 p-5 py-5 cursor-pointer will-change-transform">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <h1 className="text-lg font-semibold">{item}</h1>
                                    </div>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Points */}
            <div className="w-full">
                <div
                    className="group border-b border-zinc-200 py-5 grid grid-cols-1 gap-5 px-4
                    md:px-9 lg:px-10 lg:grid-cols-3"
                >
                    <h1
                        className="text-2xl font-semibold
                        lg:text-4xl"
                    >
                        Innovation
                    </h1>
                    <div className="col-span-2 flex items-center justify-between">
                        <p
                            className="w-[80%] text-base font-semibold text-zinc-600 leading-5 tracking-tight
                            md:w-[70%] xl:w-[50%] lg:text-lg lg:font-medium"
                        >
                            We push the boundaries of design with modular systems, smart
                            technology, and adaptable furniture that evolves with modern
                            workplaces.
                        </p>
                        <h1
                            className={cn(
                                oswald.className,
                                "text-2xl font-semibold text-zinc-400 group-hover:text-[#171717] transition-colors duration-300"
                            )}
                        >
                            01
                        </h1>
                    </div>
                </div>

                <div
                    className="group border-b border-zinc-200 py-5 grid grid-cols-1 gap-5 px-4
                    md:px-9 lg:px-10 lg:grid-cols-3"
                >
                    <h1
                        className="text-2xl font-semibold
                        lg:text-4xl"
                    >
                        Comfortness
                    </h1>
                    <div className="col-span-2 flex items-center justify-between">
                        <p
                            className="w-[80%] text-base font-semibold text-zinc-600 leading-5 tracking-tight
                            md:w-[70%] xl:w-[50%] lg:text-lg lg:font-medium"
                        >
                            Ergonomics at the core of every design. Each chair, desk, and
                            module is crafted to support the body, ensuring well-being during
                            long hours.
                        </p>
                        <h1
                            className={cn(
                                oswald.className,
                                "text-2xl font-semibold text-zinc-400 group-hover:text-[#171717] transition-colors duration-300"
                            )}
                        >
                            02
                        </h1>
                    </div>
                </div>

                <div
                    className="group py-5 grid grid-cols-1 gap-5 px-4
                    md:px-9 lg:px-10 lg:grid-cols-3"
                >
                    <h1
                        className="text-2xl font-semibold
                        lg:text-4xl"
                    >
                        Sustainability
                    </h1>
                    <div className="col-span-2 flex items-start justify-between">
                        <p
                            className="w-[80%] text-base font-semibold text-zinc-600 leading-5 tracking-tight
                            md:w-[70%] xl:w-[50%] lg:text-lg lg:font-medium"
                        >
                            From eco-friendly materials to timeless craftsmanship, we design
                            with the future in mind building furniture that lasts while caring
                            for the environment.
                        </p>
                        <h1
                            className={cn(
                                oswald.className,
                                "text-2xl font-semibold text-zinc-400 group-hover:text-[#171717] transition-colors duration-300"
                            )}
                        >
                            03
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
