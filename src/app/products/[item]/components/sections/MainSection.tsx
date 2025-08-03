import ContactSection from "@/components/common/section/ContactSection";

// Interface for Props
interface Props {
    params: { item: string };
}

// Main section
export default function MainSection({ params }: Props) {
    return (
        <main>
            <section className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-8xl font-bold">{params.item.toUpperCase()}</h1>
            </section>
            <ContactSection/>
        </main>
    );
}
