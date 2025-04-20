"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";

export default function Contact() {
  const wordSets = [
    [
      { text: "I" },
      { text: "develop", className: "text-blue-500 dark:text-blue-500" },
      { text: "scalable" },
      { text: "web" },
      { text: "apps" },
      { text: "using" },
      { text: "modern", className: "text-cyan-500 dark:text-cyan-500" },
      { text: "JavaScript." }
    ],
    [
      { text: "I" },
      { text: "design", className: "text-purple-500 dark:text-purple-500" },
      { text: "reusable" },
      { text: "components", className: "text-pink-500 dark:text-pink-500" },
      { text: "and" },
      { text: "consistent" },
      { text: "UI" }
    ],
    [
      { text: "I" },
      { text: "focus" },
      { text: "on" },
      {
        text: "performance",
        className: "text-orange-500 dark:text-orange-500"
      },
      { text: "using" },
      {
        text: "code-splitting",
        className: "text-yellow-500 dark:text-yellow-500"
      },
      { text: "and" },
      { text: "tree-shaking." }
    ],
    [
      { text: "I" },
      { text: "architect", className: "text-indigo-500 dark:text-indigo-500" },
      {
        text: "micro-frontends",
        className: "text-emerald-500 dark:text-emerald-500"
      },
      { text: "for" },
      { text: "modular" },
      { text: "teams." }
    ],
    [
      { text: "I" },
      { text: "build", className: "text-blue-500 dark:text-blue-500" },
      { text: "interactive" },
      { text: "charts", className: "text-lime-500 dark:text-lime-500" },
      { text: "and" },
      { text: "visualizations" },
      { text: "with" },
      { text: "D3", className: "text-red-500 dark:text-red-500" },
      { text: "and" },
      { text: "Highcharts." }
    ],
    [
      { text: "I" },
      {
        text: "implement",
        className: "text-pink-500 dark:text-pink-500"
      },
      { text: "secure" },
      {
        text: "authentication",
        className: "text-yellow-500 dark:text-yellow-500"
      },
      { text: "flows" },
      { text: "using" },
      { text: "JWT" },
      { text: "and" },
      { text: "OAuth." }
    ],
    [
      { text: "I" },
      { text: "automate", className: "text-purple-500 dark:text-purple-500" },
      { text: "builds" },
      { text: "and" },
      { text: "deployments", className: "text-teal-500 dark:text-teal-500" },
      { text: "via" },
      { text: "CI/CD", className: "text-fuchsia-500 dark:text-fuchsia-500" }
    ],
    [
      { text: "I" },
      { text: "contribute", className: "text-green-500 dark:text-green-500" },
      { text: "to" },
      { text: "open-source", className: "text-blue-400 dark:text-blue-400" },
      { text: "and" },
      { text: "mentor", className: "text-rose-500 dark:text-rose-500" },
      { text: "developers." }
    ],
    [
      { text: "I" },
      { text: "manage", className: "text-indigo-500 dark:text-indigo-500" },
      { text: "cloud" },
      { text: "infrastructure", className: "text-gray-500 dark:text-gray-400" },
      { text: "and" },
      { text: "Dockerized" },
      { text: "environments." }
    ],
    [
      { text: "I" },
      { text: "collaborate", className: "text-cyan-600 dark:text-cyan-600" },
      { text: "with" },
      { text: "designers" },
      { text: "and" },
      { text: "PMs" },
      { text: "to" },
      { text: "enhance", className: "text-pink-600 dark:text-pink-600" },
      { text: "UX." }
    ]
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[50rem] flex flex-col items-center justify-center">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
            Contact Me
          </p>
        </motion.h1>
        <div className="flex gap-4 my-8">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            <a href="mailto:spyshiv@gmail.com">spyshiv@gmail.com</a>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            <a href="./../shiv-resume-2025.pdf" target="_blank">
              Download Resume
            </a>
          </button>
        </div>
        {wordSets.map((words, index) => (
          <div
            key={index}
            className={index === currentIndex ? "block" : "hidden"}
          >
            <TypewriterEffectSmooth
              words={words}
              className="text-2xl text-center mt-20 transition-opacity duration-500"
            />
          </div>
        ))}
      </LampContainer>
    </div>
  );
}
