import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

// About Section
export default function AboutSection() {
    // Users
    const users = useMemo(() => {
        return ["/user1.png", "/user2.png", "/user3.png", "/user4.png", ""];
    }, []);

    return (
        <section
            className="min-h-screen relative z-40 px-4 py-40 pt-20 bg-zinc-100 flex flex-col gap-20 items-center 
            rounded-[40px] will-change-transform
            md:px-5 xl:px-10 md:rounded-t-[50px]"
        >
            {/* Holder */}
            <div
                className="w-32 h-3 bg-zinc-200 absolute top-5 left-[50%] -translate-x-1/2 rounded-full
                md:w-40"
            />

            {/* Title */}
            {/* <div className="w-full flex gap-5 absolute left-10 top-10">
                <p className="text-2xl font-semibold text-nowrap tracking-wider">
                    About us
                </p>
            </div> */}

            {/* About us */}
            <aside className="w-full grid grid-cols-3 gap-5 text-start items-start">
                {/* year */}
                <div
                    className="relative -top-6 font-semibold flex items-center
                    sm:-top-8 md:-top-10 lg:-top-16"
                >
                    <h1
                        className={cn(
                            "w-fit text-[90px] text-nowrap",
                            oswald.className,
                            "sm:text-[100px] md:text-[136px] lg:text-[190px]"
                        )}
                    >
                        0-1
                    </h1>
                    {/* <span className="text-2xl relative md:top-14 lg:top-16">Years</span> */}
                </div>

                <div className="col-span-2 flex flex-col gap-8 p-2 px-1">
                    <p
                        className={cn(
                            "text-xl font-medium tracking-wide",
                            oswald.className
                        )}
                    >
                        OFLA <sup className="text-sm relative -top-[5px]">TM</sup>
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            {users.map((user, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "relative border-[3px] border-white rounded-full w-12 h-12 shadow shrink-0 overflow-hidden",
                                            index === 0 && "z-10",
                                            index === 1 && "-left-6 z-20",
                                            index === 2 && "-left-[52px] z-30",
                                            index === 3 && "-left-[78px] z-40",
                                            index === 4 && "-left-[105px] z-50"
                                        )}
                                    >
                                        {user ? (
                                            <Image
                                                width={100}
                                                height={100}
                                                src={`/images/home/about` + user}
                                                alt={`User${index}`}
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        ) : (
                                            <div className="bg-[#171717] h-full flex items-center justify-center">
                                                <p
                                                    className={cn(
                                                        "text-white text-lg font-semibold",
                                                        oswald.className
                                                    )}
                                                >
                                                    95+
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <p className="font-semibold text-base text-zinc-600">
                            Trusted by professionals
                            <br />
                            {/* who value quality, comfort, and ergonomic design. */}
                        </p>

                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-3 h-3 text-orange-400 fill-orange-400"
                                />
                            ))}
                        </div>
                    </div>

                    <p
                        className="w-full text-[22px] font-semibold leading-7
                        md:w-[90%] lg:w-[78%] xl:w-[60%] md:text-[28px] lg:text-4xl md:leading-8 lg:leading-10"
                    >
                        We specialize in premium office chairs, tables, lounges, and
                        ergonomic solutions for every workspace need.
                        {/* We specialize in premium office chairs, tables and ergonomic seating
                        featuring diverse models designed for every workspace need. */}
                    </p>
                </div>
            </aside>

            {/* Contents */}
            <div
                className="w-full grid grid-cols-1 gap-5
                md:grid-cols-2 lg:grid-cols-3"
            >
                {/* Left */}
                <article
                    className="order-1 relative h-auto w-full p-8 bg-white flex flex-col gap-8 rounded-3xl overflow-hidden
                    md:order-3 lg:order-1 md:h-[480px] md:p-12"
                >
                    <h1
                        className="font-semibold text-xl
                        md:text-2xl"
                    >
                        Premium workspace solutions that drive productivity.
                    </h1>
                    <p
                        className="relative z-10 w-[90%] text-base font-semibold text-zinc-600 leading-6
                        md:w-full lg:text-lg lg:font-medium"
                    >
                        They deliver exceptional premium office furniture, ergonomic chairs,
                        tables, lounges, and workstations, that enhance workplace.
                        {/* performance and clients satisfaction. */}
                    </p>
                    <Image
                        src="/svgs/home/doubleQuote.svg"
                        alt="Doublt Quote"
                        height={1000}
                        width={1000}
                        className="w-44 absolute z-0 -bottom-10 -right-6
                        md:w-88 md:-bottom-20 md:-right-16"
                    />
                </article>

                {/* Center */}
                <article
                    className="order-2 w-full h-auto p-8 bg-white flex flex-col justify-between gap-5 rounded-3xl
                    md:h-[480px] md:p-12"
                >
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Fact 01</p>
                        <div className="p-3 bg-zinc-100 rounded-full">
                            <TrendingUp className="w-5 h-5 text-black" />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-5 
                        md:gap-10"
                    >
                        <h1
                            className={cn(
                                "font-medium text-6xl",
                                oswald.className,
                                "md:text-[78px] lg:text-8xl"
                            )}
                        >
                            200+
                        </h1>

                        {/* <Counter className={`font-semibold text-8xl ${oswald.className}`} limit={100}/> */}
                        <p
                            className="text-base font-semibold text-zinc-600 leading-6
                            lg:text-lg lg:font-medium"
                        >
                            Satisfied clients with 99% on-time delivery and exceptional office
                            furniture experiences.
                        </p>
                    </div>
                </article>

                {/* Right */}
                <figure
                    style={{
                        backgroundImage: "url(/images/home/about/about-image.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="order-3 col-span-1 relative w-full h-[500px] bg-white rounded-3xl overflow-hidden
                    md:order-1 lg:order-3 md:col-span-2 lg:col-span-1 md:h-[480px]"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-black/60" />
                </figure>
            </div>
        </section>
    );
}
