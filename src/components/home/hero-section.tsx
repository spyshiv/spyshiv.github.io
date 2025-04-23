"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ColourfulText } from "@/components/ui/colourful-text";

export default function Hero() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="px-5 w-[70%]">
        <p className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-8 text-4xl font-bold text-transparent sm:text-7xl">
          Shiv Baran Singh
        </p>
        <p className="text-center pt-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold text-transparent sm:text-2xl">
          <ColourfulText text="Frontend Developer" /> | React.js | Next.js |
          Vue.js | Node.js
        </p>
        <p className="pt-4 text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl font-bold text-transparent sm:text-xl">
          As a seasoned Frontend Developer with over 8 years of experience, I
          create scalable and high-performance web applications using
          technologies such as React.js, Next.js, Vue.js, and Node.js. My
          expertise spans developing intricate micro-frontends, building and
          utilizing robust design systems, optimizing application performance,
          and implementing efficient CI/CD practices. I actively explore
          innovative approaches, including the potential of Generative AI in
          frontend development.
        </p>
        <div className="text-center">
          <a href="./../shiv-resume-2025.pdf" target="_blank">
            <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-lg font-bold text-white backdrop-blur-3xl">
                Download Resume
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
