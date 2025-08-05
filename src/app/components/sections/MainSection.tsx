import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import FaqSection from "./FaqSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "@/components/section/ContactSection";

// Main section
function MainSection() {
    return (
        <main>
            <HeroSection />
            <section className="relative rounded-t-[50px] overflow-hidden">
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
            </section>
        </main>
    );
}

export default MainSection;
