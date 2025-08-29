import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollSmoother } from "./ScrollSmoother";

export const revealDefaultHeading = (div: HTMLDivElement) => {
  gsap.registerPlugin(ScrollTrigger);

  // Setup matchMedia
  const mm = gsap.matchMedia();

  mm.add(
    {
      // Define breakpoints
      isMobile: "(max-width: 767.9px)",
      isTablet: "(min-width: 768px) and (max-width: 1023.9px)",
      isDesktop: "(min-width: 1024px)",
    },
    (context) => {
      const { isMobile, isTablet, isDesktop } = context.conditions!;

      // Specific configs for each breakpoints
      const configs = {
        isMobile: {
          y: { start: "top 80%" },
          scale: 1.1,
        },
        isTablet: {
          y: { start: "top 68%" },
          scale: 1.3,
        },
        isDesktop: {
          y: { start: "top 62%" },
          scale: 1.3,
        },
      };

      // Get active config
      const currentConfig =
        (isMobile && configs.isMobile) ||
        (isTablet && configs.isTablet) ||
        (isDesktop && configs.isDesktop);

      if (!currentConfig) return;

      // Reset initial state
      gsap.set(div, { y: -385 });

      // Animate on scroll
      gsap.to(div, {
        y: 0,
        scrollTrigger: {
          trigger: div,
          start: currentConfig.y.start,
          end: "top top",
          scrub: true,
        },
      });

      gsap.fromTo(
        div,
        { scale: currentConfig.scale },
        {
          scale: 1,
          scrollTrigger: {
            trigger: div,
            start: currentConfig.y.start,
            end: "top top",
            scrub: true,
            onEnter: () => scrollSmoother()?.smooth(3),
            onLeave: () => scrollSmoother()?.smooth(1),
            onEnterBack: () => scrollSmoother()?.smooth(3),
            onLeaveBack: () => scrollSmoother()?.smooth(1),
          },
        }
      );
    }
  );
};
