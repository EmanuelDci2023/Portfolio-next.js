"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skills } from "@/lib/data";

export function BentoGridThirdDemo() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-5xl lg:text-7xl text-white-200 mb-20">My Skills</h2>
      <BentoGrid className="max-w-7xl  mx-auto md:auto-rows-[20rem] lg:gap-20 px-10">
        {skills.map((skill, i) => (
          <BentoGridItem
            key={i}
            uniqueText={skill.uniqueText}
            title={skill.title}
            description={skill.description}
            header={
              <img
                alt={skill.title}
                src={skill.images}
                width={100}
                height={100}
              />
            }
            className={cn("[&>p:text-lg]", skill.className)}
            icon={skill.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
