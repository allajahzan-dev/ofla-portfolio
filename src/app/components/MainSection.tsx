import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import { Fragment } from "react";

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
            <AboutSection />
            <ProductsSection />
        </Fragment>
    );
}

export default MainSection;
