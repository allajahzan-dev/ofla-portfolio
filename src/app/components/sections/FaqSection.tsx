import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { fetchQuestions } from "@/app/utils/fetchQuestions";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Process section
export default async function FaqSection() {
    // Questions
    const { questions } = await fetchQuestions();

    return (
        <section
            className="h-fit relative z-10 px-4 py-24 bg-white flex flex-col gap-20 items-center 
            -mt-0.5 rounded-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:py-40 xl:rounded-[50px]"
        >
            <div
                className="w-full grid grid-cols-1 gap-10
                lg:grid-cols-3 lg:gap-5"
            >
                {/* First column */}
                <header className="w-full flex flex-col gap-8">
                    <h1
                        className="text-[72px] text-start font-bold leading-[1]
                        md:text-[82px] lg:text-[120px]"
                    >
                        FAQ
                    </h1>
                    <p
                        className="text-base text-start font-bold text-zinc-600 leading-5 tracking-tight
                        md:text-xl md:font-semibold md:leading-6"
                    >
                        Get quick answers for frequently asked questions
                        <br className="hidden sm:block lg:hidden" /> about our products and
                        services.
                    </p>
                    <Link
                        href={"/contact"}
                        className="w-fit group flex items-center gap-2 cursor-pointer"
                    >
                        <ArrowUpRight className="w-5 h-5 text-orange-600" />
                        <div className="relative h-7 overflow-hidden text-lg font-semibold">
                            <p className="group-hover:-translate-y-full transition-transform duration-300">
                                Ask a question
                            </p>
                            <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                                Ask a question
                            </p>
                        </div>
                    </Link>
                </header>

                {/* Second column */}
                <div className="col-span-2">
                    <div className="flex flex-col">
                        <Accordion type="multiple">
                            {questions.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                    className="group"
                                >
                                    <AccordionTrigger className="flex items-center">
                                        <h1 className="w-full text-lg font-semibold will-change-transform">
                                            {item.question}
                                        </h1>
                                        <h1
                                            className={cn(
                                                "text-2xl font-semibold text-zinc-400 group-hover:text-[#171717] transition-colors duration-300",
                                                oswald.className,
                                                "md:text-4xl"
                                            )}
                                        >
                                            0{index + 1}
                                        </h1>
                                    </AccordionTrigger>

                                    <AccordionContent
                                        className="w-[88%] text-base font-semibold text-zinc-600 leading-5
                                        md:w-[60%]"
                                    >
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
