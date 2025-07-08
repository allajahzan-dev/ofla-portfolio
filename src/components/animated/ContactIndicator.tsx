"use client";

import { useState } from "react";
import { Mail, ChevronUp, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactIndicator() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-5 right-5 z-50"
        >
            <div className="relative flex flex-col items-center gap-3">
                {/* Hidden icons container */}
                <div
                    className={cn(
                        "flex flex-col items-center gap-4 p-3 py-3 shadow rounded-full bg-[#171717]/20 transition-all opacity-0 duration-300 translate-y-2",
                        isHovered && "opacity-100 translate-y-0"
                    )}
                >
                    <img
                        src="/whatsapp.svg"
                        alt="WhatsApp"
                        className="w-8 cursor-pointer"
                    />
                    <img src="/gmail.svg" alt="Gmail" className="w-8 cursor-pointer" />
                </div>

                {/* Main button */}
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    className="p-3 bg-[#171717]/20 text-white rounded-full cursor-pointer shadow"
                >
                    <AnimatePresence mode="wait">
                        {isHovered ? (
                            <motion.div
                                key="up"
                                initial={{ opacity: 0, rotate: -60 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -60 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronUp className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mail"
                                initial={{ opacity: 0, rotate: 60 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 60 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Send className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
