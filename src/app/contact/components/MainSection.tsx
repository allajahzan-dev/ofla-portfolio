import TitleSection from "@/components/common/TitleSection";
import ImageSection from "./ImageSection";
import ContactSection from "@/components/common/ContactSection";
import ContactInfoSection from "./ContactInfoSection";

// Main section
export default function MainSection() {
    return (
        <main className="bg-[#292929]">
            <TitleSection
                title="Contact"
                description="Contact us for quality office furniture solutions and professional workspace design services."
            />
            <ImageSection />
            <ContactInfoSection />
            <ContactSection />
        </main>
    );
}
