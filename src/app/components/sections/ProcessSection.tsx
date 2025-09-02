import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import RevealHeading from "@/components/animated/RevealHeading";
import { fetchProcesses } from "@/app/utils/fetchProcesses";

// Process section
export default async function ProcessSection() {
    // Processess
    const { processes } = await fetchProcesses();

    return (
        <section
            className="min-h-screen relative z-20 pt-24 bg-white flex flex-col items-center justify-between
            mt-0.5 rounded-[35px] will-change-transform overflow-hidden
            xl:pt-40 xl:rounded-[50px]"
        >
            {/* Title */}
            <RevealHeading
                title={
                    <h1
                        className="font-bold text-[72px] text-center leading-[1]
                        md:text-[82px] lg:text-[120px]"
                    >
                        Process
                    </h1>
                }
                subTitle={
                    <p
                        className="text-base text-center font-bold text-zinc-600 leading-5 tracking-tight
                        md:text-xl md:font-semibold md:leading-6"
                    >
                        Let’s dive into the process. From first idea to final
                        <br />
                        launch, every step is clear and intentional.
                    </p>
                }
                className="flex flex-col gap-5 items-center"
                sectionType="process"
            />

            {/* Processess */}
            <div className="w-full flex flex-col -space-y-1">
                {processes.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "flex items-center justify-between px-4 pr-4",
                            item.color,
                            "md:px-10 md:pr-16"
                        )}
                    >
                        <h1
                            className="text-3xl font-semibold
                            md:text-[38px] lg:text-5xl"
                        >
                            {item.title}
                        </h1>
                        <p
                            className={cn(
                                "text-6xl text-white",
                                oswald.className,
                                "md:text-7xl"
                            )}
                        >
                            0{item.id}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
