import Image from "next/image";
import { useContext } from "react";
import {ModeContext} from "./_app.js";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import img from "@/public/Space-Illustration.png";

const Header = ({ children }) => {
  const {ToggleContact} = useContext(ModeContext)
  return (
    <div
      className={`about-container ${
        ToggleContact && "transition-activate"
      } flex h-[88vh] items-center pt-[10vh]`}
      data-about
    >
      <div className="text-white w-[50%] h-full p-10 overflow-hidden">
        {children}
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
