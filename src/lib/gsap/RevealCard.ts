import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { setupSmoother } from "./SmoothScroller";

export const revealHeading = (divRef: any) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    divRef.current,
    {
      scale: 1.3,
      y: -340,
    },
    {
      scale: 1,
      y: 0,
      // ease: "circ.inOut",
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 65%",
        end: "top top",
        scrub: true,
        markers: true,
      },
    }
  );
};