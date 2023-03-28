import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import img from "@/public/Space-Illustration.png";
import { TypeAnimation } from "react-type-animation";

const Header = ({ ToggleMode, setToggleMode, ToggleContact }) => {
  return (
    <div
      className={`about-container ${
        ToggleContact && "transition-activate"
      } flex h-[88vh] items-center pt-[10vh]`}
      data-about
    >
      <div className="text-white w-[50%] h-full p-10 overflow-hidden">
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
        <div className="overflow-hidden w-full h-full flex relative">
          <div className={`about-wrapper h-[80%] w-full`}>
            <p className="text-[#842cdd] pl-1">Developer</p>
            <p className={`dark:text-white text-gray-700`}>
              <TypeAnimation
                sequence={["Peyman", 900, "Esmaeilpour", 900]}
                repeat={Infinity}
                speed={40}
                style={{ fontSize: "50px", display: "inline-block" }}
              />
            </p>
            <p className="text-[#8a878a] mb-5 pl-1">
              Coding enthusiast and my development process involves
              understanding the client's requirements, designing capable
              architecture, and creating high quality clean, and maintainable
              code. I love staying up-to-date with the latest Thecnology and
              trends in the industry.
            </p>

            <a
              href="https://github.com/peymanid"
              target="_blank"
              className="flex items-center justify-center w-[40px] text-[#842cdd]"
            >
              <AiFillGithub size={50} />
            </a>
          </div>

          <div className="contact-wrapper dark:text-black w-[95%] h-[89%] bg-aqua p-5 bg-white absolute border-[#1e0c2c] border-[50px] rounded-[20px]">
            <div className="flex flex-col justify-evenly h-full rounded-[20px] overflow-hidden">
              <input className="p-2 bg-transparent border-b-[.5px] outline-none" type="" placeholder="email" />
              <textarea
                className="p-2 resize-none bg-transparent border-b-[.5px] outline-none h-[30%] outline-none"
                type=""
                placeholder="Enter Message.."
              />
              <button className="bg-[#a200ff] text-white p-3">Send</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full">
        <figure className="w-[80%] ml-auto h-full relative astronaut-img rounded-l-[40px]">
          <Image alt="hero-image" src={img} fill className="rounded-l-[40px]" />
        </figure>
      </div>
    </div>
  );
};

export default Header;
