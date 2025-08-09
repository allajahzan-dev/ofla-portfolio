import MainSection from "./components/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string }>;
}

// Item page
export default async function Item({ params }: Props) {
    const data = await params;
    return <MainSection item={data.item} />;
}
