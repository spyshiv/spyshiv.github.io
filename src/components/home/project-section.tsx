import { HoverEffect } from "../ui/card-hover-effect";
import { PROJECT_LIST } from "@/config/home";
const projects = PROJECT_LIST.slice(0, 6);

export default function Projects() {
  return (
    <div className="h-[50rem] flex flex-col justify-center max-w-5xl mx-auto px-8">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        Projects
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
