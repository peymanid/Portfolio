import Header from "./Header";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";

export default function Home() {
  const [ToggleMode, setToggleMode] = useState(true);
  const [ToggleSide, setToggleSide] = useState(false);

  useEffect(() => {
    if (ToggleMode)
      document.querySelector("body").style.backgroundColor = "var(--dark-bg)";
    else
      document.querySelector("body").style.backgroundColor = "var(--light-bg)";
  }, [ToggleMode]);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className={`transition-all ${ToggleSide ? "w-[85vw]" : "w-[93vw]"} relative`}>
        <Navbar ToggleMode={ToggleMode} setToggleMode={setToggleMode} />
        <Header ToggleMode={ToggleMode} setToggleMode={setToggleMode} />
      </div>

      <div
        className={`transition-all ${
          ToggleSide ? "w-[15vw]" : "w-[7vw]"
        } sticky top-0 bg-[#a200ff28] flex flex-col items-start justify-between text-white py-3`}
      >
        <div className="h-[50px] w-[60px] flex items-center justify-center cursor-pointer">
          <BsGrid3X3GapFill
            size={35}
            onClick={() => setToggleSide(!ToggleSide)}
          />
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
    </div>
  );
}
