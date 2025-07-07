import { Oswald } from "next/font/google";

export const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
    preload: true,
    weight: ["400", "200", "300", "500", "600", "700"],
});