import { createContext, useState } from "react";
import axios from "axios";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  const showCars = async () => {
    const response = await axios.get("http://localhost:3001/cars");
    setCars(response.data);
    console.log(response.data);
  };
  const deleteCars = async (id) => {
    await axios.delete(`http://localhost:3001/cars/${id}`);
    const updateCars = cars.filter((car) => {
      return car.id !== id;
    });
    setCars(updateCars);
  };
  const editCars = async (
    id,
    model,
    year,
    url,
    editedPrice,
    editedDescription
  ) => {
    const response = await axios.put(`http://localhost:3001/cars/${id}`, {
      model,
      year,
      url,
      price: editedPrice,
      description: editedDescription,
    });
    const editedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, ...response.data };
      }
      return car;
    });
    setCars(editedCars);
  };

  const createCars = async (
    newModel,
    newYear,
    newPrice,
    newDescription,
    newUrl
  ) => {
    const response = await axios.post(` http://localhost:3001/cars`, {
      model: newModel,
      year: newYear,
      price: newPrice,
      description: newDescription,
      url: newUrl,
    });
    const updatedCars = [...cars, response.data];
    setCars(updatedCars);
  };

  return (
    <CarContext.Provider
      value={{ cars, setCars, showCars, deleteCars, editCars, createCars }}
    >
      {children}
    </CarContext.Provider>
  );
};
