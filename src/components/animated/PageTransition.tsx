"use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import CustomEase from "gsap/CustomEase";
// import ScrollToTop from "./ScrollToTop";

// Page transition
export default function PageTransition() {
    // gsap.registerPlugin(CustomEase);
    // CustomEase.create("hop", "0.9, 0, 0.1, 1");

    // useEffect(() => {
    //     gsap.set(".page-loader", {
    //         height: "92vh",
    //         duration: 0.5,
    //         delay: 0.5,
    //     });

    //     gsap.to(".page-loader", {
    //         scaleY: 0,
    //         duration: 0.5,
    //         delay: 1,
    //         ease: "hop",
    //     });
    // }, []);

    return (
        <div
            className="page-transition fixed z-[1000] left-0 top-0 h-screen scale-y-0 w-screen bg-[#171717] 
        flex items-center justify-center origin-top pointer-events-none"
        ></div>
    );
}
