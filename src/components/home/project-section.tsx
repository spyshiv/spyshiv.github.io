import { HoverEffect } from "../ui/card-hover-effect";
import { PROJECT_LIST } from "@/config/home";
const projects = PROJECT_LIST.slice(0, 3);

export default function Projects() {
  return (
    <div className="h-[50rem] flex flex-col justify-center max-w-5xl mx-auto px-8">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        Projects
      </p>
      <p className="text-xl font-bold">
        I'm a passionate web developer with a focus on creating engaging and
        functional user experiences. My projects demonstrate my skills in
        front-end technologies like React, Next.js, and Tailwind CSS to build
        responsive and visually appealing websites. I also have experience in
        back-end development and deployment, as seen in my full-stack
        applications. I enjoy tackling challenging problems and continuously
        learning new technologies to deliver innovative web solutions.
      </p>
      <HoverEffect items={projects} />
      <div className="text-center">
        <a href="/projects">
          <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-bold text-white backdrop-blur-3xl">
              Explore All Projects
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
