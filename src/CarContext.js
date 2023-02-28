import { createContext, useState } from "react";
import axios from "axios"

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
    console.log(cars);

  const showCars = async () => {
    const response = await axios.get("http://localhost:3001/cars");
    setCars(response.data);
    console.log(response.data)
  };


  return (
    <CarContext.Provider value={{ cars, setCars, showCars }}>
      {children}
    </CarContext.Provider>
  );
};
