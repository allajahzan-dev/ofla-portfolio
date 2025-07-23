import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import path from "path";
import { promises as fs } from "fs";
import ProcessAnimated from "@/components/animated/ProcessAnimated";

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
            className="h-fit relative z-20 bg-white flex flex-col gap-20 items-center 
            pt-10 -mt-0.5 rounded-b-[50px] will-change-transform overflow-hidden"
        >
            {/* Title */}
            <div className="flex flex-col gap-5 items-start">
                <h1 className="transform-style-preserve-3d font-semibold text-[120px] text-center text-zinc-900 leading-[1]">
                    Process
                </h1>

                <p className="text-xl text-start font-semibold text-zinc-600">
                    Let’s dive into the process. From first idea to final
                    <br />
                    launch, every step is clear and intentional.
                </p>
            </div>

            {/* Processess */}
            <div className="w-full flex flex-col -space-y-2">
                {processes.map((item) => (
                    <ProcessAnimated
                        key={item.id}
                        className={item.color}
                        title={<h1 className="text-5xl font-semibold">{item.title}</h1>}
                        number={
                            <p className={cn("text-8xl text-white", oswald.className)}>
                                0{item.id}
                            </p>
                        }
                    />
                ))}
            </div>
        </section>
    );
}
