import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/shared/navbar";
import { Dock } from "@/components/shared/dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Shiv Baran Singh - Frontend Developer Portfolio",
  description:
    "Shiv Baran Singh | Frontend Developer. Building scalable and high-performance web applications with React.js, Next.js, and Vue.js. View my projects and skills in modern frontend development."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarMenu />
        {children}
        <Dock />
      </body>
    </html>
  );
}
