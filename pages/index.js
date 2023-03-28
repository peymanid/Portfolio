import Header from "./Header";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Stack from "./Stack";
import { useState, useEffect } from "react";

export default function Home() {
  const [ToggleMode, setToggleMode] = useState(true);
  const [ToggleContact, setToggleContact] = useState(false);

  useEffect(() => {
    if (ToggleMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [ToggleMode]);

  return (
    <div
      className="flex w-full min-h-screen overflow-hidden"
    >
      <div className={`transition-all w-[93%]`}>
        <Navbar ToggleMode={ToggleMode} setToggleMode={setToggleMode} ToggleContact={ToggleContact} setToggleContact={setToggleContact} />
        <Header ToggleMode={ToggleMode} setToggleMode={setToggleMode} ToggleContact={ToggleContact} />
        <Stack />
      </div>

      <SideNav />
    </div>
  );
}
