import ContactSection from "@/components/common/section/ContactSection";
import ImageSection from "./ImageSection";
import path from "path";
import { promises as fs } from "fs";

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
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "products",
            "[item]",
            "data",
            `${item}.json`
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.log("Failed to read item images:", err);
        return { itemImages: [] };
    }
};

// Interface for Props
interface Props {
    item: string;
}

// Main section
export default async function MainSection({ item }: Props) {
    // Item images
    const { itemImages } = await fetchItemImages(item);

    return (
        <main className="bg-[#292929]">
            <ImageSection item={item} itemImages={itemImages} />
            <ContactSection />
        </main>
    );
}
