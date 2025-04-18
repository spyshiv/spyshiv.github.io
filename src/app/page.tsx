"use client";
import Hero from "@/components/home/hero-section";
import About from "@/components/home/about-section";
import { NavbarMenu } from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <About />
    </>
  );
}
