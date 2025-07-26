import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Reveal service
export const revealService = (
  div: HTMLDivElement
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    div,
    { opacity: 0, y: 50, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        start: "top 90%",
        toggleActions: "play none none reverse",
        // scrub: true
      },
    }
  );
};
