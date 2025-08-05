import MainSection from "./components/sections/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string }>;
}

// Item page
export default async function Item({ params }: Props) {
    const data = await params;
    console.log(data);
    
    return <MainSection item={data.item} />;
}
