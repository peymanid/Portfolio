import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import img from "@/public/Space-Illustration.png";
import { useSmallScreen } from "@/Hooks/useSmallScreen";

const MainHeader = () => {
  const isSmallScreen = useSmallScreen();

  return (
    <>
      <div className="text-white lg:w-[50%] h-full p-10 overflow-hidden">
        <div className="overflow-hidden w-full h-full flex relative">
          <div className={`about-wrapper h-[80%] w-full`}>
            <p className="text-[#842cdd] pl-1">Developer</p>
            <p className={`dark:text-white text-gray-700`}>
              <TypeAnimation
                className="text-4xl lg:text-5xl"
                sequence={["Peyman", 900, "Esmaeilpour", 900]}
                repeat={Infinity}
                speed={40}
                style={{ display: "inline-block" }}
              />
            </p>
            <p className="text-[#8a878a] text-md mb-5 pl-1">
              Coding enthusiast and my development process involves
              understanding the client&apos;s requirements, designing capable
              architecture, and creating high quality clean, and maintainable
              code. I love staying up-to-date with the latest Thecnology and
              trends in the industry.
            </p>

            <div className="flex items-center">
              <Socials />
            </div>
          </div>

          <div className="contact-wrapper dark:text-black w-[95%] h-[89%] bg-aqua p-5 bg-white absolute border-[#1e0c2c] border-[50px] rounded-[20px]">
            <div className="flex flex-col justify-evenly h-full rounded-[20px] overflow-hidden">
              <input
                className="p-2 bg-transparent border-b-[.5px] outline-none"
                type=""
                placeholder="Email"
              />
              <textarea
                className="p-2 resize-none bg-transparent border-b-[.5px] h-[30%] outline-none"
                type=""
                placeholder="Enter Message.."
              />
              <button className="bg-[#a200ff] text-white p-3">Send</button>
            </div>
          </div>
        </div>
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
    </>
  );
};

const Socials = () => {
  const isSmallScreen = useSmallScreen();
  return (
    <>
      <a
        href="https://github.com/peymanid"
        target="_blank"
        className="text-[#842cdd]"
      >
        <AiFillGithub size={40} />
      </a>
      <a
        href={"https://instagram.com/tolerancing?igshid=YmMyMTA2M2Y="}
        class={`text-[#962fbf]`}
      >
        <AiOutlineInstagram size={40} />
      </a>
      <a
        href={"https://www.linkedin.com/in/peyman-esmailpoor/"}
        className={"text-[#0072b1]"}
      >
        <AiOutlineLinkedin size={40} />
      </a>
      {/* {isSmallScreen && (
        </>
        <>
      )} */}
    </>
  );
};
export default MainHeader;
