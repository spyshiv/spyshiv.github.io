import { HoverEffect } from "../ui/card-hover-effect";
import { PROJECT_LIST } from "@/config/home";
const projects = PROJECT_LIST.slice(0, 3);

export default function Projects() {
  return (
    <div className="h-[50rem] flex flex-col justify-center max-w-5xl mx-auto px-8">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        Projects
      </p>
      <p className="pt-4 text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl font-bold text-transparent sm:text-xl">
        Driven by a passion for creating innovative web experiences, I've built
        a variety of projects showcased below. These demonstrate my hands-on
        experience with modern frontend frameworks (React, Next.js, Vue.js), my
        commitment to best practices like design systems and performance, and my
        ability to deliver impactful web solutions.
      </p>
      <HoverEffect items={projects} />
      <div className="text-center">
        <a href="/projects">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-lg font-bold text-white backdrop-blur-3xl">
              See More
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
