"use client";
import Card from "@/components/ui/card-with-move-animation";
import { PROJECT_LIST } from "@/config/home";
const projects = PROJECT_LIST;

export default function Projects() {
  return (
    <div className="py-30 flex flex-col items-center">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        Projects
      </p>
      <div className="max-w-5xl pt-4 pb-10 text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl font-bold text-transparent sm:text-xl">
        Welcome to my projects showcase. This collection represents a range of
        applications and libraries I've built, demonstrating my comprehensive
        skills in modern frontend development using technologies like React,
        Next.js, Vue.js, and TypeScript. Explore each project to see how I
        approach building high-quality, user-friendly, and performant web
        solutions from concept to deployment.
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-10">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            link={ProjectLink(project.link)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectLink(link: string) {
  return (
    <div className="text-center">
      <a href={link} target="_blank">
        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-md font-bold text-white backdrop-blur-3xl">
            See More
          </span>
        </button>
      </a>
    </div>
  );
}
