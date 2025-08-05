import { ReactNode } from "react";
import TitleSection from "./components/sections/TitleSection";
import { fetchProducts } from "./utils/fetchProducts";

// Products layout
export default async function ProductsLayout({
    children,
}: {
    children: ReactNode;
}) {
    // Products
    const { products } = await fetchProducts();

    return (
        <div className="bg-[#292929]">
            <TitleSection products={products} />
            {children}
        </div>
    );
}
