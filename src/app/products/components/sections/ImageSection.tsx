"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BulletPoint from "@/components/ui/pointer";
import { usePageTransition } from "@/hooks/usePageTransition";
import { usePathname } from "next/navigation";
import { IProduct } from "@/app/products/utils/fetchProducts";
import { motion } from "framer-motion";
import Link from "next/link";

// Interface for Props
interface Props {
    products: IProduct[];
}

// Image section
export default function ImageSection({ products }: Props) {
    const pathname = usePathname();

    // Page navigator
    const navigator = usePageTransition();

    // Handle navigation
    const handleNavigation = (href: string) => {
        return (e: React.MouseEvent) => {
            if (pathname === href) {
                e.preventDefault();
                return;
            }

            navigator(href);
        };
    };

    return (
        // <SnapPanels
        //     panelsLength={products.length}
        //     panels={[
        //         ...products.map((product) => (
        //             <Panel
        //                 key={product.id}
        //                 href={product.href}
        //                 img={product.img}
        //                 title={product.title}
        //                 titleClassName="text-white/80"
        //             />
        //         )),
        //     ]}
        // />
        <section
            className="min-h-screen relative z-30 bg-zinc-100 flex flex-col gap-10 items-center 
        px-10 rounded-b-[50px] -mt-0.5 will-change-transform overflow-hidden"
        >
            {/* All images */}
            <motion.div
                initial={{ y: 80, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-2 gap-x-5 gap-y-5"
            >
                {products.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="group flex flex-col w-full p-0 rounded-4xl 
                    hover:bg-white transition-colors duration-300 "
                    >
                        {/* Image */}
                        <div className="relative w-full h-[720px] rounded-3xl overflow-hidden cursor-pointer">
                            <Image
                                src={item.img}
                                alt={item.img.slice(1).split(".")[0]}
                                width={1000}
                                height={1000}
                                quality={100}
                                priority
                                className="h-full w-full object-cover object-center"
                            />

                            {/* Shadow */}
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent 
                            via-black/20 to-transparent"
                            />

                            {/* <h1
                                className={cn(
                                    "text-6xl text-white/50 font-semibold tracking-wide will-change-transform",
                                    oswald.className,
                                    "p-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                                )}
                            >
                                {item.title.toUpperCase()}
                            </h1> */}
                        </div>

                        {/* Heading & Description */}
                        <figcaption className="w-full hidden gap-2 p-5 cursor-pointer">
                            <div className="flex flex-col gap-2 flex-1 will-change-transform">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className="w-[80%] text-lg text-zinc-600 font-medium tracking-tight">
                                    {item.description}
                                </p>
                            </div>
                            <div
                                className="self-center py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                       group-hover:opacity-100 opacity-0 duration-300 transition-opacity"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </figcaption>
                    </Link>
                ))}
            </motion.div>

            {/* More */}
            <footer className="w-full flex items-center gap-10 pt-12 pb-10 col-span-2">
                <BulletPoint />
                <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                <div className=" group flex items-center gap-2 cursor-pointer">
                    <ArrowUpRight className="w-7 h-7 text-orange-600" />
                    <div className="relative h-7 overflow-hidden">
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                            More Products
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                            More Products
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
