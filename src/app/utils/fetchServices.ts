import path from "path";
import { promises as fs } from "fs";

// Interface for servie
export interface IService {
    id: number;
    title: string;
    points: string[];
}

// Fetch services
export const fetchServices = async (): Promise<{
    services: IService[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "data",
            "services.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};