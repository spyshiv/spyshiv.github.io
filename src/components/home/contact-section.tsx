"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";

export default function Contact() {
  const wordSets = [
    [
      { text: "I" },
      { text: "craft", className: "text-blue-500 dark:text-blue-500" },
      { text: "user-friendly" },
      { text: "web" },
      { text: "interfaces" },
      { text: "using" },
      { text: "modern", className: "text-cyan-500 dark:text-cyan-500" },
      { text: "JS" },
      { text: "frameworks." }
    ],
    [
      { text: "I" },
      { text: "build", className: "text-purple-500 dark:text-purple-500" },
      { text: "reusable" },
      { text: "UI", className: "text-pink-500 dark:text-pink-500" },
      { text: "components" },
      { text: "with" },
      { text: "scalable" },
      { text: "Design" },
      { text: "System." }
    ],
    [
      { text: "I" },
      { text: "focus" },
      { text: "on" },
      {
        text: "optimizing",
        className: "text-orange-500 dark:text-orange-500"
      },
      { text: "frontend" },
      {
        text: "performance",
        className: "text-yellow-500 dark:text-yellow-500"
      },
      { text: "for" },
      { text: "speed/scale." }
    ],
    [
      { text: "I" },
      { text: "write", className: "text-purple-500 dark:text-purple-500" },
      { text: "comprehensive" },
      { text: "unit," },
      { text: "integration," },
      { text: "&" },
      { text: "E2E tests." }
    ],
    [
      { text: "I" },
      { text: "integrate", className: "text-blue-500 dark:text-blue-500" },
      { text: "with" },
      { text: "backend" },
      { text: "APIs" },
      { text: "for" },
      { text: "dynamic" },
      { text: "user" },
      { text: "experiences." }
    ],
    [
      { text: "I" },
      { text: "ensure", className: "text-yellow-500 dark:text-yellow-500" },
      { text: "cross-browser" },
      { text: "&" },
      {
        text: "responsive",
        className: "text-lime-500 dark:text-lime-500"
      },
      { text: "design" },
      { text: "across" },
      { text: "devices." }
    ],
    [
      { text: "I" },
      { text: "manage", className: "text-indigo-500 dark:text-indigo-500" },
      { text: "&" },
      { text: "optimize" },
      { text: "workflows" },
      { text: "for" },
      { text: "CI/CD" },
      { text: "pipelines." }
    ],
    [
      { text: "I" },
      { text: "expertly", className: "text-teal-500 dark:text-teal-500" },
      { text: "handle" },
      { text: "`npm publish`" },
      { text: "for" },
      { text: "package" },
      { text: "distribution." }
    ],
    [
      { text: "I" },
      { text: "explore", className: "text-emerald-500 dark:text-emerald-500" },
      { text: "&" },
      { text: "experiment" },
      { text: "with" },
      {
        text: "generative AI.",
        className: "text-fuchsia-500 dark:text-fuchsia-500"
      }
    ],
    [
      { text: "I" },
      { text: "troubleshoot", className: "text-red-500 dark:text-red-500" },
      { text: "&" },
      { text: "resolve" },
      { text: "frontend" },
      { text: "issues" },
      { text: "efficiently." }
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
