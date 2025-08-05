import { ReactNode } from "react";
import TitleSection from "./components/sections/TitleSection";
import path from "path";
import { promises as fs } from "fs";

// Interface for ProductItems
export interface IProduct {
    id: number;
    img: string;
    href: string;
    title: string;
    description: string;
}

// Fetch products
export const fetchProducts = async (): Promise<{
    products: IProduct[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "products",
            "data",
            "products.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read products:", err);
        return { products: [] };
    }
};

// Products layout
export default async function ProductsLayout({
    children,
}: {
    children: ReactNode;
}) {
    // Products
    const { products } = await fetchProducts();

    return (
        <div className="bg-[#292929]">
            <TitleSection products={products} />
            {children}
        </div>
    );
}
