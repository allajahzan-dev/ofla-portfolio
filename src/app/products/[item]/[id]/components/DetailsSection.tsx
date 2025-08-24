"use client";

import BulletPoint from "@/components/ui/pointer";
import {
    ArrowRight,
    ArrowUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";

// Interface for Props
interface Props {
    itemImages: IItemImage[];
    itemImage: IItemImage;
}

// Details section
export default function DetailsSection({ itemImages, itemImage }: Props) {
    const params = useParams();
    const item = params.item as string;
    const itemFormatted = item.charAt(0).toUpperCase() + item.slice(1);

    // Related items
    const [relatedItems, setRelatedItems] = useState<IItemImage[] | []>([]);

    // Set realted items
    useLayoutEffect(() => {
        setRelatedItems(() => {
            const rItems = itemImage.relatedItems
                .map((id) => itemImages.find((itemImg) => itemImg.id === id))
                .filter((itemImage) => itemImage !== undefined);
            return rItems;
        });
    }, [params]);

    return (
        <section
            className="min-h-screen w-full relative z-0 bg-white flex flex-col gap-10 items-center 
        px-10 pt-20 pb-24 rounded-b-[50px] -mt-0.5 will-change-transform overflow-hidden"
        >
            <div className="w-full h-full relative grid grid-cols-2 gap-5 items-start">
                {/* First column */}
                <div className="flex flex-col gap-20">
                    {/* Key features */}
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-2xl text-start">Key features</p>
                        <ul className="flex flex-col justify-center gap-0 text-lg font-medium">
                            {itemImage.keyFeatures.map((point, index) => (
                                <li key={index} className="list-none">
                                    <BulletPoint className="text-orange-600" />
                                    &nbsp;&nbsp;
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Material Specifications */}
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-2xl text-start">
                            Material Specifications
                        </p>
                        <ul className="flex flex-col justify-center gap-0 text-lg font-medium">
                            {itemImage.materialSpecification.map((point, index) => (
                                <li key={index} className="list-none">
                                    <BulletPoint className="text-orange-600" />
                                    &nbsp;&nbsp;
                                    <span className="font-bold">
                                        {point.split(": ")[0] + ": "}
                                    </span>
                                    {point.split(": ")[1]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Share */}
                    <div className="flex flex-col gap-5">
                        <p className="text-lg font-semibold">Share</p>
                        <div className="flex items-center gap-5">
                            <Instagram className="w-5 h-5" />
                            <Facebook className="w-5 h-5" />
                            <Linkedin className="w-5 h-5" />
                            <Twitter className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Second column */}
                <div className="h-full flex flex-col justify-between">
                    {/* Related items */}
                    <div className="flex flex-col gap-0">
                        <p className="font-semibold text-2xl text-start flex items-center gap-2">
                            Related Items
                        </p>

                        {/* Items */}
                        <div className="flex flex-col">
                            {relatedItems
                                .filter((_, index) => index < 3)
                                .map((itemImage, index) => (
                                    <div key={index}>
                                        <Link
                                            href={`/products/${item}/${itemImage.id}`}
                                            className="group flex items-center gap-5 pr-5 cursor-pointer overflow-hidden"
                                        >
                                            <div className="w-32 bg-white rounded-2xl overflow-hidden shrink-0">
                                                <Image
                                                    width={1000}
                                                    height={1000}
                                                    quality={100}
                                                    src={itemImage.img[0]}
                                                    alt={item + "-" + (index + 1)}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-lg font-semibold">
                                                    {itemImage.title}
                                                </h1>
                                                <p className="text-base font-semibold text-zinc-600 w-[80%]">
                                                    {itemImage.points.join(", ")}
                                                </p>
                                            </div>

                                            <div
                                                className="py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                                            opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Link */}
                    <Link
                        href={`/products/${item}`}
                        className="group w-fit font-semibold text-xl flex items-center gap-2 cursor-pointer"
                    >
                        <ArrowUpRight className="w-7 h-7 text-orange-600" />
                        <div className="relative h-7 overflow-hidden">
                            <p className="group-hover:-translate-y-full transition-transform duration-300">
                                {itemFormatted.split("-").join(" ")}
                            </p>
                            <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                                {itemFormatted.split("-").join(" ")}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
