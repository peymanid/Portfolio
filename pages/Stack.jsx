import Card from "react-animated-3d-card";
import stack from "@/public/stack.json";
import Image from "next/image";
import { useRef, useEffect } from "react";

const Stack = () => {
  const observer = useRef();
  const stackSection = useRef();
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (elements) => {
        elements.forEach((element) => {
          if (element.isIntersecting)
            stackSection.current.classList.add("active");
          else stackSection.current.classList.remove("active");
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
      className="stack-section w-[97%] min-h-screen flex flex-wrap items-center justify-start"
      data-stack
      ref={stackSection}
    >
      <div className="w-[65%] flex flex-wrap items-center justify-center">
        {stack.slice(0, 8).map((item, index) => {
          return (
            <div key={index} className="w-[20%] mr-5 my-5">
              <Card
                style={{
                  width: "100%",
                  backgrgoundColor: "black",
                  height: "200px",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <figure className="w-[100px] relative">
                    <Image
                      alt="language-img"
                      src={item.img}
                      width={100}
                      height={100}
                    />
                  </figure>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="w-[35%]">
        <h1 className="stack-title dark:text-white text-black uppercase text-7xl text-center">
          Stack
        </h1>
      </div>
    </div>
  );
};

export default Stack;
