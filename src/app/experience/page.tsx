import { Timeline } from "@/components/ui/timeline";

const EXPERIENCE_DATA = [
  {
    title: "May 2018 – Present",
    content: {
      title: "Principal Software Developer — Cyware Labs, Bengaluru",
      description:
        "As a Principal Software Developer at Cyware Labs, I led the transformation of frontend systems by architecting scalable micro-frontend solutions and developing reusable UI component libraries. My focus was on performance optimization, security integration, and delivering seamless user experiences across multiple cybersecurity products. I worked closely with DevOps, designers, and backend teams to ensure continuous delivery and cross-platform consistency.",
      skills:
        "Vue 3, React.js, TypeScript, JavaScript (ES6+), Highcharts, Froala, Vite, Webpack, Micro-Frontend Architecture, OAuth, JWT, RESTful APIs, CI/CD, Docker, NGINX, Git, Figma",
      highlights: [
        "Designed and implemented micro-frontend architecture, enabling independent deployments and reducing load times by 20%.",
        "Developed Cy-Frontend-Framework, a company-wide design system and reusable component library that reduced external UI dependencies by 30%.",
        "Built custom Vue 3 and React component libraries, including Highcharts-based dashboards and Froala editor plugins.",
        "Enhanced authentication workflows with Google Login, reCAPTCHA, and JWT-based SSO integration using Vue plugins.",
        "Led front-end development for major products like Collaborate (CSAP) and Intel Exchange (CTIX), improving dashboards and third-party integrations."
      ],
      images: [
        "./../projects/cyware-1.svg",
        "./../projects/cyware-2.svg",
        "./../projects/cyware-3.svg",
        "./../projects/cyware-4.svg"
      ]
    }
  },
  {
    title: "May 2016 – April 2018",
    content: {
      title: "Full Stack Developer — Neuron, New Delhi",
      description:
        "At Neuron, I was involved in full-stack development with a focus on frontend-rich applications. I worked on an AI-powered chatbot platform and contributed to real-time scheduling and web optimization.",
      skills:
        "React.js, Node.js, Socket.io, REST APIs, Responsive Web Design, JavaScript, HTML5, CSS3, Git",
      highlights: [
        "Built Surbo, an AI-powered survey bot with an interactive React-based admin panel.",
        "Developed a real-time call scheduler using Socket.io for immediate task handling.",
        "Designed and optimized the company website for speed and responsiveness."
      ],
      images: [
        "./../projects/neuron-1.png",
        "./../projects/neuron-2.png",
        "./../projects/neuron-3.png",
        "./../projects/neuron-4.png"
      ]
    }
  }
];

export default function About() {
  const data = EXPERIENCE_DATA.map((item) => ({
    title: item.title,
    content: (
      <div>
        <div className="font-bold text-xl md:text-2xl mb-4 text-neutral-500 dark:text-neutral-500">
          {item.content.title}
        </div>
        <p className="mb-8 font-normal text-md md:text-lg text-neutral-800 dark:text-neutral-200">
          {item.content.description}
        </p>
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-bold text-neutral-500 dark:text-neutral-500">
            Skills & Tools Used:
          </h2>
          <p className="mt-3 text-md md:text-lg">{item.content.skills}</p>
        </div>
        <div className="pb-10">
          <h2 className="text-lg md:text-xl font-bold text-neutral-500 dark:text-neutral-500">
            Key Highlights
          </h2>
          <ul className="list-disc mt-3 text-md md:text-lg text-neutral-800 dark:text-neutral-200">
            {item.content.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {item.content.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image-${index}`}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          ))}
        </div>
      </div>
    )
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
