import ContactSection from "@/components/common/ContactSection";
import TitleSection from "@/components/common/TitleSection";
import ImageSection from "./ImageSection";
import AboutSection from "./AboutSection";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { oswald } from "@/fonts/owald";
import Clients from "@/components/common/Clients";

// Main section
export default function MainSection() {
    return (
        <main className="bg-[#292929]">
            <TitleSection
                title="About us"
                description="We specialize in premium office furniture and ergonomic solutions."
            >
                <Clients
                    className="relative left-0 top-0 order-2 pl-1
                    md:order-1 md:top-10 xl:top-16"
                />
            </TitleSection>
            <ImageSection />
            <AboutSection />
            <ContactSection />
        </main>
    );
}
