import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let smoother: ScrollSmoother | null = null;

// Smooth scroller
export const scrollSmoother = () => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  if (smoother) return smoother;

  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
  });

  return smoother;
};

// Kill scroller
export const killScroller = () => {
  if (smoother) {
    smoother.kill();
    smoother = null;
  }

  // Reset scroll position
  requestAnimationFrame(() => {
    if (smoother) {
      // smoother.scrollTo(0, false);
    } else {
      // window.scrollTo({ top: 0, behavior: "auto" });
    }
  });
};
