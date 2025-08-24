import TitleSection from "./TitleSection";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import ContactSection from "@/components/common/ContactSection";
import {
    fetchItemImages,
    IItemImage,
} from "@/app/products/[item]/utils/fetchItemImages";

// Interface for Props
interface Props {
    item: string;
    id: string;
}

// Main section
export default async function MainSection({ item, id }: Props) {
    // Item image
    const { itemImages } = await fetchItemImages(item);
    const itemImage = itemImages.find(
        (itemImage) => itemImage.id === parseInt(id)
    );

    return (
        <main className="bg-[#292929]">
            <TitleSection itemImage={itemImage as IItemImage} />
            <ImageSection itemImage={itemImage as IItemImage} />
            <DetailsSection
                itemImages={itemImages}
                itemImage={itemImage as IItemImage}
            />
            <ContactSection />
        </main>
    );
}
