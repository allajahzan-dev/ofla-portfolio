import TitleSection from "@/components/common/TitleSection";
import ImageSection from "./ImageSection";
import ContactSection from "@/components/common/ContactSection";

// Main section
export default function MainSection() {
    return (
        <main className="bg-[#292929]">
            <TitleSection
                title="Contact"
                description="Contact us for quality office furniture solutions and professional workspace design services."
            />
            <ImageSection />
            <section className="min-h-screen relative z-10 bg-white rounded-[50px]"></section>
            <ContactSection />
        </main>
    );
}
