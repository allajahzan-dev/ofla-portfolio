"use client";

import { useEffect } from "react";
import Navbar from "@/components/common/navbar/Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactIndicator from "../animated/ContactIndicator";
import ProductsSection from "./ProductsSection";
import { setupSmoother } from "@/lib/gsap/SetupSmoother";

// Main Section
function MainSection() {
    // Scroll smoother Animations
    useEffect(() => {
        setupSmoother();
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
    }, []);

    return (
        <div id="smooth-wrapper" className="w-full h-full">
            <ContactIndicator />

            {/* Sections */}
            <div id="smooth-content" className="min-h-screen">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ProductsSection />
            </div>
        </div>
    );
}

export default MainSection;
