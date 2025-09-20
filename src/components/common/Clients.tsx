import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

// Interface for Props
interface Props{
    className?: string;
}

// Clients
export default function Clients({ className }: Props) {
    // Users
    const users = useMemo(() => {
        return ["/user1.png", "/user2.png", "/user3.png", "/user4.png", ""];
    }, []);

    return (
        <div
            className={cn("flex flex-col gap-2", className)}>
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
    );
}
