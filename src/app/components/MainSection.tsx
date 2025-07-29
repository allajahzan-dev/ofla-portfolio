import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import ProcessSection from "./ProcessSection";
import Navbar from "@/components/navbar/Navbar";

// Main Section
function MainSection() {
    // Scroll smoother Animations
    // useEffect(() => {
    // // Pin hero section after little scroll
    // ScrollTrigger.create({
    //     trigger: "#hero-section",
    //     start: "top+=100 top",
    //     end: "+=100%",
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //     scroller: smoother.wrapper(),
    //     // markers: true
    // });
    // }, []);

    return (
        <div id="smooth-content">
            <Navbar/>
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
        </div>
    );
}

export default MainSection;
