import { createContext, useState } from "react";


export const CarContext=createContext();

export const CarProvider=({children})=>{
    const [cars,setCars]=useState([])


    const fetchCars= async ()=> {
        
    }
    
    return (
        <CarContext.Provider value={{cars,setCars}}>
            {children}
        </CarContext.Provider>
    )
}