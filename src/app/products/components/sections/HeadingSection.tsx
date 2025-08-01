"use client";

import Products from "../heading/Products";
import Items from "../heading/Items";
import SnapHeadings from "@/components/animated/SnapSections";
import { useRef } from "react";
import { IProductItem } from "./MainSection";

// Interface for Props
interface Props {
    productItems: IProductItem[];
}

// Heading section
export default function HeadingSection({ productItems }: Props) {
    const divRef = useRef<HTMLDivElement | null>(null);

    return (
        <SnapHeadings
            divRef={divRef}
            sectionsLength={productItems.length + 1}
            sections={[
                <Products
                    key={"Products"}
                    items={["Chairs", "Tables", "Lounge", "PODs", "Lockers"]}
                    divRef={divRef}
                />,
                ...productItems.map((productItem) => (
                    <Items
                        key={productItem.id}
                        href={productItem.href}
                        img={productItem.img}
                        heading={productItem.heading}
                        headingClassName="text-white/80"
                    />
                )),
            ]}
        />
    );
}
