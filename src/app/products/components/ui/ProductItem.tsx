"use client";

// Interface for Props
interface Props {
    item: string;
    action: () => void;
    selectedItem: string;
}

// Product item
export default function ProductItem({ item, action, selectedItem }: Props) {
    return (
        <p
            onClick={action}
            className={`cursor-pointer ${selectedItem === item.toLowerCase() && "underline underline-offset-8"
                }`}
        >
            {item}
        </p>
    );
}
