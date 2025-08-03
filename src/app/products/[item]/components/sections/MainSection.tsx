import ContactSection from "@/components/common/section/ContactSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string }>;
}

// Main section
export default async function MainSection({ params }: Props) {
    const { item } = await params;
    return (
        <main>
            <section className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-8xl font-bold">{item.toUpperCase()}</h1>
            </section>
            <ContactSection/>
        </main>
    );
}
