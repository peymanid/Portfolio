import Image from "next/image";
import { useContext } from "react";
import { ModeContext } from "/pages/_app.js";
import img from "@/public/Space-Illustration.png";
import { useSmallScreen } from "@/Hooks/useSmallScreen";

const Header = ({ children }) => {
  const { ToggleContact } = useContext(ModeContext);
  const isSmallScreen = useSmallScreen()
  return (
    <div
      className={`about-container ${
        ToggleContact && "transition-activate"
      } flex h-screen lg:h-[88vh] items-center pt-[10vh]`}
      data-about
    >
      <div className="text-white lg:w-[50%] h-full p-10 overflow-hidden">
        {children}
      </div>

      {!isSmallScreen && (
        <div className="w-[50%] h-full">
          <figure className="w-[80%] ml-auto h-full relative astronaut-img rounded-l-[40px]">
            <Image
              alt="hero-image"
              src={img}
              fill
              className="rounded-l-[40px]"
            />
          </figure>
        </div>
      )}
    </div>
  );
};

export default Header;
