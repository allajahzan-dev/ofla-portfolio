import { fetchProducts } from "@/app/products/utils/fetchProducts";
import MainSection from "./components/sections/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string }>;
}

// Generate static params
export async function generateStaticParams() {
    // Products
    const { products } = await fetchProducts();
    return products.map((product) => ({ item: product.title.toLowerCase() }));
}

// Generate meta data
export async function generateMetadata({ params }: Props) {
    const data = await params;

    // Products
    const { products } = await fetchProducts();

    const product = products.find(
        (product) => product.title.toLowerCase() === data.item.split("-").join(" ")
    );

    return {
        title: product?.title
            ? product.title + " - " + "OFLA"
            : "Office Lifestyle Arabia",
        description:
            product?.description ||
            `Premium Dubai-based workspace furniture company offering 
            ergonomic chairs, tables, longues, pods, lockers, storage 
            and modern office solutions.`,
    };
}

// Item page
export default async function Item({ params }: Props) {
    const data = await params;
    return <MainSection item={data.item} />;
}
