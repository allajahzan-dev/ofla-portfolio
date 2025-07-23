import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { smoothScroller } from "./SmoothScroller";

// Reveal service heading
export const revealServiceHeading = (divRef: any) => {
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
      scale: 1.3,
    },
    {
      scale: 1,
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