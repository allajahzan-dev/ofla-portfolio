import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollSmoother } from "./ScrollSmoother";

// Reveal service heading
export const revealServiceHeading = (div: HTMLDivElement) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(div, {
    y: -385,
  });

  gsap.to(div, {
    y: 0,
    scrollTrigger: {
      trigger: div,
      start: "top 70%",
      end: "top 9%",
      scrub: true,
    },
  });

  gsap.fromTo(
    div,
    {
      scale: 1.3,
    },
    {
      scale: 1,
      scrollTrigger: {
        trigger: div,
        start: "top 70%",
        end: "top 9%",
        scrub: true,
        // markers: true,
        onEnter: () => {
          scrollSmoother()?.smooth(4);
        },
        onLeave: () => {
          scrollSmoother()?.smooth(2);
        },
        onEnterBack: () => {
          scrollSmoother()?.smooth(4);
        },
        onLeaveBack: () => {
          scrollSmoother()?.smooth(2);
        },
      },
    }
  );
};