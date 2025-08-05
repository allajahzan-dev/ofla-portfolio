import HeadingSection from "./HeadingSection";
import ContactSection from "@/components/common/ContactSection";

// Main section
export default async function MainSection() {
    return (
        <main className="bg-[#292929]">
            <HeadingSection/>
            <ContactSection />
        </main>
    );
}
