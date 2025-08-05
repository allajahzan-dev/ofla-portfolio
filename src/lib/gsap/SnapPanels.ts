import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Snap panels
export const snapPanels = (
  panels: NodeListOf<Element>,
  div: HTMLDivElement
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: div,
      pin: true,
      scrub: 2,
      // snap: {
        // snapTo: 1 / (panels.length - 1),
        // duration: 0.5,
        // delay: 0,
        // ease: "none",
      // },
      end: () => `+=${div.offsetWidth}`,
    },
  });
};
