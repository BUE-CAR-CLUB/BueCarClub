import React, { useContext } from "react";

import { CarContext } from "../../CarContext";

const CarTable = () => {
  const { cars } = useContext(CarContext);
  

  return <div>
    <h1>Aaaaa</h1>
    {cars.map((car)=>{
      return (
        <div key={car.id}>
          <h1>{car.model}</h1>
          <h2>{car.year}</h2>
          <h2>{car.price}</h2>
          <h2>{car.description}</h2>
        </div>
      )
    })}
  </div>;
};

export default CarTable;
