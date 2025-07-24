import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { smoothScroller } from "./SmoothScroller";

// Reveal heading with context for proper scoping and cleanup
export const revealContactHeading = (divRef: React.RefObject<HTMLDivElement | null>) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(divRef.current, {
    y: -385,
  });

  gsap.to(divRef.current, {
    y: 0,
    scrollTrigger: {
      trigger: divRef.current,
      start: "top 70%",
      end: "top 9%",
      scrub: true,
    },
  });

  gsap.fromTo(
    divRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 70%",
        end: "top 9%",
        scrub: true,
        // markers: true,
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
