"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/lib/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundGradient } from "./ui/background-gradient";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading mb-40">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap flex-col  items-center justify-center p-4 gap-16 mt-10 lg:grid lg:grid-cols-2 ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center max-w-full "
            key={item.id}
          >
            <PinContainer
              className="w-full h-full flex flex-col items-center justify-center "
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center w-full  overflow-hidden h-[20vh] lg:h-[30vh] mb-10 ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  width="464"
                  height="300"
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rotate-[5deg]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 ">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;