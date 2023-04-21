import Header from "./Header/Header";
import Navbar from "./Nav/Navbar";
import SideNav from "./Nav/SideNav";
import Stack from "./Stack/Stack";

import { BsStack } from "react-icons/bs";
import { useRouter } from "next/router";
import { ModeContext } from "./_app.js";
import { useContext } from "react";
import { useSmallScreen } from "@/Hooks/useSmallScreen";
import MainHeader from "./Header/Mainheader";

export default function Home() {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();
  const { ToggleSide } = useContext(ModeContext);

  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      <div className={`transition-all  lg:w-[93%]`}>
        <Navbar />
        <Header>
          <MainHeader />
        </Header>
        <Stack />
      </div>
      {!isSmallScreen && (
        <SideNav>
          <div className="flex flex-col items-center">
            <BsStack
              size={35}
              onClick={() => router.push("/Stack/CompleteStack")}
            />
            <h1 className={`${ToggleSide ? "" : "hidden"}`}>Full Stack</h1>
          </div>
        </SideNav>
      )}
    </div>
  );
}
