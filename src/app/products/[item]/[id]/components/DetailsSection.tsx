import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import Image from "next/image";

// Interface for Props
interface Props {
    itemImage: IItemImage | undefined;
}

// Details section
export default function DetailsSection({ itemImage }: Props) {
    return (
        <section
            className="min-h-screen w-full relative bg-zinc-100 flex flex-col items-center justify-center
        px-10 py-20 will-change-transform overflow-hidden"
        >
            {/* Item images */}
            <div className="w-full h-full">
                <div className="grid grid-cols-2 gap-5 items-center">
                    {itemImage &&
                        itemImage.img.map((image, index) => (
                            <div key={index} className="rounded-2xl overflow-hidden">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={image}
                                    alt="img"
                                    className="w-full"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
