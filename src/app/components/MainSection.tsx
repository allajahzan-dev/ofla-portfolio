import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import FaqSection from "./FaqSection";
import ContactSection from "@/components/common/section/ContactSection";
import ProcessSection from "./ProcessSection";

// Main Section
function MainSection() {
    return (
        <>
            <HeroSection />
            <div className="relative z-50 rounded-t-[50px] overflow-hidden">
                {/* Hard color stop background */}
                <div
                    className="absolute inset-0 z-[-1] 
                bg-[linear-gradient(to_bottom,_white_0%,_white_2%,_#292929_2%,_#292929_100%)]"
                />

                <AboutSection />
                <ProductsSection />
                <ServicesSection />
                <ProcessSection />
                <FaqSection />
                <ContactSection />
            </div>
        </>
    );
}

export default MainSection;
