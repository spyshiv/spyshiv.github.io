import { GlareCard } from "@/components/ui/glare-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const skills = {
  Frontend: [
    {
      name: "JavaScript",
      icon: "./../skills/javascript.svg"
    },
    {
      name: "TypeScript",
      icon: "./../skills/typescript.svg"
    },
    {
      name: "Reactjs",
      icon: "./../skills/react.svg"
    },
    {
      name: "Vuejs",
      icon: "./../skills/vuejs.svg"
    },
    {
      name: "Nextjs",
      icon: "./../skills/nextjs.svg"
    },
    {
      name: "Sass",
      icon: "./../skills/sass.svg"
    },
    {
      name: "Tailwind",
      icon: "./../skills/tailwindcss.svg"
    }
  ],
  "Backend & DevOps": [
    {
      name: "Nodejs",
      icon: "./../skills/nodejs.svg"
    },
    {
      name: "Python",
      icon: "./../skills/python.svg"
    },
    {
      name: "Django Rest",
      icon: "./../skills/djangorest.svg"
    },
    {
      name: "PostgreSQL",
      icon: "./../skills/postgresql.svg"
    },
    {
      name: "AWS",
      icon: "./../skills/aws.svg"
    },
    {
      name: "Docker",
      icon: "./../skills/docker.svg"
    },
    {
      name: "Jenkins",
      icon: "./../skills/jenkins.svg"
    }
  ],
  Tools: [
    {
      name: "Git",
      icon: "./../skills/git.svg"
    },
    {
      name: "NPM",
      icon: "./../skills/npm.svg"
    },
    {
      name: "vite",
      icon: "./../skills/vite.svg"
    },
    {
      name: "Nginx",
      icon: "./../skills/nginx.svg"
    },
    {
      name: "Jira",
      icon: "./../skills/jira.svg"
    },
    {
      name: "VsCode",
      icon: "./../skills/vscode.svg"
    },
    {
      name: "Figma",
      icon: "./../skills/figma.svg"
    }
  ]
};

export default function Skills() {
  return (
    <BackgroundBeamsWithCollision className="md:h-[60rem] h-screen pb-10 px-4">
      <div className="py-20">
        <p className="text-center py-4 my-10 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text md:text-4xl text-3xl font-bold text-transparent sm:text-4xl">
          Skills
        </p>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h3 className="md:text-xl text-md dark:text-white text-black font-bold mb-6 text-center underline decoration-blue-500 decoration-2 underline-offset-10">
              {category}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 block md:hidden">
              {items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
                  <p className="text-white font-bold text-xs mt-4">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <div className="flex flex-wrap items-center justify-center gap-8">
                {items.map((skill) => (
                  <GlareCard
                    key={skill.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10"
                    />
                    <p className="text-white font-bold text-md mt-4">
                      {skill.name}
                    </p>
                  </GlareCard>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BackgroundBeamsWithCollision>
  );
}
