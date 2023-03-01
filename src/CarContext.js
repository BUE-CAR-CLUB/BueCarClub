import { createContext, useState } from "react";
import axios from "axios"
import { async } from "q";
import { response } from "express";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
    console.log(cars);

  const showCars = async () => {
    const response = await axios.get("http://localhost:3001/cars");
    setCars(response.data);
    console.log(response.data)
  };
  const deleteCars= async(id)=>{
     await axios.delete(`http://localhost:3001/cars/${id}`);
     const updateCars = cars.filter((car)=>{
       return car.id !==id;
    })
    setCars(updateCars)
}
const editCars= async(id,price,description)=>{
 const response= await axios.put(`http://localhost:3001/cars/${id}`,{
 price: price,
 description: description,
})
const editedCars = cars.map((car)=>{
   if(car.id===id){
  return{...car,...response.data}
  }
  return car;
})
    setCars(editedCars)
}

const createCars= async(id,newModel,newYear,newPrice,newDescription)=>{
const response=await axios.post(` http://localhost:3001/cars`,{
id,
model:newModel,
year:newYear,
price:newPrice,
description:newDescription,
})
    const updatedCars=[...cars, response.data]
     setCars(updatedCars)
}
   
  return (
    <CarContext.Provider value={{ cars, setCars, showCars, deleteCars, editCars, createCars}}>
      {children}
    </CarContext.Provider>
  );
};
