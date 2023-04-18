import { useState } from "react";

export const useSmallScreen = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const Resize = setState(window.innerWidth)

    Resize()
    window.addEventListener("resize", Resize)
    return () => window.removeEventListener("resize", Resize)
  }, [])

  return state && state <= 1024
};
