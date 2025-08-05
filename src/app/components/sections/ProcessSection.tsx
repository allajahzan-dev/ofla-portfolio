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
            className="h-min-screen relative z-20 bg-white flex flex-col gap-36 items-center 
            pt-[120px] -mt-0.5 rounded-[50px] will-change-transform overflow-hidden"
        >
            {/* Title */}
            <RevealHeading
                title={
                    <h1 className="font-bold text-[120px] text-center leading-[1]">
                        Process
                    </h1>
                }
                subTitle={
                    <p className="text-xl text-center font-semibold text-zinc-600">
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
                            "flex items-center justify-between px-10 pr-16",
                            item.color
                        )}
                    >
                        <h1 className="text-5xl font-semibold">{item.title}</h1>
                        <p className={cn("text-7xl text-white", oswald.className)}>
                            0{item.id}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
