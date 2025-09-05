"use client";

import BulletPoint from "@/components/ui/pointer";
import {
    ArrowRight,
    ArrowUpRight,
    Circle,
    Dot,
    Facebook,
    Instagram,
    Star,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IItemImage } from "@/app/products/[item]/utils/fetchItemImages";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BreakText from "@/components/helper/BreakText";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
            className="min-h-screen w-full relative z-0 px-4 pt-10 pb-40 bg-white flex flex-col gap-10 items-center 
            rounded-b-[35px] -mt-0.5 will-change-transform overflow-hidden
            md:px-5 xl:px-10 md:pt-20 xl:rounded-b-[50px]"
        >
            <div
                className="w-full h-full relative grid grid-cols-1 gap-10 items-start
                lg:grid-cols-1 lg:gap-20"
            >
                {/* First column */}
                <div
                    className="flex flex-col gap-10
                    lg:gap-20"
                >
                    <div className="flex flex-col gap-5">
                        {/* Rate */}
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-3 h-3 text-orange-400 fill-orange-400"
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <p
                            className="w-[100%] text-2xl font-semibold transform-gpu leading-6
                            lg:w-[45%] "
                        >
                            Ergonomic executive mesh chair designed for superior comfort and
                            posture support, featuring breathable mesh, adjustable height, and
                            smooth-rolling wheels.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-10
                        lg:grid-cols-2 lg:gap-5"
                    >
                        {/* Key features */}
                        <div className="flex flex-col gap-5">
                            <p
                                className="font-semibold text-xl text-start
                                md:text-2xl"
                            >
                                Key features
                            </p>
                            <ul
                                className="flex flex-col justify-center gap-0 text-base font-semibold
                                md:text-lg"
                            >
                                {itemImage.keyFeatures.map((point, index) => (
                                    <li
                                        key={index}
                                        className="relative pl-7 leading-6 md:leading-7"
                                    >
                                        <Dot className="absolute left-0 top-1 w-5 h-5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Material Specifications */}
                        <div className="flex flex-col gap-5">
                            <p
                                className="font-semibold text-xl text-start
                                md:text-2xl"
                            >
                                Material Specifications
                            </p>
                            <ul
                                className="flex flex-col justify-center gap-0 text-base font-semibold
                                md:text-lg"
                            >
                                {itemImage.materialSpecification.map((point, index) => (
                                    <li
                                        key={index}
                                        className="relative pl-7 leading-6 md:leading-7"
                                    >
                                        <Dot className="absolute left-0 top-1 w-5 h-5" />
                                        <span className="font-semibold">
                                            {point.split(": ")[0] + ": "}
                                        </span>
                                        {point.split(": ")[1]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="hidden items-center gap-3">
                        <p className="text-lg font-semibold">Share:</p>
                        <div className="flex items-center gap-0">
                            <Link
                                href={"https://instagram.com"}
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href={"https://facebook.com"}
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href={"https://x.com"}
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second column */}
                <div className="h-full relative">
                    {/* Related items */}
                    <div className="flex flex-col gap-5">
                        <p
                            className="font-semibold text-xl text-start
                            md:text-2xl"
                        >
                            You may also like
                        </p>

                        <Carousel className="lg:px-10">
                            <CarouselContent>
                                {relatedItems
                                    .filter((_, index) => index < 3)
                                    .map((itemImage, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="md:basis-1/2 lg:basis-1/3"
                                        >
                                            <div
                                                key={itemImage.id}
                                                className="group relative p-2 h-auto w-full bg-white overflow-hidden cursor-pointer"
                                            >
                                                <Link href={`/products/${item}/${itemImage.id}`}>
                                                    <Image
                                                        key={itemImage.id}
                                                        width={1000}
                                                        height={1000}
                                                        quality={100}
                                                        priority
                                                        src={itemImage?.img[1] || "/"}
                                                        alt={item + "-" + (index + 1)}
                                                        className="h-[350px] lg:h-[380px] w-full object-contain group-hover:scale-100 transition-all duration-500"
                                                    />

                                                    <div className="py-2 flex flex-col gap-5 items-center justify-center">
                                                        <h1
                                                            className="text-sm text-center font-semibold leading-4
                                                            md:text-base md:leading-5"
                                                        >
                                                            {BreakText({
                                                                text: itemImage.title,
                                                                breakAfter: 2,
                                                                className: "hidden",
                                                            })}
                                                        </h1>
                                                        <div className="flex items-center gap-0">
                                                            {itemImage.colors.map((color, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0)]"
                                                                >
                                                                    <Circle
                                                                        className={cn("w-3 h-3 text-white", color)}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="hidden absolute top-5 right-5 py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white
                                                        opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300 transition-all
                                                        lg:block"
                                                    >
                                                        <ArrowRight className="w-5 h-5" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </CarouselItem>
                                    ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* More */}
            <footer
                className="w-full px-4 py-10 absolute bottom-0 flex items-center gap-3 col-span-1
                md:px-10 md:gap-10 md:col-span-2"
            >
                <BulletPoint />
                <div
                    className="bg-zinc-200 w-24 h-[1.6px] rounded-full flex-1
                    md:h-0.5"
                />
                <Link
                    href={"/products"}
                    className="group flex items-center gap-2 cursor-pointer"
                >
                    <ArrowUpRight
                        className="w-5 h-5 text-orange-600
                        md:w-7 md:h-7"
                    />
                    <div
                        className="relative h-8 text-lg font-semibold overflow-hidden
                        md:text-2xl"
                    >
                        <p className="group-hover:-translate-y-full transition-transform duration-300">
                            {itemFormatted.split("-").join(" ")}
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                            {itemFormatted.split("-").join(" ")}
                        </p>
                    </div>
                </Link>
            </footer>
        </section>
    );
}
