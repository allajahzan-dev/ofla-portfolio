import ImageSection from "./ImageSection";
import TitleSection from "@/components/common/TitleSection";
import ContactSection from "@/components/common/ContactSection";
import { fetchProducts } from "@/app/products/utils/fetchProducts";

// Main section
export default async function MainSection() {
    // Products
    const { products } = await fetchProducts();

    return (
        <main className="bg-[#292929]">
            <TitleSection
                title="Products"
                description="Quality chairs, tables, storage solutions, and office furniture
                designed for modern workspaces."
            />
            <ImageSection products={products} />
            <ContactSection />
        </main>
    );
}
