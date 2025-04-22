"use client";
import CardDemo from "@/components/ui/card-with-move-animation";
import { PROJECT_LIST } from "@/config/home";
const projects = PROJECT_LIST;

export default function TracingBeamDemo() {
  return (
    <div className="py-30">
      <h2 className="text-bold text-5xl mb-10 text-black dark:text-white max-w-full text-center">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-10">
        {projects.map((project) => (
          <CardDemo
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
