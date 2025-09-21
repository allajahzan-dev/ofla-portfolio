"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Image section
export default function ImageSection() {
    return (
        <section
            className="h-screen w-full relative -mt-0.5 bg-zinc-100 flex flex-col items-center justify-center
            will-change-transform overflow-hidden"
        >
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="h-full w-full"
            >
                <Image
                    width={1000}
                    height={1000}
                    quality={100}
                    src="/images/about-us/about-image.jpg"
                    alt="about-image"
                    className="h-full w-full object-cover object-center"
                />
            </motion.div>
        </section>
    );
}
