import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Smooth Scroller
export const smoothScroller = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const scroller = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    smoothTouch: 0.1,
    effects: true,
  });

  return scroller;
};
