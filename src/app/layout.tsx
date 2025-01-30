import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Quriouz Mankey",
    description: "Innovate Learn Grow Succeed ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
                <WhatsAppButton/>
            </body>
        </html>
    );
}
