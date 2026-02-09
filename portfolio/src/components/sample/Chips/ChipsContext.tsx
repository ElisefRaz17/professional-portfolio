import {
    useMemo,
    useState,
  } from 'react';
import { ChipsContext } from './useChipsContext';
  
    export interface ChipsContextProps {
        currentIndex: number;
        setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
    }

    type ChipsProviderProps = {
        readonly children: React.ReactNode
    }




function ChipsProvider({ children }: ChipsProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const value = useMemo(() => ({ currentIndex, setCurrentIndex }), [currentIndex, setCurrentIndex])

    return (
        <ChipsContext.Provider value={value}>
            {children}
        </ChipsContext.Provider>
    )
}

export default ChipsProvider
