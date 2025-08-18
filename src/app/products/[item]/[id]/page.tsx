import { fetchProducts } from "@/app/products/utils/fetchProducts";
import { fetchItemImages } from "@/app/products/[item]/utils/fetchItemImages";
import MainSection from "./components/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ item: string; id: string }>;
}

// Generate static params
export async function generateStaticParams() {
    // Products
    const { products } = await fetchProducts();

    const params = [];

    for (const item of products) {
        // Item images
        const { itemImages } = await fetchItemImages(item.title.toLowerCase());

        for (const itemImage of itemImages) {
            params.push({
                item: item.title.toLowerCase(),
                id: itemImage.id.toString(),
            });
        }
    }

    return params;
}

// Generate meta data
export async function generateMetadata({ params }: Props) {
    const data = await params;

    // Item image
    const { itemImages } = await fetchItemImages(data.item);
    const itemImage = itemImages.find(
        (itemImage) => itemImage.id === parseInt(data.id)
    );

    return {
        title: itemImage?.title ? itemImage.title + " - " + "OFLA" : "aa",
        description: `Premium Dubai-based workspace furniture company offering 
            ergonomic chairs, tables, longues, pods, lockers, storage 
            and modern office solutions.`,
    };
}

// Id page
export default async function Id({ params }: Props) {
    const data = await params;
    return <MainSection item={data.item} id={data.id} />;
}
