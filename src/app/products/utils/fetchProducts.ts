import BASE_URL from "@/constants/baseUrl";

// Interface for ProductItems
export interface IProduct {
    id: number;
    img: string;
    href: string;
    title: string;
    description: string;
    overview: string;
    categories: string[];
}

// Fetch products
export const fetchProducts = async (): Promise<{
    products: IProduct[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/products/products.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read products:", err);
        return { products: [] };
    }
};
