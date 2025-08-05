import HeadingSection from "./HeadingSection";
import ContactSection from "@/components/common/section/ContactSection";
import { fetchProducts } from "../../layout";

// Main section
export default async function MainSection() {
    // Products
    const { products } = await fetchProducts();

    return (
        <main className="bg-[#292929]">
            <HeadingSection products={products} />
            <ContactSection />
        </main>
    );
}
