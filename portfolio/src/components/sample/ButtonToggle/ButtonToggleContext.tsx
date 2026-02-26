import {
    useMemo,
    useState,
  } from 'react';
import { ButtonToggleContext } from './useButtonToggleContext';
 

 export interface ButtonToggleContextProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  }

   interface ButtonToggleProviderProps {
        readonly children: React.ReactNode;
    }



function ButtonToggleProvider({ children }: ButtonToggleProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const value = useMemo(
        () => ({ currentIndex, setCurrentIndex }),
        [currentIndex, setCurrentIndex]
    );

    return (
        <ButtonToggleContext.Provider value={value}>
            {children}
        </ButtonToggleContext.Provider>
    )
}

export default ButtonToggleProvider