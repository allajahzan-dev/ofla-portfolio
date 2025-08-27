import { ArrowRight, ArrowUpRight } from "lucide-react";
import RevealHeading from "@/components/animated/RevealHeading";
import Image from "next/image";
import BulletPoint from "@/components/ui/pointer";
import { fetchLatestProducts } from "@/app/utils/fetchLatestProducts";
import Link from "next/link";

// Products section
export default async function ProductsSection() {
    // Latest products
    const { latestProducts } = await fetchLatestProducts();

    return (
        <section
            className="min-h-screen relative z-30 px-4 py-20 pb-0 bg-white flex flex-col gap-20 items-center 
            rounded-[35px] -mt-0.5 will-change-transform overflow-hidden
            md:px-5 xl:px-10 lg:py-40 lg:pb-0 md:rounded-[50px]"
        >
            {/* Title */}
            <RevealHeading
                title={
                    <h1
                        className="font-bold text-[72px] text-center leading-[1]
                        md:text-[82px] lg:text-[120px]"
                    >
                        Latest
                        <br />
                        Products
                    </h1>
                }
                subTitle={
                    <p
                        className="text-base text-center font-semibold text-zinc-600
                        md:text-xl"
                    >
                        Discover our complete range of premium office furniture
                        <br className="hidden sm:block" /> and workspace solutions designed
                        to enhance
                        <br className="hidden sm:block" /> productivity and comfort.
                    </p>
                }
                className="w-full px-0 flex flex-col gap-5 items-center"
                sectionType="default"
            />

            {/* Products */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10">
                {latestProducts.map((item) => (
                    <figure
                        key={item.id}
                        className="group flex flex-col w-full p-2 rounded-4xl hover:bg-zinc-100 transition-colors duration-300"
                    >
                        <div
                            className="w-full h-[480px] rounded-3xl overflow-hidden cursor-none
                            md:h-[500px] lg:h-[700px]"
                        >
                            <Image
                                src={item.img}
                                alt={item.img.slice(1).split(".")[0]}
                                width={300}
                                height={100}
                                // quality={100}
                                priority
                                className="product-img h-full w-full object-cover object-bottom scale-105"
                            />
                        </div>
                        <figcaption className="w-full flex gap-2 p-5 cursor-pointer will-change-transform">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className=" text-lg text-zinc-600 font-medium leading-6">
                                    {item.description1}
                                    <br />
                                    {item.description2}
                                </p>
                            </div>
                            <div
                                className="self-center py-2.5 px-4 rounded-full bg-black hover:bg-orange-600 text-white 
                                group-hover:opacity-100 opacity-0 duration-300 transition-opacity"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </figcaption>
                    </figure>
                ))}

                {/* More */}
                <footer className="w-full flex items-center gap-10 pt-12 pb-10 col-span-1 md:col-span-2">
                    <BulletPoint />
                    <div className="bg-zinc-200 w-24 h-0.5 rounded-full flex-1" />
                    <Link
                        href={"/products"}
                        className=" group flex items-center gap-2 cursor-pointer"
                    >
                        <ArrowUpRight className="w-7 h-7 text-orange-600" />
                        <div className="relative h-7 overflow-hidden">
                            <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold">
                                More products
                            </p>
                            <p className="group-hover:-translate-y-full transition-transform duration-300 text-2xl font-semibold text-orange-600">
                                More products
                            </p>
                        </div>
                    </Link>
                </footer>
            </div>
        </section>
    );
}
