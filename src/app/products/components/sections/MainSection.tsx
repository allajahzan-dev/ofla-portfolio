import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import ProductsSection from "./ProductsSection";
import ListsSection from "./ListsSection";

// MainSection
export default function MainSection() {
    return (
        <div id="smooth-content">
            <Navbar color="[#171717]" hoverColor="black" />
            <ProductsSection />
            <div className="relative z-50 -mt-24 overflow-hidden">
                {/* Hard color stop background */}
                <div
                    className="absolute inset-0 z-[-1] 
                bg-[linear-gradient(to_bottom,_white_0%,_white_4%,_#292929_2%,_#292929_100%)]"
                />

                <ListsSection/>
                <ContactSection />
            </div>
        </div>
    );
}
