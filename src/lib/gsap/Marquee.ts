import { gsap } from "gsap";

// Marquee
export const marquee = (text: HTMLHeadingElement, wrapper: HTMLDivElement) => {
  // Duplicate the text so it appears seamless
  const clone = text.cloneNode(true);
  wrapper.appendChild(clone);

  // gsap.set(wrapper, { force3D: true });

  // gsap.fromTo(
  //   wrapper,
  //   { xPercent: 0 },
  //   {
  //     xPercent: -50,
  //     duration: 50,
  //     ease: "linear",
  //     repeat: -1,
  //   }
  // );

  const totalWidth = text.offsetWidth * 2;
  wrapper.style.width = `${totalWidth}px`;

  gsap.to(wrapper, {
    x: () => `-${text.offsetWidth}px`,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  });
};
