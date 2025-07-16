import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setupSmoother } from "./SetupSmoother";

export const revealHeading = (divRef: any) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(divRef.current, {
    y: -360,
  });

  gsap.to(divRef.current, {
    y: 0,
    scrollTrigger: {
      trigger: divRef.current,
      start: "top 58%",
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
        start: "top 58%",
        end: "top -25%",
        scrub: true,
        markers: true,
        onEnter: () => {
          setupSmoother()?.smooth(5);
        },
        onLeave: () => {
          setupSmoother()?.smooth(1.5);
        },
        onEnterBack: () => {
          setupSmoother()?.smooth(5);
        },
        onLeaveBack: () => {
          setupSmoother()?.smooth(1.5);
        },
      },
    }
  );
};
