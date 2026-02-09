import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
  } from 'react';
  import React from 'react';

  type ButtonToggleContextProps = {
    currentIndex: number
    setCurrentIndex: Dispatch<SetStateAction<number>>
  }

    type ButtonToggleProviderProps = {
        children: ReactNode
    }

    const initialContext: ButtonToggleContextProps = {
        currentIndex: 0,
        setCurrentIndex: () => {},
    }

const ButtonToggleContext = createContext<ButtonToggleContextProps>(initialContext)

function ButtonToggleProvider({ children }: ButtonToggleProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <ButtonToggleContext.Provider value={{ currentIndex, setCurrentIndex }}>
            {children}
        </ButtonToggleContext.Provider>
    )
}

export default ButtonToggleProvider

export function useButtonToggleContext(): ButtonToggleContextProps {
    const context = useContext(ButtonToggleContext)
    if (context === undefined) {
      throw new Error('useButtonToggle must be used within a ButtonToggleProvider')
    }
    return context
}