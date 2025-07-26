import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import path from "path";
import { promises as fs } from "fs";
import MarqueeAnimated from "@/components/animated/MarqueeAnimated";

// Fetch questions
const fetchQuestions = async (): Promise<{
  questions: IQuestions[];
}> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "data",
      "questions.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data;
  } catch (err) {
    console.error("Failed to read questions:", err);
    return { questions: [] };
  }
};

// Interface for questions
interface IQuestions {
  question: string;
  answer: string;
}

// Process section
export default async function FaqSection() {
  // Questions
  const { questions } = await fetchQuestions();

  return (
    <section
      className="min-h-screen relative z-10 bg-white flex flex-col gap-20 items-center 
      px-10 pt-40 -mt-0.5 rounded-t-[50px] will-change-transform overflow-hidden"
    >
      <div className="w-full grid grid-cols-3 gap-5">
        {/* First column */}
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-[120px] text-start text-zinc-900 leading-[1]">
            FAQ
          </h1>
          <p className="text-xl text-start font-semibold text-zinc-600 w-[90%]">
            Get quick answers for frequently asked questions about our products
            and services.
          </p>
        </div>

        {/* Second column */}
        <div className="col-span-2">
          <div className="flex flex-col">
            <Accordion type="multiple">
              {questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="group data-[state=closed]:border-b"
                >
                  <AccordionTrigger className="flex items-center">
                    <h1 className="w-full text-lg font-semibold">{item.question}</h1>
                    <h1
                      className={cn(
                        "text-4xl font-semibold text-zinc-400 group-hover:text-[#171717] transition-colors duration-300",
                        oswald.className
                      )}
                    >
                      0{index + 1}
                    </h1>
                  </AccordionTrigger>

                  <AccordionContent className="text-base font-medium text-zinc-600 w-[70%]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <MarqueeAnimated/>
    </section>
  );
}
