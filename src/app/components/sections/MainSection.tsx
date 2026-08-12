import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import FaqSection from "./FaqSection";
// import ProcessSection from "./ProcessSection";
import ContactSection from "@/components/common/ContactSection";
import ProjectSection from "./ProjectSection";

// Main section
function MainSection() {
  return (
    <main>
      <HeroSection />
      <section
        className="relative -mt-5 rounded-t-[35px] overflow-hidden
                md:mt-0 xl:rounded-t-[50px]"
      >
        <div
          className="absolute inset-0 z-0 
                    bg-[linear-gradient(to_bottom,_white_0%,_white_2%,_#292929_2%,_#292929_100%)]"
        />

        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <ProjectSection />
        {/* <ProcessSection /> */}
        <FaqSection />
        <ContactSection />
      </section>
    </main>
  );
}

export default MainSection;
