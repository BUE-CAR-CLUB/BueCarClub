import { createContext, useState } from "react";


export const CarContext=createContext();

export const CarProvider=({children})=>{
    const [car,setCar]=useState("")
    
    return (
        <CarContext.Provider value={{car,setCar}}>
            {children}
        </CarContext.Provider>
    )
}