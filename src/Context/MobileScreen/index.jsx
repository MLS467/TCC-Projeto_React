// ScreenContext.jsx
import { useContext, useEffect, useState } from "react";
import { ScreenContext } from "./ScreenContext";

export function ScreenProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  return useContext(ScreenContext);
}
