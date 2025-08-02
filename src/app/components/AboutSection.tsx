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
            className="min-h-screen relative z-40 bg-zinc-100 flex flex-col gap-20 items-center 
        px-10 py-40 pt-20 rounded-[50px] will-change-transform"
        >
            {/* Holder */}
            <div className="absolute top-5 left-[50%] -translate-x-1/2 w-40 h-3 bg-zinc-200 rounded-full" />

            {/* Title */}
            {/* <div className="w-full flex gap-5 absolute left-10 top-10">
                <p className="text-2xl font-semibold text-nowrap tracking-wider">
                    About us
                </p>
            </div> */}

            {/* About us */}
            <aside className="w-full grid grid-cols-3 gap-5 text-start items-start">
                {/* year */}
                <h1
                    className={cn(
                        "text-[190px] font-semibold relative -top-16 w-fit",
                        oswald.className
                    )}
                >
                    02 <span className="text-2xl relative -left-10">Years</span>
                </h1>

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
                                            "border-[3px] border-white rounded-full w-12 h-12 overflow-hidden shadow",
                                            "relative",
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

                    <p className="text-4xl font-semibold w-[100%]">
                        We specialize in premium office chairs, tables and ergonomic seating
                        featuring diverse models designed for every workspace need.
                    </p>
                </div>
            </aside>

            {/* Contents */}
            <div className="w-full grid grid-cols-3 gap-5">
                {/* Left */}
                <article className="relative h-[460px] w-full p-12 bg-white flex flex-col gap-8 rounded-3xl overflow-hidden">
                    <h1 className="font-semibold text-2xl">
                        Premium workspace solutions
                        <br />
                        that drive productivity.
                    </h1>
                    <p className="text-lg font-medium text-zinc-600 tracking-tight">
                        We deliver exceptional office furniture,
                        <br />
                        ergonomic chairs, desks, tables, storage, and workstations, that
                        enhance workplace.
                        {/* performance and clients satisfaction. */}
                    </p>
                    <Image
                        src="/svgs/home/doubleQuote.svg"
                        alt="Doublt Quote"
                        height={1000}
                        width={1000}
                        className="w-80 absolute -bottom-16 -right-16"
                    />
                </article>

                {/* Center */}
                <article className="h-[460px] w-full p-12 bg-white flex flex-col justify-between rounded-3xl">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Fact 01</p>
                        <div className="p-3 bg-zinc-100 rounded-full">
                            <TrendingUp className="w-5 h-5 text-black" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className={cn("font-semibold text-8xl", oswald.className)}>
                            100+
                        </h1>

                        {/* <Counter className={`font-semibold text-8xl ${oswald.className}`} limit={100}/> */}
                        <p className="text-lg font-medium text-zinc-600 tracking-tight">
                            Satisfied clients with 99% on-time delivery and exceptional office
                            furniture experiences.
                        </p>
                    </div>
                </article>

                {/* Right */}
                <figure
                    style={{
                        backgroundImage: "url(/images/home/about/about-image1.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="h-[460px] w-full bg-white rounded-3xl overflow-hidden"
                >
                </figure>
            </div>
        </section>
    );
}
