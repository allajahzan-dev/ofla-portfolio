import ContactSection from "@/components/section/ContactSection";
import ImageSection from "./ImageSection";
import { fetchItemImages } from "../../utils/fetchItemImages";

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
