import Header from "/pages/Header";
import SideNav from "/pages/SideNav";
import stack from "@/public/stack.json";
import ThreeDStack from "./3DStack";
import { TfiHome } from "react-icons/tfi";
import { useRouter } from "next/router";
import { ModeContext } from "/pages/_app.js";
import { useContext } from "react";

const CompleteStack = () => {
  const router = useRouter();
  const { ToggleSide } = useContext(ModeContext);

  return (
    <div>
      <div className={`transition-all w-[93%]`}>
        <Header>
          <div className="flex flex-wrap">
            {stack.map((item, index) => {
              return <ThreeDStack key={index} item={item} index={index} />;
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
