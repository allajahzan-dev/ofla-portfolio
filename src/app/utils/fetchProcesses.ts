import BASE_URL from "@/constants/baseUrl";

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
        const resp = await fetch(`${BASE_URL}/data/home/processes.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read proecesses:", err);
        return { processes: [] };
    }
};