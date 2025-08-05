import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Scroll to panel
export const scrollToPanel = (index: number, div: HTMLDivElement) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const scrollY = (index / (5 - 1)) * div.offsetWidth;

  gsap.to(window, {
    scrollTo: { y: scrollY },
    ease: "none",
  });
};
