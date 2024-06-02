import HeroPage from "@/components/HeroPage";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { BackgroundGradient } from "@/components/ui/background-gradient";

import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BentoGridThirdDemo } from "@/components/BentoGrid";
import { LampDemo } from "@/components/SkillsHeader";

export default function Home() {
  return (
    <main className=" relative bg-[#09090B] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <TracingBeam>
        <div className="max-w-7xl w-full bg-[#09090B]">
          <HeroPage />
          <BentoGridThirdDemo />
          <Experience />
          <RecentProjects />
        </div>
      </TracingBeam>
    </main>
  );
}
