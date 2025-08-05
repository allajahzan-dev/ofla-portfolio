import { fetchProducts } from "../../utils/fetchProducts";
import Panel from "../panel/Panel";
import SnapHeadings from "@/components/animated/SnapPanels";

// Heading section
export default async function HeadingSection() {
    // Products
    const { products } = await fetchProducts();

    return (
        <SnapHeadings
            panelsLength={products.length}
            panels={[
                ...products.map((product) => (
                    <Panel
                        key={product.id}
                        href={product.href}
                        img={product.img}
                        title={product.title}
                        titleClassName="text-white/80"
                    />
                )),
            ]}
        />
    );
}
