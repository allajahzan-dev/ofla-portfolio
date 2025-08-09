import ContactSection from "@/components/common/ContactSection";
import { fetchItemImages } from "../../utils/fetchItemImages";
import DetailsSection from "./DetailsSection";

// Interface for Props
interface Props {
    item: string;
    id: string;
}

// Main section
export default async function MainSection({ item, id }: Props) {
    // Item images
    const { itemImages } = await fetchItemImages(item);
    const itemImage = itemImages.find(
        (itemImage) => itemImage.id === parseInt(id)
    );

    return (
        <main className="bg-[#292929]">
            <DetailsSection itemImage={itemImage} />
            <ContactSection/>
        </main>
    );
}
