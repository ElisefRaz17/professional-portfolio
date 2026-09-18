import { createContext, useContext } from "react";
import type { TabsContextProps } from "./TabsContext";

const initialContext: TabsContextProps = {
  currentIndex: 0,
  setCurrentIndex: () => {},
};

export const TabsContext = createContext<TabsContextProps>(initialContext);

export function useTabsContext(): TabsContextProps {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
}
