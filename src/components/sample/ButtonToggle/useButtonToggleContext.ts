import { createContext, useContext } from "react";
import type { ButtonToggleContextProps } from "./ButtonToggleContext";
const initialContext: ButtonToggleContextProps = {
  currentIndex: 0,
  setCurrentIndex: () => {},
};

export const ButtonToggleContext =
  createContext<ButtonToggleContextProps>(initialContext);
export function useButtonToggleContext(): ButtonToggleContextProps {
  const context = useContext(ButtonToggleContext);
  if (context === undefined) {
    throw new Error(
      "useButtonToggle must be used within a ButtonToggleProvider",
    );
  }
  return context;
}
