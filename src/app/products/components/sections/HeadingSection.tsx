import Panel from "../panel/Panel";
import SnapHeadings from "@/components/animated/SnapPanels";
import { IProduct } from "../../layout";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Heading section
export default function HeadingSection({ products }: Props) {
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
