import { cn } from "@/lib/utils";
import Image from "next/image";
import { IItemImage } from "../../utils/fetchItemImages";

// Interface for Props
interface Props {
    item: string;
    itemImages: IItemImage[];
}

// Image section
export default function ImageSection({ item, itemImages }: Props) {
    return (
        <section
            className={cn(
                "relative z-10 bg-zinc-100 flex flex-col items-center justify-center",
                "px-10 -mt-0.5 rounded-b-[50px] will-change-transform overflow-hidden",
                itemImages.length === 0 ? "h-[calc(100vh-105px)] pb-0" : "h-auto pb-40"
            )}
        >
            {/* Images */}
            {itemImages.length > 0 && (
                <div className="w-full grid grid-cols-3 gap-5">
                    {itemImages.map((itemImage, index) => (
                        <div
                            key={itemImage.id}
                            className="h-[500px] w-full bg-white rounded-3xl overflow-hidden"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={itemImage.img[0]}
                                alt={item + index}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}

            {itemImages.length === 0 && (
                <h1 className="text-2xl font-semibold text-zinc-600">
                    No images found!
                </h1>
            )}
        </section>
    );
}
