import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Snap sections
export const snapSections = (
  sections: NodeListOf<Element>,
  sectionsLength: number,
  div: HTMLDivElement
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(sections, {
    xPercent: -100 * (sectionsLength - 1),
    ease: "none",
    scrollTrigger: {
      trigger: div,
      pin: true,
      scrub: 0.5,
      // snap: {
      //   snapTo: 1 / (sectionsLength - 1),
      //   duration: 0.5,
      //   delay: 0,
      //   ease: "none",
      // },
      end: () => `+=${div.offsetWidth}`,
    },
  });
};
