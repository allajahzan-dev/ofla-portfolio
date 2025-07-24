import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import path from "path";
import { promises as fs } from "fs";
import ProcessAnimated from "@/components/animated/ProcessAnimated";
import HeadingAnimated from "@/components/animated/HeadingAnimated";

// Fetch processess
const fetchProcesses = async (): Promise<{
    processes: IProcess[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "data",
            "processes.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read proecesses:", err);
        return { processes: [] };
    }
};

// Interface for processes
interface IProcess {
    id: number;
    title: string;
    color: string;
}

// Process section
export default async function ProcessSection() {
    // Processess
    const { processes } = await fetchProcesses();

    return (
        <section
            className="h-min-screen relative z-20 bg-white flex flex-col gap-40 items-center 
            pt-[100px] -mt-0.5 rounded-[50px] will-change-transform overflow-hidden"
        >
            {/* Title */}
            <HeadingAnimated
                title={
                    <h1 className="transform-style-preserve-3d font-semibold text-[120px] text-center text-zinc-900 leading-[1]">
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
            />

            {/* Processess */}
            <div className="w-full flex flex-col -space-y-1">
                {processes.map((item) => (
                    <ProcessAnimated
                        key={item.id}
                        className={item.color}
                        title={<h1 className="text-5xl font-semibold">{item.title}</h1>}
                        number={
                            <p className={cn("text-7xl text-white", oswald.className)}>
                                0{item.id}
                            </p>
                        }
                    />
                ))}
            </div>
        </section>
    );
}
