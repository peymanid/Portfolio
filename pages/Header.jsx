import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import img from "@/public/Space-Illustration.png";
import { TypeAnimation } from "react-type-animation";

const Header = ({ ToggleMode, setToggleMode }) => {
  return (
    <div className="flex h-[88vh] items-center py-5 mt-[10vh]">
      <div className="text-white w-[50%] h-full p-10">
        <div className="h-[20%] ml-2">
          {ToggleMode ? (
            <IoSunnyOutline
              size={20}
              className="cursor-pointer"
              onClick={() => setToggleMode(false)}
            />
          ) : (
            <BsFillMoonStarsFill
              size={20}
              className="cursor-pointer fill-black"
              onClick={() => setToggleMode(true)}
            />
          )}
        </div>
        <div className={`h-[80%]`}>
          <p className="text-[#842cdd] pl-1">Developer</p>
          <p className={`dark:text-white text-gray-700`}>
            <TypeAnimation
              sequence={["Peyman", 900, "Esmaeilpour", 900]}
              repeat={Infinity}
              speed={40}
              style={{ fontSize: "50px", display: "inline-block" }}
            />
          </p>
          <p className="text-[#8a878a] mb-5 pl-1 text-[13px]">
            Coding enthusiast and my development process involves understanding
            the client's requirements, designing capable architecture, and
            creating high quality clean, and maintainable code. I love staying
            up-to-date with the latest Thecnology and trends in the industry.
          </p>

          <a
            href="https://github.com/peymanid"
            target="_blank"
            className="flex items-center justify-center w-[40px] text-[#842cdd]"
          >
            <AiFillGithub size={50} />
          </a>
        </div>
      </div>

      <div className="w-[50%] h-full">
        <figure className="w-[80%] ml-auto h-full relative astronaut-img rounded-l-[40px]">
          <Image src={img} fill className="rounded-l-[40px]" />
        </figure>
      </div>
    </div>
  );
};

export default Header;
