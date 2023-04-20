import stack from "@/public/stack.json";
import { useRef, useEffect } from "react";
import ThreeDStack from "./3DStack";
import { useSmallScreen } from "@/Hooks/useSmallScreen";

const Stack = () => {
  const observer = useRef();
  const stackSection = useRef();
  const isSmallScreen = useSmallScreen();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (elements) => {
        elements.forEach((element) => {
          if (element.isIntersecting)
            stackSection.current.classList.add("active");
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (stackSection) observer.current.observe(stackSection.current);
  }, []);

  return (
    <div
      className={`stack-section ${
        isSmallScreen ? "w-screen" : "w-93vw"
      } w-screen min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start`}
      data-stack
      ref={stackSection}
    >
      <div className="lg:w-[65%] flex flex-wrap items-center justify-center my-5">
        {stack.slice(0, 8).map((item, index) => {
          return <ThreeDStack key={index} item={item} index={index} />;
        })}
      </div>
      <div className="lg:w-[35%]">
        <h1 className="stack-title dark:text-white text-[#444] uppercase text-5xl lg:text-7xl text-center">
          Stack
        </h1>
      </div>
    </div>
  );
};

export default Stack;
