import {
    ArrowUpRight,
    Copyright,
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";
import Link from "next/link";

// Contact section
export default function ContactSection() {
    return (
        <section
            className="h-auto relative z-20 px-4 pt-24 bg-[#171717] text-white flex flex-col gap-10 items-center
            rounded-t-[35px] will-change-transform overflow-hidden
            lg:h-[calc(100svh+1.2px)] md:px-5 xl:px-10 lg:pt-40 lg:rounded-t-[50px]"
        >
            <header
                className="w-full grid grid-cols-1 gap-8
                lg:grid-cols-2 lg:gap-5"
            >
                {/* First column */}
                <h1
                    className="text-[72px] font-bold text-start leading-[1]
                    md:text-[82px] lg:text-[120px]"
                >
                    Let&rsquo;s
                    <br />
                    connect
                </h1>

                {/* Second column */}
                <div className="flex flex-col items-start justify- gap-8">
                    <Link
                        href={"/contact"}
                        className="w-fit group flex items-center gap-2 cursor-pointer"
                    >
                        <ArrowUpRight className="w-5 h-5 text-orange-600" />
                        <div className="relative h-7 overflow-hidden text-lg font-semibold">
                            <p className="group-hover:-translate-y-full transition-transform duration-300">
                                Contact details
                            </p>
                            <p className="group-hover:-translate-y-full transition-transform duration-300 text-orange-600">
                                Contact details
                            </p>
                        </div>
                    </Link>
                    <p
                        className="text-xl font-semibold will-change-transform leading-6
                        md:text-2xl xl:text-3xl md:leading-7 xl:leading-8"
                    >
                        Ready to transform your workspace?
                        <br />
                        Get in touch with our team for expert consultation{" "}
                        <br className="hidden sm:block lg:hidden" /> and personalized office
                        solutions.
                    </p>
                </div>
            </header>

            {/* Icons and button */}
            <div
                className="w-full grid grid-cols-1 gap-8 font-medium
                lg:grid-cols-2 lg:gap-0"
            >
                <div className="flex items-center gap-2">
                    <Link
                        href={"https://instagram.com/ofla.ae"}
                        target="_blank"
                        className="bg-zinc-800 hover:bg-white hover:text-[#171717] w-10 h-10 transition-colors duration-300 flex items-center justify-center rounded-full
                        lg:w-12 lg:h-12"
                    >
                        <Instagram
                            className="w-5 h-5
                        lg:w-6 lg:h-6"
                        />
                    </Link>
                    <Link
                        href={"https://facebook.com/ofla.ae"}
                        target="_blank"
                        className="bg-zinc-800 hover:bg-white hover:text-[#171717] w-10 h-10 transition-colors duration-300 flex items-center justify-center rounded-full
                        lg:w-12 lg:h-12"
                    >
                        <Facebook
                            className="w-5 h-5
                        lg:w-6 lg:h-6"
                        />
                    </Link>
                    <Link
                        href={"https://x.com/ofla.ae"}
                        target="_blank"
                        className="bg-zinc-800 hover:bg-white hover:text-[#171717] w-10 h-10 transition-colors duration-300 flex items-center justify-center rounded-full
                        lg:w-12 lg:h-12"
                    >
                        <Twitter
                            className="w-5 h-5
                        lg:w-6 lg:h-6"
                        />
                    </Link>
                </div>
                <div className="flex items-c enter justify-between">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ofla.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full p-5 flex items-center justify-center text-2xl font-medium rounded-full 
                        border border-white hover:bg-white hover:text-[#171717] transition-colors duration-300"
                    >
                        info@ofla.in
                    </a>
                </div>
            </div>

            <footer
                className="w-full py-8 relative bottom-0 left-0 flex items-center font-medium
                    lg:absolute lg:px-5 xl:px-10"
            >
                <p className="flex items-center gap-2 self-end">
                    <Copyright className="w-5 h-5" /> {new Date().getFullYear()} All
                    rights reserved
                </p>
                {/* <div className="mx-3 w-0.5 h-5 bg-white" />
                <Link className="hover:text-orange-600" href="https://github.com/allajahzan-dev" target="_blank">
                    dev
                </Link> */}
            </footer>
        </section>
    );
}
