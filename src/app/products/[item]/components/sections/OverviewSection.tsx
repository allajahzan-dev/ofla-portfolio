"use client";

import { usePathname } from "next/navigation";
import { IProduct } from "@/app/products/utils/fetchProducts";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Overview section
export default function OverviewSection({ products }: Props) {
    const pathname = usePathname();
    const title = pathname.split("/")[pathname.split("/").length - 1];

    const selectedProduct = products.find(
        (product) => product.title.toLowerCase() === title.split("-").join(" ")
    );

    return (
        <section
            className="h-auto w-full relative px-4 pt-24 pb-10 -mt-0.5 bg-white flex flex-col items-center gap-20
            rounded-t-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:pt-40 xl:pb-5 xl:rounded-t-[50px]"
        >
            {/* Overview */}
            <div
                className="w-full grid md:flex lg:grid grid-cols-1 gap-10 items-start
                md:grid-cols-3"
            >
                <p className="font-semibold text-lg text-start leading-[1]">Overview</p>
                <h1
                    className="w-[100%] text-2xl text-start font-semibold col-span-2 leading-6 
                    md:w-[80%] lg:w-[90%] xl:w-[85%] md:text-[28px] lg:text-4xl md:leading-7 lg:leading-9"
                >
                    {selectedProduct?.overview}
                </h1>
            </div>
        </section>
    );
}
