import { createContext, useContext, useEffect, useRef, useState } from "react";



const mainContext = createContext(null);



export const MainContextProvider = ({children}) => {

    const [cursorRadius, setCursorRadius] = useState({value : 50})
    const [cursorPos, setCursorPos] = useState({x : 0, y : 0})

    const cursorRadiusRef = useRef({value : 50});

    const contextValue = {
        cursorRadius, setCursorRadius,
        cursorPos, setCursorPos,
        cursorRadiusRef
    }



    useEffect(() => {
        
        const mousemoveHandler = (e) => {
            setCursorPos({x : e.clientX, y : e.clientY})
        }

        window.addEventListener("mousemove", mousemoveHandler);

        return () => window.removeEventListener("mousemove", mousemoveHandler);
    }, [])

    return <mainContext.Provider value={contextValue}>{children}</mainContext.Provider>
}


export function useMainContext() {
    const context = useContext(mainContext);

    if(!context)throw new Error("useMainContext must be within MainContextProvider.");

    return context

}