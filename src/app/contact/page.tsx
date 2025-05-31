"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivbaran1",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/spyshiv",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    )
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/spyshiv",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    )
  },
  {
    name: "Gmail",
    url: "mailto:spyshiv@gmail.com",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    )
  }
];

export default function Contact() {
  return (
    <div className="py-30 flex flex-col items-center px-4">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text md:text-4xl text-3xl font-bold text-transparent sm:text-4xl">
        🌟 Let’s Connect!
      </p>
      <div className="max-w-5xl pt-4 pb-10 text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text md:text-xl text-md font-bold text-transparent sm:text-xl">
        If you’re looking to collaborate, build something awesome, or just talk
        tech, I’d love to hear from you! Whether it’s about frontend frameworks,
        AI projects, or startup ideas—I’m always excited to connect with
        passionate minds.
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-10">
        {socialLinks.map(({ name, url, icon }) => (
          <div className="my-10" key={name}>
            <PinContainer title={name} href={url}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-slate-100 text-center">
                  {name}
                </h3>
                {icon}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="italic mb-2 text-neutral-800 dark:text-neutral-200">
          "Great things in business are never done by one person. They’re done
          by a team of people."
        </p>
        <p className="font-semibold text-neutral-800 dark:text-neutral-200">
          — Steve Jobs
        </p>
        <p className="mt-4 text-neutral-800 dark:text-neutral-200">
          Let’s build, learn, and grow—together. 🙌
        </p>
      </div>
    </div>
  );
}
