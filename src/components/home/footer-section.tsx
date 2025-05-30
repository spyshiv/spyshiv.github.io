"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function About() {
  return (
    <div className="md:h-[50rem] py-20 px-5 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text md:text-4xl text-3xl font-bold text-transparent sm:text-4xl">
        About Me
      </p>
      <p className="max-w-5xl pt-4 text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text md:text-xl text-md font-bold text-transparent sm:text-xl">
        Hello! I'm Shiv Baran Singh, a Frontend Developer passionate about
        building modern, performant, and intuitive web applications. With over 8
        years of experience, my specialization lies in Vue 3, React, and
        TypeScript, where I focus on building robust design systems, creating
        reusable components, and delivering exceptional user experiences. This
        is underpinned by my approach to designing for scalable architecture and
        optimizing for performance from the outset.
        <br />
        <br />
        I've worked extensively with intricate micro-frontend setups and custom
        UI libraries, leveraging tools like Vite, Webpack, and Rollup to ensure
        peak performance. My technical skills also include building secure
        authentication flows (OAuth, JWT) and integrating complex REST APIs. My
        development workflow is streamlined through tools like Docker and CI/CD
        practices, with experience deploying on cloud platforms like AWS.
        <br />
        <br />
        Beyond coding, I'm an active open source contributor and have had the
        privilege of mentoring for Google Summer of Code. I'm deeply passionate
        about clean code, fostering community-driven development, and
        continuously exploring new ways to elevate the field of frontend
        engineering.
      </p>
      <a href="/contact">
        <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-lg font-bold text-white backdrop-blur-3xl">
            Contact Me
          </span>
        </button>
      </a>
    </div>
  );
}
