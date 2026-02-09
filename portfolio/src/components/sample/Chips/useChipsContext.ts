import { createContext, useContext } from "react";
import type { ChipsContextProps } from "./ChipsContext";

const initialContext: ChipsContextProps = {
  currentIndex: 0,
  setCurrentIndex: () => {},
};
export const ChipsContext = createContext<ChipsContextProps>(initialContext);
export function useChipsContext(): ChipsContextProps {
  const context = useContext(ChipsContext);
  if (context === undefined) {
    throw new Error("useChips must be used within a ChipsProvider");
  }
  return context;
}
