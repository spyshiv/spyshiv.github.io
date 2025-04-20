import { GlareCard } from "../ui/glare-card";

const skills = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
  },
  {
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  }
];

export default function Skills() {
  return (
    <div className="flex items-center justify-center gap-8 py-20">
      {skills.map((skill) => (
        <GlareCard
          key={skill.name}
          className="flex flex-col items-center justify-center"
        >
          <img src={skill.icon} alt={skill.name} />
          <p className="text-white font-bold text-xl mt-4">{skill.name}</p>
        </GlareCard>
      ))}
    </div>
  );
}
