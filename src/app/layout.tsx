import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "@/fonts/urbanist";
import Navbar from "./components/navbar/Navbar";
import ScrollSmoother from "./components/animated/ScrollSmoother";
import ContactIndicator from "./components/animated/ContactIndicator";
import MousePointer from "./components/animated/MousePointer";
import PageTransition from "@/components/animated/PageTransition";

export const metadata: Metadata = {
    title: "Office Lifestyle Arabia",
    description:
        "Premium Dubai-based workspace furniture company offering ergonomic chairs, tables, and modern office solutions.",
    keywords: [
        "office furniture Dubai",
        "ergonomic chairs Dubai",
        "workspace solutions Dubai",
        "office furniture India",
        "ergonomic chairs India",
        "workspace solutions India",
        "office tables",
        "modern office furniture",
        "workspace furniture",
    ],
    creator: "Ahsan Allaj PK",
};

// Root layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={urbanist.className}>
            <body className="bg-white text-[#171717] overflow-x-hidden">
                <ContactIndicator />
                <PageTransition />

                <div id="smooth-wrapper" className="relative">
                    <div id="smooth-content">
                        <Navbar />
                        {children}
                    </div>
                </div>
                
                <ScrollSmoother />
                <MousePointer />
            </body>
        </html>
    );
}
