import {ModeContext} from "./_app.js";
import { useContext } from "react";

const Navbar = () => {
  const {ToggleMode, setToggleMode,ToggleContact, setToggleContact} = useContext(ModeContext)

  const stackDisplay = (e) => {
    console.log(e);
    document.querySelector(`[data-${e}]`).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav
      className={`backdrop-blur-lg dark:text-white text-black w-[93%] h-[10vh] flex justify-between fixed top-0 z-[1]`}
    >
      <div className="w-[150px] h-full flex items-center justify-center"></div>
      <div className="flex nav-section-wrapper">
        <div
          className="w-[200px] h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("about");
            setToggleContact(false);
          }}
        >
          <p className="relative">About</p>
        </div>
        <div
          className="w-[200px] h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("stack");
            setToggleContact(false);
          }}
        >
          <p className="relative">Stack</p>
        </div>
        <div
          className="contact w-[200px] h-full flex items-center justify-center"
          onClick={() => {
            stackDisplay("about");
            setToggleContact(true);
          }}
        >
          <p className="relative">Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
