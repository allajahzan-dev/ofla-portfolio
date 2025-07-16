import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setupSmoother } from "./SetupSmoother";

export const revealHeading = (divRef: any) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(divRef.current, {
    y: -385,
  });

  gsap.to(divRef.current, {
    y: 0,
    scrollTrigger: {
      trigger: divRef.current,
      start: "top 70%",
      end: "top top",
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
        end: "top -20%",
        scrub: true,
        onEnter: () => {
          setupSmoother()?.smooth(4);
        },
        onLeave: () => {
          setupSmoother()?.smooth(2);
        },
        onEnterBack: () => {
          setupSmoother()?.smooth(4);
        },
        onLeaveBack: () => {
          setupSmoother()?.smooth(2);
        },
      },
    }
  );
};
