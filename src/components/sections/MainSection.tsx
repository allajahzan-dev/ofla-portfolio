"use client";

import { useEffect } from "react";
import ScrollIndicator from "@/components/animated/ScrollIndicator";
import Navbar from "@/components/common/navbar/Navbar";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import HeroSection from "./HeroSection";
import InsightsSection from "./InsightsSection";
import ContactIndicator from "../animated/ContactIndicator";

const sections = ["hero-section", "insights-section"];

// Main Section
function MainSection() {
    // GSAP Animations
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Smooth scroll
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            smoothTouch: 0.1,
            effects: true,
        });

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
            {/* <ScrollIndicator sections={sections} /> */}
            <ContactIndicator />

            {/* Content */}
            <div id="smooth-content" className="min-h-screen">
                <Navbar />
                <HeroSection />
                <InsightsSection />
            </div>
        </div>
    );
}

export default MainSection;
