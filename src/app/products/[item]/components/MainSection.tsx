import TitleSection from "./TitleSection";
import OverviewSection from "./OverviewSection";
import ImageSection from "./ImageSection";
import ContactSection from "@/components/common/ContactSection";
import { fetchItemImages } from "@/app/products/[item]/utils/fetchItemImages";
import { fetchProducts } from "@/app/products/utils/fetchProducts";

// Interface for Props
interface Props {
    item: string;
}

// Main section
export default async function MainSection({ item }: Props) {
    // Item images
    const { itemImages } = await fetchItemImages(item);

    // Products
    const { products } = await fetchProducts();

    return (
        <main>
            <TitleSection products={products} />
            <div className="bg-[#292929] relative rounded-t-[50px]">
                <div
                    className="absolute inset-0 z-[-1] 
                bg-[linear-gradient(to_bottom,_white_0%,_white_2%,_#292929_2%,_#292929_100%)]"
                />

                <OverviewSection products={products} />
                <ImageSection item={item} itemImages={itemImages} />
                <ContactSection />
            </div>
        </main>
    );
}
