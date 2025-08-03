import MainSection from "./components/sections/MainSection";

// Interface for Props
interface Props {
    params: { item: string };
}

export default function Item({ params }: Props) {
    return <MainSection params={params} />;
}
