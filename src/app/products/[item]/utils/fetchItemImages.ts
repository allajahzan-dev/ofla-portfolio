import BASE_URL from "@/constants/baseUrl";

// Interface for ItemImage
export interface IItemImage {
    id: number;
    img: string[];
    title: string;
    description: string;
    colors: string[];
    rating: string;
    materials: string[];
}

// Fetch item images
export const fetchItemImages = async (
    item: string
): Promise<{
    itemImages: IItemImage[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/item/${item}.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.log("Failed to read item images:", err);
        return { itemImages: [] };
    }
};
