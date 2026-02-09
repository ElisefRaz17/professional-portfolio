import React from "react";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
  } from 'react';
  
    type ChipsContextProps = {
        currentIndex: number
        setCurrentIndex: Dispatch<SetStateAction<number>>
    }

    type ChipsProviderProps = {
        children: ReactNode
    }

    const initialContext: ChipsContextProps = {
        currentIndex: 0,
        setCurrentIndex: () => {},
    }

const ChipsContext = createContext<ChipsContextProps>(initialContext)

function ChipsProvider({ children }: ChipsProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <ChipsContext.Provider value={{ currentIndex, setCurrentIndex }}>
            {children}
        </ChipsContext.Provider>
    )
}

export default ChipsProvider

export function useChipsContext(): ChipsContextProps {
    const context = useContext(ChipsContext)
    if (context === undefined) {
      throw new Error('useChips must be used within a ChipsProvider')
    }
    return context
}