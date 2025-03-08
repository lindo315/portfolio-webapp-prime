import { createContext, useContext } from "react";

type ScrollContextType = {
  scrollToProjects: () => void;
};

export const ScrollContext = createContext<ScrollContextType>({
  scrollToProjects: () => {},
});

export const useScroll = () => useContext(ScrollContext);
