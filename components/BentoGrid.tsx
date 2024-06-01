"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skills } from "@/lib/data";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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
  );
}
