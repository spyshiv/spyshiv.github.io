import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const data = [
    {
      title: "May 2018 – Present",
      content: (
        <div>
          <h1 className="text-bold text-3xl mb-4 text-black dark:text-white">
            Principal Software Developer — Cyware Labs, Bengaluru
          </h1>
          <p className="mb-8 font-normal text-neutral-800 md:text-lg text-lg dark:text-neutral-200">
            As a Principal Software Developer at Cyware Labs, I led the
            transformation of frontend systems by architecting scalable
            micro-frontend solutions and developing reusable UI component
            libraries. My focus was on performance optimization, security
            integration, and delivering seamless user experiences across
            multiple cybersecurity products. I worked closely with DevOps,
            designers, and backend teams to ensure continuous delivery and
            cross-platform consistency.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl text-bold">Skills & Tools Used:</h2>
            <p className="mt-3">
              Vue 3, React.js, TypeScript, JavaScript (ES6+), Highcharts,
              Froala, Vite, Webpack, Micro-Frontend Architecture, OAuth, JWT,
              RESTful APIs, CI/CD, Docker, NGINX, Git, Figma
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-2xl text-bold">Key Highlights</h2>
            <ul className="list-disc mt-3">
              <li>
                Designed and implemented micro-frontend architecture, enabling
                independent deployments and reducing load times by 20%.
              </li>

              <li>
                Developed Cy-Frontend-Framework, a company-wide design system
                and reusable component library that reduced external UI
                dependencies by 30%.
              </li>

              <li>
                Built custom Vue 3 and React component libraries, including
                Highcharts-based dashboards and Froala editor plugins.
              </li>

              <li>
                Enhanced authentication workflows with Google Login, reCAPTCHA,
                and JWT-based SSO integration using Vue plugins.
              </li>

              <li>
                Led front-end development for major products like Collaborate
                (CSAP) and Intel Exchange (CTIX), improving dashboards and
                third-party integrations.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./../projects/cyware-1.svg"
              alt="cyware-1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/cyware-2.svg"
              alt="cyware-2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/cyware-3.svg"
              alt="cyware-3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/cyware-4.svg"
              alt="cyware-4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      )
    },
    {
      title: "May 2016 – April 2018",
      content: (
        <div>
          <h1 className="text-bold text-3xl mb-4 text-black dark:text-white">
            Full Stack Developer — Neuron, New Delhi
          </h1>
          <p className="mb-8 font-normal text-neutral-800 md:text-lg text-lg dark:text-neutral-200">
            At Neuron, I was involved in full-stack development with a focus on
            frontend-rich applications. I worked on an AI-powered chatbot
            platform and contributed to real-time scheduling and web
            optimization.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl text-bold">Skills & Tools Used:</h2>
            <p className="mt-3">
              React.js, Node.js, Socket.io, REST APIs, Responsive Web Design,
              JavaScript, HTML5, CSS3, Git
            </p>
          </div>
          <div className="pb-10">
            <h2 className="text-2xl text-bold">Key Highlights</h2>
            <ul className="list-disc mt-3">
              <li>
                Built Surbo, an AI-powered survey bot with an interactive
                React-based admin panel.
              </li>
              <li>
                Developed a real-time call scheduler using Socket.io for
                immediate task handling.
              </li>
              <li>
                Designed and optimized the company website for speed and
                responsiveness.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./../projects/neuron-1.png"
              alt="neuron-1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/neuron-2.png"
              alt="neuron-2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/neuron-3.png"
              alt="neuron-3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./../projects/neuron-4.png"
              alt="neuron-4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
