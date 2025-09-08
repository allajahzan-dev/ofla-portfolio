import BASE_URL from "@/constants/baseUrl";

// Type for Category
export type TCategory =
    | "All"
    | "Leather Seating"
    | "Ergonomic Seating"
    | "Stools"
    | "Study"
    | "Cafeteria"
    | "Public Seating";

// Type for Sub category
export type TSubCategory =
    | "All"
    | "Executive"
    | "Task"
    | "Guest";

// Interface for ItemImage
export interface IItemImage {
    id: number;
    img: string[];
    title: string;
    description: string;
    category: TCategory;
    subCategory: TSubCategory;
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
