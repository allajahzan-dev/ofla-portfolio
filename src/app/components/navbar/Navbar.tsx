"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarItems from "./NavbarItems";
import { oswald } from "@/fonts/owald";
import { cn } from "@/lib/utils";
import { scrollSmoother } from "@/lib/gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Hamburger } from "./Humburger";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Marquee from "@/components/animated/Marquee";

// Interface for Props
interface Props {
    className: string;
}

// Navar
export default function Navbar({ className }: Props) {
    const pathname = usePathname();

    // Navbar state
    const [navVisible, setNavVisible] = useState(true);

    // Toggle navitems
    const [toggle, setToggle] = useState<boolean>(false);

    // Color state
    const [styles, setStyles] = useState({
        textColor: "text-transparent",
        hoverTextColor: "text-transparent",
        bgColor: "bg-transparent",
        hoverBgColor: "bg-transparent",
    });

    // Set style
    useLayoutEffect(() => {
        const route = pathname;

        if (
            route === "/products" ||
            route === "/about-us" ||
            route === "/contact" ||
            /^\/products\/[^/]+\/[^/]+$/.test(route)
        ) {
            setStyles({
                textColor: "md:text-[#171717]",
                hoverTextColor: "group-hover:text-zinc-800",
                bgColor: "bg-[#171717]",
                hoverBgColor: "bg-black",
            });
        } else {
            setStyles({
                textColor: "md:text-zinc-100",
                hoverTextColor: "group-hover:text-zinc-200",
                bgColor: "bg-zinc-100",
                hoverBgColor: "bg-white",
            });
        }
    }, [pathname]);

    // Pause smooth scrolling when toggle on
    useEffect(() => {
        const smoother = scrollSmoother();
        if (!smoother) return;

        if (toggle) {
            smoother.paused(true);
        } else {
            smoother.paused(false);
        }
    }, [toggle]);

    // Hide / Unhide navbar on scroll
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                if (self.direction === -1) {
                    setNavVisible(true);
                } else {
                    setNavVisible(false);
                }
            },
        });

        // Clean up
        return () => {
            trigger.kill();
        };
    }, [setNavVisible]);

    return (
        <div
            id="navbar-section"
            className={cn(
                className,
                "w-full px-4 py-5 fixed z-[100] top-0 left-0 will-change-transform",
                "shadow-none transition-all duration-300 ease-in-out",
                "md:px-5 xl:px-10 md:bg-transparent md:shadow-none",
                navVisible ? "translate-y-0" : "-translate-y-full",
                pathname === "/products" ||
                pathname === "/about-us" ||
                pathname === "/contact"
                    ? "bg-zinc-100"
                    : "bg-white"
            )}
        >
            <div
                className={cn(
                    "w-full flex flex-col gap-8 items-center justify-between font-semibold text-sm overflow-hidden",
                    "transition-all duration-500 ease-[cubic-bezier(0.6,0,0.1,1)]",
                    styles.textColor,
                    toggle ? "h-[100svh]" : "h-7"
                )}
            >
                <div className="w-full flex items-center justify-between">
                    {/* Logo */}
                    <span
                        className={cn(
                            "relative font-medium text-xl tracking-wide",
                            pathname === "/"
                                ? `text-black ${styles.textColor}`
                                : styles.textColor,
                            oswald.className
                        )}
                    >
                        <Link href={"/"}>
                            OFLA <sup className="text-sm relative -top-[5px]">TM</sup>
                        </Link>
                    </span>

                    {/* Nav Items on desktop */}
                    <div
                        className="h-5 hidden items-center gap-16 tracking-widest
                        md:flex"
                    >
                        <Link href={"/"}>
                            <NavbarItems text="HOME" styles={styles} />
                        </Link>
                        <Link href={"/products"}>
                            <NavbarItems text="PRODUCTS" styles={styles} />
                        </Link>
                        <Link href="/about-us">
                            <NavbarItems text="ABOUT US" styles={styles} />
                        </Link>
                        <Link href="/contact">
                            <NavbarItems text="CONTACT" styles={styles} />
                        </Link>
                    </div>

                    {/* Contact */}
                    <div
                        className="hidden items-start gap-12 tracking-widest
                        md:flex"
                    >
                        <NavbarItems text="CALL" styles={styles} />
                    </div>

                    {/* Hamburger */}
                    <div
                        className="block cursor-pointer
                        md:hidden"
                    >
                        <Hamburger action={() => setToggle(!toggle)} toggle={toggle} />
                    </div>
                </div>

                {/* Nav items on mobile */}
                <div
                    className={cn(
                        "relative h-full w-full pb-4 flex flex-col items-start gap-6 font-semibold text-[#171717]",
                        pathname === "/products" ||
                        pathname === "/about-us" ||
                        pathname === "/contact"
                            ? "bg-zinc-100"
                            : "bg-white"
                    )}
                >
                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-zinc-400">Links</p>

                        <div
                            className="flex flex-col gap-1 text-lg 
                              [&>a:hover]:text-orange-500 [&>a:hover]:transition-colors [&>a:hover]:duration-300"
                        >
                            <Link href={"/"} onClick={() => setToggle(false)}>
                                <p>Home</p>
                            </Link>
                            <Link href={"/products"} onClick={() => setToggle(false)}>
                                <p>Products</p>
                            </Link>
                            <Link href={"/about-us"} onClick={() => setToggle(false)}>
                                <p>About us</p>
                            </Link>
                            <Link href={"/contact"} onClick={() => setToggle(false)}>
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-zinc-400">Get in touch</p>

                        <div
                            className="flex flex-col gap-1 text-lg 
                              [&>:is(p,a):hover]:text-orange-500 [&>:is(p,a):hover]:transition-colors [&>:is(p,a):hover]:duration-300"
                        >
                            <Link
                                href={"mailto:info@ofla.in"}
                                onClick={() => setToggle(false)}
                            >
                                info@ofla.in
                            </Link>
                            <p>+91 123 456 789</p>
                            <p>Dubai, India</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Link
                                    href={"https://www.instagram.com/"}
                                    className="hover:text-orange-600 transition-colors duration-300 flex items-center justify-center rounded-full"
                                >
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={"/https://facebook.com"}
                                    className="hover:text-orange-600 transition-colors duration-500 flex items-center justify-center rounded-full"
                                >
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={"/https://x.com"}
                                    className="hover:text-orange-600 transition-colors duration-500 flex items-center justify-center rounded-full"
                                >
                                    <Twitter className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Marquee className="text-[160px] relative top-5" />
                </div>
            </div>
        </div>
    );
}
