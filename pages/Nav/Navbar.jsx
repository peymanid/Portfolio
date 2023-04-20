import { ModeContext } from "/pages/_app.js";
import { useContext, useState } from "react";
import { useSmallScreen } from "/Hooks/useSmallScreen";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { setToggleContact } = useContext(ModeContext);
  const [navToggle, setNavToggle] = useState(false);
  const isSmallScreen = useSmallScreen();
  const stackDisplay = (e) => {
    console.log(e);
    document.querySelector(`[data-${e}]`).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav
      className={`lg:backdrop-blur-lg dark:text-white text-black lg:w-[93%] h-screen lg:h-[10vh] flex justify-between fixed top-0 z-[1]`}
    >
      {isSmallScreen && (
        <div className="absolute z-1 w-[50px] h-[50px] top-5 left-5 flex justify-center items-center">
          <AiOutlineMenu size={30} onClick={() => setNavToggle(true)} />
        </div>
      )}

      <div
        className={`flex flex-col justify-center lg:justify-end items-center transition-all ${
          isSmallScreen ? "dark:bg-black bg-[#d8d8d8]" : "bg-transparent"
        } lg:flex-row nav-section-wrapper overflow-hidden relative z-2 ${
          isSmallScreen ? navToggle ? "w-screen" : "w-[0px]" : "lg:w-[97vw]"
        }`}
      >
        <div className="absolute top-10 left-10 ">
          {isSmallScreen && (
            <RxCross2 size={30} onClick={() => setNavToggle(false)} />
          )}
        </div>
        <div
          className="w-[200px] h-[100px] lg:h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("about");
            setToggleContact(false);
            isSmallScreen && setNavToggle(false)
          }}
        >
          <p className="relative">About</p>
        </div>
        <div
          className="w-[200px] h-[100px] lg:h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("stack");
            setToggleContact(false);
            isSmallScreen && setNavToggle(false)
          }}
        >
          <p className="relative">Stack</p>
        </div>
        <div
          className={`${!isSmallScreen && "large-hoverMode"} contact h-[100px] w-[200px] lg:h-full flex items-center justify-center`}
          onClick={() => {
            stackDisplay("about");
            setToggleContact(true);
            isSmallScreen && setNavToggle(false)
          }}
        >
          <p className="relative">Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
