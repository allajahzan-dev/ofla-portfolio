import path from "path";
import { promises as fs } from "fs";

// Interface for LatestProduct
export interface ILatestProduct {
    id: number;
    img: string;
    title: string;
    description1: string;
    description2: string;
}

// Fetch latest products
export const fetchLatestProducts = async (): Promise<{
    latestProducts: ILatestProduct[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "data",
            "latestProducts.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read lastest products:", err);
        return { latestProducts: [] };
    }
};