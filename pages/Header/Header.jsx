import { useContext } from "react";
import { ModeContext } from "/pages/_app.js";

const Header = ({ children }) => {
  const { ToggleContact } = useContext(ModeContext);
  return (
    <div
      className={`about-container ${
        ToggleContact && "transition-activate"
      } flex h-screen lg:h-[88vh] items-center pt-[10vh]`}
      data-about
    >
      {children}
    </div>
  );
};

export default Header;
