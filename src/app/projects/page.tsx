"use client";
import CardDemo from "@/components/ui/card-with-move-animation";

export default function TracingBeamDemo() {
  return (
    <div className="py-30">
      <h2 className="text-bold text-5xl mb-10 text-black dark:text-white max-w-full text-center">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-10">
        <CardDemo
          title="Damn good card"
          description="A card that showcases a set of tools that you use to create your
        product."
        />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
        <CardDemo title="Damn good card" />
      </div>
    </div>
  );
}
