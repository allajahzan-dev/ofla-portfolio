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
            className="min-h-screen relative z-30 px-4 py-24 pb-40 bg-white flex flex-col gap-12 items-center 
            rounded-[35px] -mt-0.5 will-change-transform overflow-hidden
            md:px-5 xl:px-10 lg:py-40 md:gap-20 lg:rounded-[50px]"
        >
            {/* Title */}
            <RevealHeading
                title={
                    <h1
                        className="text-[72px] text-center font-bold leading-[1]
                        md:text-[82px] lg:text-[120px]"
                    >
                        Latest
                        <br />
                        Products
                    </h1>
                }
                subTitle={
                    <p
                        className="text-base text-center font-bold text-zinc-600 tracking-tight
                        md:text-xl md:font-semibold"
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
            <div
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5
                md:gap-y-10"
            >
                {latestProducts.map((item) => (
                    <figure
                        key={item.id}
                        className="group flex flex-col w-full p-0 hover:bg-transparent transition-colors duration-300 rounded-4xl
                        lg:p-2 lg:hover:bg-zinc-100"
                    >
                        <div
                            className="w-full h-[520px] rounded-3xl overflow-hidden cursor-none
                            md:h-[500px] lg:h-[600px] xl:h-[700px]"
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
                        <figcaption
                            className="w-full flex gap-2 p-5 py-5 cursor-pointer will-change-transform"
                        >
                            <div className="flex flex-col gap-2 flex-1">
                                <h1
                                    className="text-2xl font-semibold
                                    md:text-[28px] lg:text-4xl"
                                >
                                    {item.title}
                                </h1>
                                <p
                                    className="w-[80%] text-base text-zinc-600 font-semibold tracking-tight leading-5
                                    sm:w-[80%] lg:w-[78%] xl:w-[60%] lg:text-lg lg:font-medium"
                                >
                                    {item.description1}
                                    {item.description2}
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
                    </figure>
                ))}
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
                        className="relative h-7 text-lg font-semibold overflow-hidden
                        md:text-2xl"
                    >
                        <p className="group-hover:-translate-y-full transition-transform duration-300">
                            More products
                        </p>
                        <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                            More products
                        </p>
                    </div>
                </Link>
            </footer>
        </section>
    );
}
