import RevealHeading from "@/components/animated/RevealHeading";
import RevealService from "../animated/RevealService";
import BulletPoint from "@/components/ui/pointer";
import path from "path";
import { promises as fs } from "fs";

// Interface for servie
interface IService {
    id: number;
    title: string;
    points: string[];
}

// Fetch services
const fetchServices = async (): Promise<{
    services: IService[];
}> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "app",
            "data",
            "services.json"
        );
        const fileContent = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};

// Service section
export default async function ServicesSection() {
    // Services
    const { services } = await fetchServices();

    return (
        <section className="min-h-screen relative z-20 bg-[#171717] flex flex-col gap-40 items-center 
        py-40 pb-[calc(160px-64px)] -mt-0.5 rounded-[50px] will-change-transform overflow-hidden">
            {/* Title */}
            <RevealHeading
                title={
                    <p className="font-semibold text-lg text-start text-white leading-[1]">
                        Services
                    </p>
                }
                subTitle={
                    <h1 className="text-4xl text-start font-semibold text-white col-span-1">
                        Our services are designed to provide complete workspace solutions
                        for every business.
                    </h1>
                }
                className="grid grid-cols-3 gap-5 items-start px-10"
                sectionType="service"
            />

            {/* Services */}
            <div className="w-full flex flex-col text-white">
                {services.map((service) => (
                    <RevealService
                        key={service.id}
                        title={
                            <h1 className="text-7xl font-bold col-span-2">{service.title}</h1>
                        }
                        points={
                            <ul className="col-span-1">
                                {service.points.map((point, index) => (
                                    <li key={index} className="text-lg list-none">
                                        <BulletPoint className="text-orange-600" />
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
