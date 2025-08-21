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

// Details section
export default function DetailsSection() {
    const params = useParams();
    const item = params.item as string;
    const itemFormatted = item.charAt(0).toUpperCase() + item.slice(1);

    return (
        <section
            className="min-h-screen w-full relative z-0 bg-white flex flex-col gap-10 items-center 
        px-10 pt-20 pb-24 rounded-b-[50px] -mt-0.5 will-change-transform overflow-hidden"
        >
            <div className="w-full h-full relative grid grid-cols-2 gap-5 items-start">
                {/* Details */}
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-2xl text-start">Key features</p>
                        <ul className="flex flex-col justify-center gap-0 text-lg font-medium">
                            {[
                                "High-back ergonomic design with lumbar support",
                                "Breathable mesh backrest for temperature control",
                                "Adjustable padded headrest",
                                "Height-adjustable seat mechanism",
                                "Height-adjustable seat mechanism",
                                "360-degree swivel functionality",
                                "Adjustable armrests with soft padding",
                                "Tilt mechanism with tension control",
                            ].map((point, index) => (
                                <li key={index} className="list-none">
                                    <BulletPoint className="text-orange-600" />
                                    &nbsp;&nbsp;
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Points */}
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-2xl text-start">
                            Material Specifications
                        </p>
                        <ul className="flex flex-col justify-center gap-0 text-lg font-medium">
                            {[
                                "Mesh backrest: High-quality breathable fabric",
                                "Seat cushion: High-density foam with fabric upholstery",
                                "Frame: Reinforced plastic and metal construction",
                                "Base: Chrome-plated 5-star aluminum base",
                                "Armrests: Adjustable PP plastic with soft padding",
                                "Casters: Dual-wheel nylon rollers",
                            ].map((point, index) => (
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

                {/* Related items */}
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-0">
                        <p className="font-semibold text-2xl text-start flex items-center gap-2">
                            Related Items
                        </p>

                        {/* Items */}
                        <div className="flex flex-col">
                            {[1, 2, 3, 4]
                                .filter((_, index) => index < 3)
                                .map((id, index) => (
                                    <div key={index}>
                                        <Link
                                            href={`/products/${item}/${id + 2}`}
                                            className="group flex items-center gap-5 pr-5 cursor-pointer overflow-hidden"
                                        >
                                            <div className="w-32 bg-white rounded-2xl overflow-hidden shrink-0">
                                                <img
                                                    src={`/images/item/chairs/chair-${id + 2}-fr.jpeg`}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-lg font-semibold">
                                                    Ergenomic High-Neck Chair
                                                </h1>
                                                <p className="text-base font-semibold text-zinc-600 w-[80%]">
                                                    {[
                                                        "Ergonomic back support",
                                                        "Mesh ventilation system",
                                                        "Height adjustable seat",
                                                    ].join(", ")}
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
