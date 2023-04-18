import { ModeContext } from "./_app.js";
import { useContext } from "react";
import { useSmallScreen } from "/Hooks/useSmallScreen";
import { RxCross2 } from "react-icons/rx";

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
      className={`backdrop-blur-lg dark:text-white text-black w-[93%] h-screen lg:h-[10vh] flex justify-between fixed top-0 z-[1]`}
    >
      {isSmallScreen && (
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <AiOutlineMenu size={40} onClick={() => setNavToggle(true)} />
        </div>
      )}
      <div
        className={`flex flex-col transition-all lg:flex-row nav-section-wrapper overflow-hidden ${
          navToggle ? "w-auto" : "w-[0px]"
        }`}
      >
        <div>
          {isSmallScreen && (
            <RxCross2 size={30} onClick={() => setNavToggle(false)} />
          )}
        </div>
        <div
          className="w-[200px] h-[100px] lg:h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("about");
            setToggleContact(false);
          }}
        >
          <p className="relative">About</p>
        </div>
        <div
          className="w-[200px] h-[100px] lg:h-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            stackDisplay("stack");
            setToggleContact(false);
          }}
        >
          <p className="relative">Stack</p>
        </div>
        <div
          className="contact h-[100px] w-[200px] lg:h-full flex items-center justify-center"
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
