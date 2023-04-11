import { useEffect, useState } from "react";

export const useScrollHook = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const Background = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", Background);

    return () => window.removeEventListener("scroll", Background);
  }, []);
  return scrollPosition;
};
