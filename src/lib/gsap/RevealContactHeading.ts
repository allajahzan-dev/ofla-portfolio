import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollSmoother } from "./ScrollSmoother";

// Reveal contact heading
export const revealContactHeading = (div: HTMLDivElement) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(div, {
    y: -385,
  });

  gsap.to(div, {
    y: 0,
    scrollTrigger: {
      trigger: div,
      start: "top 70%",
      end: "top 12%",
      scrub: true,
    },
  });

  gsap.fromTo(
    div,
    {
      // opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: div,
        start: "top 70%",
        end: "top 12%",
        scrub: true,
        markers: true,
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
