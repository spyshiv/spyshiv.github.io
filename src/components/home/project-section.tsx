import { HoverEffect } from "../ui/card-hover-effect";

export default function Projects() {
  return (
    <div className="h-[50rem] flex flex-col justify-center max-w-5xl mx-auto px-8">
      <p className="text-center py-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-4xl">
        Projects
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Podcast AI",
    description:
      "a Node.js package that leverages Google's Gemini GenAI to automatically generate podcast-style scripts with multiple characters. By providing a title, description, and desired duration",
    link: "https://www.npmjs.com/package/podcast-ai"
  },
  {
    title: "Gemini GenAI",
    description:
      "A TypeScript based npm package providing a type-safe interface for integrating Google Gemini API text generation into React, Vue, Angular, and other JavaScript Projects",
    link: "https://www.npmjs.com/package/gemini-genai"
  },
  {
    title: "HuexJs",
    description:
      "huexjs is a lightweight and efficient TypeScript library for seamless color conversions. Easily convert colors between HEX, RGB, HSL, CMYK, and HSV with precision.",
    link: "https://www.npmjs.com/package/huexjs"
  },
  {
    title: "DummyTextJs",
    description:
      "dummytextjs is a lightweight utility for generating realistic dummy text (words, sentences, or paragraphs) for development and testing.",
    link: "https://www.npmjs.com/package/dummytextjs"
  },
  {
    title: "Google Login Vue3",
    description:
      "A lightweight and customizable Vue 3 component for Google OAuth 2.0 authentication supporting both JWT-based and Authorization Code-based flows.",
    link: "https://www.npmjs.com/package/google-login-vue3"
  },
  {
    title: "Google Recaptcha Vue3",
    description:
      "A lightweight Vue 3 component library supporting Google reCAPTCHA v2 and v3 integration.",
    link: "https://www.npmjs.com/package/google-recaptcha-vue3"
  }
];
