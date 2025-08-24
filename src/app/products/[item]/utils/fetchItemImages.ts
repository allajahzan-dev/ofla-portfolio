import BASE_URL from "@/constants/baseUrl";

// Type for category
export type TCategory =
    | "All"
    | "Executive"
    | "Public"
    | "Cafeteria"
    | "Stools"
    | "Outdoor";

// Interface for ItemImage
export interface IItemImage {
    id: number;
    img: string[];
    title: string;
    category: TCategory;
    points: string[];
    keyFeatures: string[];
    materialSpecification: string[];
    relatedItems: number[];
    colors: string[];
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
