import ContactSection from "@/components/common/ContactSection";
import TitleSection from "@/components/common/TitleSection";

// Main section
export default function MainSection() {
    return (
        <main className="bg-[#292929]">
            <TitleSection
                title="About us"
                description="We specialize in premium office furniture and ergonomic solutions designed for every business need."
            />
            <ContactSection />
        </main>
    );
}
