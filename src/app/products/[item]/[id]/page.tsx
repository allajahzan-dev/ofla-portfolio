import MainSection from "./components/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string; id: string }>;
}

// Id page
export default async function Id({ params }: Props) {
    const data = await params;
    return <MainSection item={data.item} id={data.id} />;
}
