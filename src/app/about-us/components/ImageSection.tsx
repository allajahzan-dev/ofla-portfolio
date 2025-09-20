"use client";

import { motion } from "framer-motion";

// Image section
export default function ImageSection() {
    return (
        <section
            className="h-screen w-full relative bg-zinc-100 flex flex-col items-center justify-center
            -mt-0.5 will-change-transform overflow-hidden"
        >
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="h-full w-full"
            >
                <img
                    src="/images/about-us/about-image.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </motion.div>
        </section>
    );
}
