"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
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
      <div>
        <p className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-8 text-4xl font-bold text-transparent sm:text-7xl">
          Shiv Baran Singh
        </p>
        <p className="text-center pt-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold text-transparent sm:text-2xl">
          Frontend Developer | React.js | Next.js | Tailwind CSS
        </p>
        <p className="text-center pt-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl font-bold text-transparent sm:text-xl">
          Frontend developer with 8+ years of experience in Vue 3, React, and
          TypeScript, focused on building scalable, high-performance web apps.
          Skilled in micro-frontends, design systems, and UI libraries.
          Proficient in Vite, Webpack, and performance tuning. Contributor to
          open source and mentor in Google Summer of Code. Strong in
          authentication, API integration, and CI/CD workflows.
        </p>
      </div>
    </div>
  );
}
