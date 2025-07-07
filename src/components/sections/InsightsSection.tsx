import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useMemo } from "react";

// Insight Section
export default function InsightsSection() {
    // Users
    let users = useMemo(() => {
        return ["/user1.png", "/user2.png", "/user3.png", "/user4.png", ""];
    }, []);

    return (
        <section
            id="insights-section"
            className="min-h-screen relative bg-zinc-100 flex flex-col gap-10 items-center rounded-t-[50px] p-10 py-14 will-change-transform"
        >
            {/* Holder */}
            <div className="absolute top-5 left-[50%] -translate-x-1/2 w-40 h-3 bg-zinc-200 rounded-full" />

            {/* Title */}
            {/* <div className="w-full flex gap-5">
                <p className="text-2xl font-medium text-nowrap tracking-wider">
                   About Us
                </p>
            </div> */}

            {/* Small Details */}
            <div className="w-full grid grid-cols-3 gap-5 text-start items-start">
                {/* year */}
                <h1
                    className={cn(
                        "text-[190px] font-semibold relative -top-16 w-fit",
                        oswald.className
                    )}
                >
                    02 <span className="text-2xl relative -left-10">years</span>
                </h1>

                {/* Texts */}
                <div className="col-span-2 flex flex-col gap-8 p-2 px-1">
                    <p
                        className={cn(
                            "text-lg font-medium tracking-wide",
                            oswald.className
                        )}
                    >
                        NUJOOMU SULTHAN
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
                                            <img
                                                src={user}
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

                        <p className="font-semibold text-sm text-zinc-600 tracking-wider">
                            Trusted by professionals
                            <br />
                            {/* who value quality, comfort, and ergonomic design. */}
                        </p>

                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-4 h-4 text-orange-400 fill-orange-400"
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-4xl font-extrabold tracking-wide w-[85%]">
                        We specialize in premium office chairs, tables and ergonomic seating
                        featuring diverse models designed for every workspace need.
                    </p>
                </div>
            </div>

            {/* Insights content */}
            <div className="w-full grid grid-cols-3 gap-5">
                <div className="h-[460px] w-full bg-white rounded-3xl"></div>
                <div className="h-[460px] w-full bg-white rounded-3xl"></div>
                <div className="h-[460px] w-full bg-white rounded-3xl"></div>
            </div>
        </section>
    );
}
