import type { Metadata } from "next";
import "./globals.css";
import MousePointer from "@/components/animated/MousePointer";
import { urbanist } from "@/fonts/urbanist";
import ScrollSmoother from "@/components/animated/ScrollSmoother";
import ContactIndicator from "@/components/animated/ContactIndicator";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Nujoomu Sulthan",
  description: "It'a company porfolio",
  creator: "Ahsan allaj pk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.className}`}>
      <body className="h-screen w-full bg-white text-[#171717] overflow-x-hidden">
        <div id="smooth-wrapper" className="w-full h-full">
          <ContactIndicator />

          {/* Sections */}
          <div id="smooth-content" className="min-h-screen">
            <Navbar />
            {children}
          </div>

          <ScrollSmoother />

          <MousePointer/>
        </div>
      </body>
    </html>
  );
}
