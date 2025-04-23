"use client";
import React, { useState, useEffect } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle
} from "@/components/ui/text-reveal-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp-container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  CONTACT_WORDS_SET,
  INFINITE_MOVING_CARDS_MAP,
  INFINITE_MOVING_CARDS_MAP_2
} from "@/config/home";

export default function Contact() {
  const wordSets = CONTACT_WORDS_SET;
  const testimonials = INFINITE_MOVING_CARDS_MAP_2;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

function ContactMe() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
