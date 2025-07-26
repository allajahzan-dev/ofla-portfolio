"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";

export default function MousePointer() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

    const controls = useAnimation();
    const mousePosition = { x: 0, y: 0 };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
            checkInteractiveHover(mousePosition.x, mousePosition.y);
        };

        const handleScroll = () => {
            checkInteractiveHover(mousePosition.x, mousePosition.y);
        };

        const checkInteractiveHover = (x: number, y: number) => {
            const el = document.elementFromPoint(x, y);
            if (!el) return;

            if ((el as HTMLElement)?.closest(".product-img")) {
                setIsHoveringInteractive(true);
            } else {
                setIsHoveringInteractive(false);
            }
        };

        const hanldeMoveOver = () => {
            controls.start({ opacity: 1, scale: 1 });
        };

        const hanldeMoveOut = () => {
            controls.start({ opacity: 0, scale: 0 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mouseover", hanldeMoveOver);
        window.addEventListener("mouseout", hanldeMoveOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mouseover", hanldeMoveOver);
            window.removeEventListener("mouseout", hanldeMoveOut);
        };
    }, [mouseX, mouseY, controls]);

    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-none fixed z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
        >
            {isHoveringInteractive ? (
                <motion.div
                    key="interactive"
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="p-5 flex items-center justify-center text-white rounded-full bg-black/20 backdrop-blur-sm w-24 h-24"
                >
                    View
                </motion.div>
            ) : (
                <motion.div
                    key="default"
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-4 h-4 bg-white rounded-full"
                />
            )}
        </motion.div>
    );
}
