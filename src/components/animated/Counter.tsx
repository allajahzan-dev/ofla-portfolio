"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CounterProps {
  limit: number;
  className?: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ limit, className }: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 100%",
      end: "bottom 0%",
      once: false,
      // markers: true,
      onEnter: () => {
        gsap.to(obj, {
          val: limit,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.innerText = `${Math.floor(obj.val)}+`;
            }
          },
        });
      },
      onLeave: () => {
        // Reset to 0 when leaving (scroll down)
        obj.val = 0;
        if (counterRef.current) counterRef.current.innerText = `0+`;
      },
      onLeaveBack: () => {
        // Reset to 0 when scrolling back up
        obj.val = 0;
        if (counterRef.current) counterRef.current.innerText = `0+`;
      },
      onEnterBack: () => {
        gsap.to(obj, {
          val: limit,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.innerText = `${Math.floor(obj.val)}+`;
            }
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [limit]);

  return (
    <h1 className={className}>
      <span ref={counterRef}>0+</span>
    </h1>
  );
}
