import Header from "./Header";
import SideNav from "./SideNav";
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
