import { BASE_URL } from "@/constants/baseUrl";

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
        const resp = await fetch(`${BASE_URL}/data/home/services.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};