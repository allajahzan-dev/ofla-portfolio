import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Snap sections
export const snapSections = (
  sections: NodeListOf<Element>,
  div: HTMLDivElement
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: div,
      pin: true,
      scrub: true,
      // snap: {
      //   snapTo: 1 / (sections.length - 1),
      //   duration: 0.5,
      //   delay: 0,
      //   ease: "none",
      // },
      end: () => `+=${div.offsetWidth}`,
    },
  });
};
