import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";
import ContactSection from "@/components/common/ContactSection";
import { fetchProducts } from "@/app/products/utils/fetchProducts";

// Main section
export default async function MainSection() {
    // Products
    const { products } = await fetchProducts();

    return (
        <main className="bg-[#292929]">
            <TitleSection products={products} />
            <ImageSection products={products} />
            <ContactSection />
        </main>
    );
}
