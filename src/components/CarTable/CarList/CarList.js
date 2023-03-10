import React, { useContext } from "react";
import { CarContext } from "../../../CarContext";
import CarCard from "./CarCard/CarCard";

const CarList = () => {
  const { cars } = useContext(CarContext);
  const renderCars = cars.map((car) => {
    // Arabaların verileri map ile dönüldü.Her araba için CarCard componenti oluşturuldu.
    return <CarCard key={car.id} car={car} />;
  });
  // Aşağıda ise CardComponentlerini bir div'e sardık.
  return (
    <div className="car-list" id="car-list">
      {renderCars}
    </div>
  );
};

export default CarList;
