import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { smoothScroller } from "./SmoothScroller";

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
          smoothScroller()?.smooth(4);
        },
        onLeave: () => {
          smoothScroller()?.smooth(2);
        },
        onEnterBack: () => {
          smoothScroller()?.smooth(4);
        },
        onLeaveBack: () => {
          smoothScroller()?.smooth(2);
        },
      },
    }
  );
};
