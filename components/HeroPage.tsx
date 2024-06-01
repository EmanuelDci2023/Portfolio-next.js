"use client";

import ColorButtons from "@/components/ColorButtons";
import { useState, useEffect } from "react";
import Image from "next/image";

import { BackgroundBeams } from "./ui/background-beams";
import { AuroraBackground } from "./ui/aurora-background";
import ContactButton from "@/components/ContactButton";

const HeroPage = () => {
  const texts = [
    "I'm a web developer",
    "I'm a nerd",
    "I'm also addicted to TECH",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="pt-36 mdLg:flex-row mdLg:flex     mdLg:justify-between mdLg:px-4   mdLg:mb-[2rem]   flex w-full flex-col items-center p-6 ">
      <div className=" mdLg:w-[60%] mdLg:text-left w-[100%] text-center tracking-widest text-slate-300">
        <h1 className="mdLg:text-4xl mb-6 inline-block bg-gradient-to-r from-pink-800 to-violet-900 bg-clip-text text-3xl  font-bold text-transparent lg:text-6xl ">
          Hello,I'm Emanuel
        </h1>

        <h2 className=" mdLg:text-3xl mb-4 font-mono text-2xl">
          {displayedText}.
        </h2>
        <p className="mb-4 text-[#b6b6b6]">
          Welcome to my digital playground, where lines of code transform into
          immersive online experiences. I'm Allen, a passionate and innovative
          web developer dedicated to crafting elegant and efficient solutions.
        </p>

        <ContactButton />
        <ColorButtons />
      </div>
      <div>
        <Image
          className="rounded-full"
          src="/avatar3.jpeg"
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default HeroPage;
