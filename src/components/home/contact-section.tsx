"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CONTACT_WORDS_SET, INFINITE_MOVING_CARDS_MAP } from "@/config/home";

export default function Contact() {
  const wordSets = CONTACT_WORDS_SET;
  const testimonials = INFINITE_MOVING_CARDS_MAP;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
