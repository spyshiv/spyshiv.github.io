"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function About() {
  return (
    <div className="h-[50rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        About Me
      </p>
      <p className="px-5 w-[70%] text-center pt-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl font-bold text-transparent sm:text-xl">
        I'm Shiv Baran Singh, a frontend developer with 8+ years of experience
        building modern, performant web applications. I specialize in Vue 3,
        React, and TypeScript, with a focus on creating reusable components,
        design systems, and intuitive user experiences. My approach blends
        strong UI/UX thinking with scalable architecture.
        <br />
        <br />
        I’ve worked extensively with micro-frontend setups, custom UI libraries,
        and tools like Vite, Webpack, and Rollup to optimize performance. I’m
        also skilled in building secure authentication flows using OAuth, JWT,
        and integrating REST APIs. My workflow includes Docker, CI/CD, and cloud
        platforms like AWS.
        <br />
        <br />
        As an open source contributor and Google Summer of Code mentor, I enjoy
        sharing knowledge and helping developers grow. I'm passionate about
        clean code, community-driven development, and exploring new ways to
        improve frontend engineering.
      </p>
      <a href="/contact">
        <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-bold text-white backdrop-blur-3xl">
            Contact Me
          </span>
        </button>
      </a>
    </div>
  );
}
