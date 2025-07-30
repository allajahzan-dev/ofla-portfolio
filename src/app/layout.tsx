import type { Metadata } from "next";
import "./globals.css";
import MousePointer from "@/components/animated/MousePointer";
import { urbanist } from "@/fonts/urbanist";
import ScrollSmoother from "@/components/animated/ScrollSmoother";
import ContactIndicator from "@/components/animated/ContactIndicator";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
    title: "Sulthan",
    description: "Company porfolio",
    creator: "Ahsan allaj pk",
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
                <div id="smooth-wrapper" className="relative">
                    <ContactIndicator />

                    <div id="smooth-content">
                        <Navbar />
                        {children}
                    </div>

                    <ScrollSmoother />
                    <MousePointer />
                </div>
            </body>
        </html>
    );
}
