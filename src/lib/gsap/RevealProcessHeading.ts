import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollSmoother } from "./ScrollSmoother";

// Reveal process heading
export const revealProcessHeading = (div: HTMLDivElement) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(div, {
    y: -385,
  });

  gsap.to(div, {
    y: 0,
    scrollTrigger: {
      trigger: div,
      start: "top 80%",
      end: "top top",
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
        start: "top 80%",
        end: "top -25%",
        scrub: true,
        // markers: true,
        onEnter: () => {
          scrollSmoother()?.smooth(3);
        },
        onLeave: () => {
          scrollSmoother()?.smooth(1);
        },
        onEnterBack: () => {
          scrollSmoother()?.smooth(3);
        },
        onLeaveBack: () => {
          scrollSmoother()?.smooth(1);
        },
      },
    }
  );
};
