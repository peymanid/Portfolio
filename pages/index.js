import Header from "./Header";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Stack from "./Stack";
import { AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { BsStack } from "react-icons/bs";
import { useRouter } from "next/router";
import { ModeContext } from "./_app.js";
import { useContext } from "react";
export default function Home() {
  const router = useRouter();
  const { ToggleSide, setToggleSide } = useContext(ModeContext);

  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      <div className={`transition-all  w-[93%]`}>
        <Navbar />
        <Header>
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
                understanding the client&apos;s requirements, designing capable
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
                <input
                  className="p-2 bg-transparent border-b-[.5px] outline-none"
                  type=""
                  placeholder="email"
                />
                <textarea
                  className="p-2 resize-none bg-transparent border-b-[.5px] outline-none h-[30%] outline-none"
                  type=""
                  placeholder="Enter Message.."
                />
                <button className="bg-[#a200ff] text-white p-3">Send</button>
              </div>
            </div>
          </div>
        </Header>
        <Stack />
      </div>
      <SideNav>
        <div className="flex flex-col items-center">
          <BsStack size={35} onClick={() => router.push("/CompleteStack")} />
          <h1 className={`${ToggleSide ? "" : "hidden"}`}>Full Stack</h1>
        </div>
      </SideNav>
    </div>
  );
}
