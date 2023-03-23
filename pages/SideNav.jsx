import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";

const SideNav = () => {
  return (
    <div
      className={`transition-all w-[7%] h-screen fixed bottom-0 right-0  dark:bg-[#a200ff28] bg-[#a200ff] flex flex-col items-center justify-between text-white py-3`}
    >
      <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer">
        <BsGrid3X3GapFill size={35} />
      </div>

      <div className="">
        <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#962fbf]">
          <AiOutlineInstagram size={23} />
        </div>
        <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#0072b1]">
          <AiOutlineLinkedin size={23} />
        </div>
        <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#4267B2]">
          <FiFacebook size={23} />
        </div>
        <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer hover:text-[#1DA1F2]">
          <FiTwitter size={23} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
