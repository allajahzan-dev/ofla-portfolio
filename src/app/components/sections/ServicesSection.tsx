import RevealHeading from "@/components/animated/RevealHeading";
import RevealService from "../animated/RevealService";
import BulletPoint from "@/components/ui/pointer";
import { fetchServices } from "@/app/utils/fetchServices";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Service section
export default async function ServicesSection() {
    // Services
    const { services } = await fetchServices();

    return (
        <section
            className="min-h-screen relative z-20 py-24 pb-16 bg-[#171717] text-white flex flex-col gap-20 items-center 
            -mt-0.5 rounded-[35px] will-change-transform overflow-hidden
            lg:py-40 lg:pb-[calc(160px-64px)] lg:gap-40 lg:rounded-[50px]"
        >
            {/* Heading */}
            <RevealHeading
                title={
                    <p className="font-semibold text-lg text-start leading-[1]">
                        Services
                    </p>
                }
                subTitle={
                    <div className="w-full flex flex-col items-start gap-6 col-span-2">
                        {/* Title */}
                        <h1
                            className="text-2xl text-start font-semibold leading-6
                            md:text-[28px] lg:text-4xl md:leading-7 lg:leading-9"
                        >
                            Our services are designed <br className="hidden lg:block" /> to
                            provide <br className="hidden md:block lg:hidden" /> complete{" "}
                            <br className="hidden sm:block md:hidden lg:block" /> workspace
                            solutions for <br className="hidden md:block" /> every business.
                        </h1>

                        {/* See more */}
                        <Link
                            href={"/about-us"}
                            className=" group flex items-center gap-2 cursor-pointer"
                        >
                            <ArrowUpRight className="w-5 h-5 text-orange-600" />
                            <div className="relative h-7 overflow-hidden text-lg font-semibold">
                                <p className="group-hover:-translate-y-full transition-transform duration-300">
                                    See more
                                </p>
                                <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                                    See more
                                </p>
                            </div>
                        </Link>
                    </div>
                }
                className="px-4 grid grid-cols-1 gap-5 items-start
                md:px-5 xl:px-10 md:grid-cols-3"
                sectionType="service"
            />

            {/* Services */}
            <div className="w-full flex flex-col items-center">
                {services.map((service) => (
                    <RevealService
                        key={service.id}
                        title={
                            <h1
                                className="text-4xl font-semibold col-span-2
                                md:text-6xl lg:text-[80px] md:font-bold"
                            >
                                {service.title}
                            </h1>
                        }
                        points={
                            <ul className="col-span-1 text-ellipsis text-nowrap overflow-hidden">
                                {service.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="text-base font-semibold list-none
                                        lg:text-lg md:font-medium"
                                    >
                                        <BulletPoint className="text-zinc-400" />
                                        &nbsp;&nbsp;{point}
                                    </li>
                                ))}
                            </ul>
                        }
                    />
                ))}
            </div>
        </section>
    );
}
