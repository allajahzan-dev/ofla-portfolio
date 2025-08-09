import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";

// Interface for Props
interface Props{
    itemImage: IItemImage | undefined;
}

// Details section
export default function DetailsSection({ itemImage }: Props) {
    return (
        <section
            className="min-h-screen w-full relative bg-zinc-100 flex flex-col items-center justify-center
        px-10 will-change-transform overflow-hidden"
        >
            <h1 className="text-2xl font-semibold">
                {itemImage?.title}
            </h1>
            <img src={itemImage?.img[0]} alt="" />
        </section>
    );
}
