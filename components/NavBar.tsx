"use client";

import { useState } from "react";
import { CgMenuGridO, CgCloseO } from "react-icons/cg";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed  top-0 z-50 w-full bg-[rgb(12,12,12)]  bg-opacity-40  ">
        <div className="mdLg:flex-row max-w-screen-huge m-auto my-2 flex flex-col items-center justify-between content-center text-center px-20 text-[rgb(229,243,252)] pt-10">
          <div className="mdLg:w-auto flex w-full justify-between ">
            <h3 className="bg-logo3    border-1 size-24 rounded-full bg-contain  bg-center bg-no-repeat p-4"></h3>
            <div className="mdLg:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <CgCloseO className="text-2xl text-slate-300" />
                ) : (
                  <CgMenuGridO className="text-2xl text-white" />
                )}
              </button>
            </div>
          </div>
          <ul
            className={`mdLg:flex-row mdLg:flex flex-col ${
              isMenuOpen
                ? "mdLg:space-y-0 mdLg:space-x-6 flex space-y-4 text-slate-100"
                : "hidden"
            } mdLg:flex items-center`}
          >
            <li>
              <Link
                className="p-2 mdLg:ml-6 hover:text-white cursor-pointer"
                href={"/"}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="p-2 mdLg:ml-6 hover:text-white cursor-pointer"
                href={"/experience"}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                className="p-2 mdLg:ml-6 hover:text-white cursor-pointer"
                href={"/projects"}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="mdLg:ml-6 cursor-pointer rounded-full bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800"
                href={"/contact"}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
