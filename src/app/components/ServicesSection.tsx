import HeadingAnimated from "@/components/animated/HeadingAnimated";

// Service section
export default function ServicesSection() {
  return (
    <section className="min-h-screen relative z-20 bg-[#171717] flex flex-col gap-20 items-center px-10 py-40 pb-0 will-change-transform">
      {/* Title */}
      <HeadingAnimated
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
        className="grid grid-cols-3 gap-5 items-start"
      />
    </section>
  );
}
