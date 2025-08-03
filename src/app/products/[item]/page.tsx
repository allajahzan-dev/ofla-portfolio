import MainSection from "./components/sections/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string }>;
}

// Item page
export default async function Item({ params }: Props) {
    return <MainSection params={await params} />;
}
