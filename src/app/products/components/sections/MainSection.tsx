import HeadingSection from "./HeadingSection";
import ContactSection from "@/components/common/section/ContactSection";
import path from "path";
import { promises as fs } from "fs";

// Fetch product items
const fetchProductItems = async (): Promise<{
    productItems: IProductItem[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "products",
            "data",
            "productItems.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read lastest products:", err);
        return { productItems: [] };
    }
};

// Interface for ProductItems
export interface IProductItem {
    id: number;
    img: string;
    href: string;
    heading: string;
}

// Main section
export default async function MainSection() {
    // Product items
    const { productItems } = await fetchProductItems();
    
    return (
        <main className="bg-[#292929]">
            <HeadingSection productItems={productItems} />
            <ContactSection />
        </main>
    );
}
