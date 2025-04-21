"use client";
import Hero from "@/components/home/hero-section";
import About from "@/components/home/about-section";
import Projects from "@/components/home/project-section";
import Skills from "@/components/home/skills-section";
import Contact from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
