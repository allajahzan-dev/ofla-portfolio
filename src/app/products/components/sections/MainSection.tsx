import ProductsSection from "./ProductsSection";
import ListsSection from "./ListsSection";
import ContactSection from "@/components/common/section/ContactSection";

// MainSection
export default function MainSection() {
    return (
        <>
            <ProductsSection />
            <div className="relative z-50 -mt-24 rounded-t-[50px] overflow-hidden">
                {/* Hard color stop background */}
                <div
                    className="absolute inset-0 z-[-1] 
                bg-[linear-gradient(to_bottom,_white_0%,_white_4%,_#292929_2%,_#292929_100%)]"
                />

                <ListsSection />
                <ContactSection />
            </div>
        </>
    );
}
