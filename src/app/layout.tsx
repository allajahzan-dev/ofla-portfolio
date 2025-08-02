import type { Metadata } from "next";
import "./globals.css";
import MousePointer from "@/components/animated/MousePointer";
import { urbanist } from "@/fonts/urbanist";
import ScrollSmoother from "@/components/animated/ScrollSmoother";
import ContactIndicator from "@/components/animated/ContactIndicator";
import Navbar from "@/components/common/navbar/Navbar";

export const metadata: Metadata = {
    title: "Sulthan",
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
    robots: "index, follow",
    creator: "Ahsan Allaj PK",
    viewport: "width=device-width, initial-scale=1",
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
