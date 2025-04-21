"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";
import { CONTACT_WORDS_SET } from "@/config/home";

export default function Contact() {
  const wordSets = CONTACT_WORDS_SET;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[50rem] flex flex-col items-center justify-center">
      <LampContainer title="Contact Me">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        ></motion.h1>
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
