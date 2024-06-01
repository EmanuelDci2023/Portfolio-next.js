"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex-col min-h-screen flex justify-center items-center ">
      <h2 className="text-5xl text-center text-neutral-300 font-extrabold">
        CONTACT ME
      </h2>
      <div className=" bg-contact mt-16  text-slate-200 bg-contain   bg-no-repeat md:bg-cover w-full flex rounded-lg py-40 items-center justify-center ">
        <div className="flex flex-col xl:p-8 xl:mt-16  tracking-tight mt-8 mr-8 md:text-neutral-900 md:ml-[23rem] Lg:ml-[13rem] lg:ml-1  md:mb-52">
          <ul className="font-extrabold  xl:text-5xl space-y-4 mt-32">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center xl:p-4 text-lg"
                href="https://www.linkedin.com/in/emanuel-rusu-735517309/"
              >
                Connect with me on
                <FaLinkedin className="ml-4 text-3xl" />
              </a>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center xl:p-4 text-lg"
                href="https://github.com/Rusu91-webdeveloper"
              >
                Connect with me on
                <FaGithub className="ml-4 text-3xl" />
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center xl:p-4 text-lg"
                href="mailto: rusu.emanuel.webdeveloper@gmail.com"
              >
                Send me an
                <TbMailFilled className="ml-4 text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
