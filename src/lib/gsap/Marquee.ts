import { gsap } from "gsap";

// Marquee
export const marquee = (text: HTMLHeadingElement, wrapper: HTMLDivElement) => {
  // Duplicate the text so it appears seamless
  const clone = text.cloneNode(true);
  wrapper.appendChild(clone);

  // gsap.set(wrapper, { force3D: true });

  gsap.fromTo(
    wrapper,
    { xPercent: 0 },
    {
      xPercent: -50,
      duration: 50,
      ease: "linear",
      repeat: -1,
    }
  );
};
