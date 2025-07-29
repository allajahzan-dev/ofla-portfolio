import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

let smootherInstance: ScrollSmoother | null = null;

// Smooth scroller
export const smoothScroller = () => {
  if (smootherInstance) return smootherInstance;

  try {
    smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      smoothTouch: 0.1,
      effects: true,
    });
  } catch (err) {
    console.warn("ScrollSmoother failed:", err);
  }

  return smootherInstance;
};

// Kill scroller
export const killScroller = () => {
  if (smootherInstance) {
    smootherInstance.kill();
    smootherInstance = null;
  }
};