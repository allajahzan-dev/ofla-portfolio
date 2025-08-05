import path from "path";
import { promises as fs } from "fs";

// Interface for processes
export interface IProcess {
    id: number;
    title: string;
    color: string;
}

// Fetch processess
export const fetchProcesses = async (): Promise<{
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