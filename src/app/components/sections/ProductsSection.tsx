import { ArrowRight, ArrowUpRight } from "lucide-react";
import RevealHeading from "@/components/animated/RevealHeading";
import Image from "next/image";
import BulletPoint from "@/components/ui/pointer";
import { fetchLatestProducts } from "@/app/utils/fetchLatestProducts";

// Products section
export default async function ProductsSection() {
    // Latest products
    const { latestProducts } = await fetchLatestProducts();

    return (
        <section
            className="min-h-screen relative z-30 bg-white flex flex-col gap-20 items-center 
        px-10 py-40 pb-0 rounded-[50px] -mt-0.5 will-change-transform overflow-hidden"
        >
            {/* Title */}
            <RevealHeading
                title={
                    <h1 className="font-bold text-[120px] text-center leading-[1]">
                        Latest
                        <br />
                        Products
                    </h1>
                }
                subTitle={
                    <p className="text-xl text-center font-semibold text-zinc-600">
                        Discover our complete range of premium office furniture <br /> and
                        workspace solutions designed to enhance
                        <br />
                        productivity and comfort.
                    </p>
                }
                className="flex flex-col gap-5 items-center"
                sectionType="default"
            />

            {/* Products */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-10 mt-10">
                {latestProducts.map((item) => (
                    <figure
                        key={item.id}
                        className="group flex flex-col w-full p-2 rounded-4xl 
                hover:bg-zinc-100 transition-colors duration-300"
                    >
                        <div className="w-full h-[700px] rounded-3xl overflow-hidden cursor-none">
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
                        <figcaption className="w-full flex gap-2 p-5 cursor-pointer">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className=" text-lg text-zinc-600 font-medium tracking-tight">
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
            </div>
        </section>
    );
}
