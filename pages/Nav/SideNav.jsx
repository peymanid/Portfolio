import { useContext } from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { ModeContext } from "/pages/_app.js";

const SideNav = ({ children }) => {
  const { ToggleSide, setToggleSide } = useContext(ModeContext);

  return (
    <div
      className={`transition-all duration-[900ms] ${
        ToggleSide ? "w-[23%]" : "w-[7%] dark:bg-[#a200ff28]"
      } transition-all h-screen fixed z-[1] bottom-0 right-0   bg-[#a200ff] flex flex-col items-center justify-between text-white py-3`}
    >
      <div
        className={`transition-all duration-[900ms] ${
          ToggleSide ? "h-[50%]" : "h-[20%]"
        } w-[100px] flex flex-col items-center justify-between cursor-pointer`}
      >
        <div>
          <BsGrid3X3GapFill
            size={35}
            onClick={() => setToggleSide(!ToggleSide)}
          />
        </div>
        {children}
      </div>

      <div
        className={`${
          ToggleSide ? "flex flex-wrap justify-between" : ""
        } w-[50%]`}
      >
        <div
          className={` h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#962fbf]`}
        >
          <a href="https://instagram.com/tolerancing?igshid=YmMyMTA2M2Y=">
          <AiOutlineInstagram size={ToggleSide ? 35 : 23} />
          </a>
        </div>
        <div
          className={`h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#0072b1]`}
        >
          <a href="https://www.linkedin.com/in/peyman-esmailpoor/">
          <AiOutlineLinkedin size={ToggleSide ? 35 : 23} />
          </a>
        </div>
        <div
          className={`h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#4267B2]`}
        >
          <a href="http://www.google.com">
          <FiFacebook size={ToggleSide ? 35 : 23} />
          </a>
        </div>
        <div
          className={`h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#1DA1F2]`}
        >
            <a href="https://stackoverflow.com/questions/57200956/add-link-to-font-awesome-icon-in-reactjs">
            <FiTwitter size={ToggleSide ? 32 : 23}></FiTwitter>
            </a>
            
        </div>
      </div>
    </div>
  );
};

export default SideNav;
