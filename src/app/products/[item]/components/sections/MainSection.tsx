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

    // Product
    const { products } = await fetchProducts();
    const product = products.find(
        (product) => product.title.toLowerCase() === item.split("-").join(" ")
    );

    return (
        <main>
            <TitleSection products={products} />
            <div className="relative rounded-t-[50px] overflow-hidden">
                <div
                    className="absolute inset-0 z-0 
                bg-[linear-gradient(to_bottom,_white_0%,_white_3%,_#292929_2%,_#292929_100%)]"
                />

                <OverviewSection products={products} />
                <ImageSection item={item} product={product} itemImages={itemImages} />
                <ContactSection />
            </div>
        </main>
    );
}
