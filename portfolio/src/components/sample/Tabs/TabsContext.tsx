import {
  useMemo,
    useState,
  } from 'react';
import { TabsContext } from './useTabsContext';

  
  export type TabsContextProps = {
    currentIndex: number
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  }
  
  type TabsProviderProps = {
    readonly children: React.ReactNode
  }
  

  



function TabsProvider({ children }: TabsProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const value = useMemo(() => ({ currentIndex, setCurrentIndex }), [currentIndex, setCurrentIndex])

    return (
        <TabsContext.Provider value={value}>
            {children}
        </TabsContext.Provider>
    )
}
  
  export default TabsProvider
