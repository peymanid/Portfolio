import "@/styles/globals.css";
import { useState, useEffect, createContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

export const ModeContext = createContext();
export default function App({ Component, pageProps }) {
  const [ToggleMode, setToggleMode] = useState(true);
  const [ToggleContact, setToggleContact] = useState(false);
  const [ToggleSide, setToggleSide] = useState(false);

  useEffect(() => {
    if (ToggleMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [ToggleMode]);

  return (
    <ModeContext.Provider
      value={{
        ToggleMode,
        setToggleMode,
        ToggleContact,
        setToggleContact,
        ToggleSide,
        setToggleSide,
      }}
    >
      <Component {...pageProps} />
      <div className={`bg-[#842cdd] transition-all rounded-[50px] flex justify-center items-center h-[50px] w-[50px] z-[10] fixed bottom-[5%] left-[2%] ml-2`}>
        {ToggleMode ? (
          <IoSunnyOutline
            size={30}
            className="cursor-pointer text-white"
            onClick={() => setToggleMode(false)}
          />
        ) : (
          <BsFillMoonStarsFill
            size={30}
            className="cursor-pointer fill-black"
            onClick={() => setToggleMode(true)}
          />
        )}
      </div>
    </ModeContext.Provider>
  );
}
