// import { oswald } from "@/fonts/owald";
// import { cn } from "@/lib/utils";
import RevealHeading from "@/components/animated/RevealHeading";
// import { fetchProcesses } from "@/app/utils/fetchProcesses";

// Project section
export default async function ProjectSection() {
  return (
    <section
      className="min-h-screen relative z-20 px-4 py-24 pb-40 -mt-0.5 bg-white flex flex-col gap-20 items-center 
            rounded-[35px] will-change-transform overflow-hidden
            md:px-5 xl:px-10 xl:py-40 xl:rounded-[50px]"
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
            Projects
          </h1>
        }
        subTitle={
          <p
            className="text-base text-center font-bold text-zinc-600 leading-5 tracking-tight
                        md:text-xl md:font-semibold md:leading-6"
          >
            Let’s dive into the latest projects. From first idea to final
            <br />
            launch, every step is clear and intentional.
          </p>
        }
        className="flex flex-col gap-5 items-center"
        sectionType="default"
      />
    </section>
  );
}
