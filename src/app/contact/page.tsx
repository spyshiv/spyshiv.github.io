"use client";
import React from "react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";

export default function Contact() {
  return (
    <>
      <ContactMe />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-3xl"
        >
          Lets Work Together
        </motion.h1>
        <p className="text-center py-4 my-10 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
          Contact Me
        </p>
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
      </LampContainer>
    </>
  );
}

function ContactMe() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      ></TextRevealCard>
    </div>
  );
}
