import type { Metadata } from "next";
import "./globals.css";
import MousePointer from "@/components/animated/MousePointer";
import { urbanist } from "@/fonts/urbanist";

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
      <body className="h-screen w-full bg-zinc-200 text-[#171717]">
        {children}
        {/* <MousePointer /> */}
      </body>
    </html>
  );
}
