import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import { Fragment } from "react";
import ServicesSection from "./ServicesSection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import ReviewSection from "./ReviewSection";
import ProcessSection from "./ProcessSection";

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
        <Fragment>
            <HeroSection />
            <div className="relative z-50 bg-[#292929] rounded-t-[50px]">
                <AboutSection />
                <ProductsSection />
                <ServicesSection />
                {/* <ReviewSection /> */}
                <FaqSection />
                <ProcessSection/>
                <ContactSection />
            </div>
        </Fragment>
    );
}

export default MainSection;
