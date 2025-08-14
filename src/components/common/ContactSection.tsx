import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

// Contact section
export default function ContactSection() {
    return (
        <section
            className="h-[calc(100svh+1.2px)] relative z-20 bg-[#171717] flex flex-col gap-10 items-center 
            px-10 pt-40 rounded-t-[50px] will-change-transform overflow-hidden bg-cover bg-center"
        >
            <header className="w-full grid grid-cols-3 gap-5">
                {/* First column */}
                <h1 className="font-semibold text-[120px] text-start text-white leading-[1]">
                    Let&rsquo;s connect
                </h1>

                {/* Second column */}
                <div className="col-span-2 flex items-end">
                    <p className="text-4xl font-semibold text-white will-change-transform">
                        Ready to transform your workspace?
                        <br />
                        Get in touch with our team for expert consultation and personalized
                        office solutions.
                    </p>
                </div>
            </header>

            {/* Icons and button */}
            <div className="w-full flex flex-col gap-5 text-zinc-400 font-medium">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex items-center gap-2">
                        <Link
                            href={"/https://instagram.com"}
                            className="bg-zinc-800 hover:bg-white text-white hover:text-[#171717] w-12 h-12 transition-colors duration-300 flex items-center justify-center rounded-full"
                        >
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link
                            href={"/https://facebook.com"}
                            className="bg-zinc-800 hover:bg-white text-white hover:text-[#171717] w-12 h-12 transition-colors duration-300 flex items-center justify-center rounded-full"
                        >
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link
                            href={"/https://x.com"}
                            className="bg-zinc-800 hover:bg-white text-white hover:text-[#171717] w-12 h-12 transition-colors duration-300 flex items-center justify-center rounded-full"
                        >
                            <Twitter className="w-6 h-6" />
                        </Link>
                    </div>
                    <div className="col-span-2 flex items-c enter justify-between">
                        <Link
                            href={"mailto:sulthan@example.com"}
                            className="w-full p-5 flex items-center justify-center text-2xl font-medium rounded-full 
                        border border-white hover:bg-white text-white hover:text-[#171717] transition-colors duration-300"
                        >
                            sulthan@example.com
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="w-full p-10 absolute bottom-0 left-0 flex items-end justify-between text-white">
                <p className="flex items-center gap-2 self-end">
                    <Copyright className="w-5 h-5" /> {new Date().getFullYear()} All
                    rights reserved
                </p>
            </footer>
        </section>
    );
}
