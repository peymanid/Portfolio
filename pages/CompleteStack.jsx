import Header from "./Header";
import SideNav from "./SideNav";
import Card from "react-animated-3d-card";
import stack from "@/public/stack.json";
import Image from "next/image";
import { TfiHome } from "react-icons/tfi";
import { useRouter } from "next/router";
import { ModeContext } from "./_app.js";
import { useContext } from "react";

const CompleteStack = () => {
  const router = useRouter();
  const { ToggleSide, setToggleSide } = useContext(ModeContext);

  return (
    <div>
      <div className={`transition-all w-[93%]`}>
        <Header>
          <div className="flex flex-wrap">
            {stack.map((item, index) => {
              return (
                <div key={index} className="w-[20%] mr-5 my-5">
                  <Card
                    style={{
                      width: "100%",
                      backgrgoundColor: "black",
                      height: "100px",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <figure className="w-[50px] relative flex items-center justify-center">
                        <Image
                          className=""
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
        </Header>
      </div>

      <SideNav>
        <div className="flex flex-col items-center">
          <TfiHome size={35} onClick={() => router.push("/")} />
          <h1 className={`${ToggleSide ? "" : "hidden"}`}>Home</h1>
        </div>
      </SideNav>
    </div>
  );
};

export default CompleteStack;
