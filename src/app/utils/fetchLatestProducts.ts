import { BASE_URL } from "@/constants/baseUrl";

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
        const resp = await fetch(`${BASE_URL}/data/home/latestProducts.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read lastest products:", err);
        return { latestProducts: [] };
    }
};
