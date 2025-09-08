import Image from "next/image";
import Link from "next/link";
import BreakText from "@/components/helper/BreakText";
import { ArrowRight } from "lucide-react";
import { IProduct } from "@/app/products/utils/fetchProducts";

// Interface for Props
interface Props {
    products: IProduct[];
    width?: number;
    height?: number;
}

// Product Images
export default function ProductImages({ products, width, height }: Props) {
    return (
        <>
            {products
                .filter((item) => item.id !== 5)
                .map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="group flex flex-col w-full p-0 hover:bg-transparent transition-colors duration-300 rounded-4xl
                        lg:p-2 lg:hover:bg-white"
                    >
                        <div
                            className="w-full h-[520px] rounded-3xl overflow-hidden cursor-pointer
                            md:h-[500px] lg:h-[600px] xl:h-[700px]"
                        >
                            <Image
                                src={item.img}
                                alt={item.img.slice(1).split(".")[0]}
                                width={width || 1000}
                                height={height || 1000}
                                quality={100}
                                priority
                                className="h-full w-full object-cover object-bottom scale-105"
                            />
                        </div>
                        <figcaption className="w-full flex gap-2 p-5 py-5 cursor-pointer will-change-transform">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1
                                    className="text-2xl font-semibold
                                    md:text-[28px] lg:text-4xl"
                                >
                                    {item.title}
                                </h1>
                                <p
                                    className="w-full text-base text-zinc-600 font-semibold tracking-tight leading-5
                                    lg:text-lg lg:font-medium"
                                >
                                    {BreakText({ text: item.description, breakAfter: 4 })}
                                </p>
                            </div>
                            <div
                                className="hidden self-center py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                                group-hover:opacity-100 opacity-0 duration-300 transition-opacity
                                lg:block"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </figcaption>
                    </Link>
                ))}
        </>
    );
}
