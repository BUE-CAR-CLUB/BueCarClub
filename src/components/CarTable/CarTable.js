import React, { useContext } from "react";

import { CarContext } from "../../CarContext";
import CarAdd from "./CarFooter/CarAdd/CarAdd";
import CarList from "./CarList/CarList";


const CarTable = () => {
  const { cars } = useContext(CarContext);
  

  return <div>
    <h1>Aaaaa</h1>
    <CarList/>
    <CarAdd/>
   
  </div>;
};

export default CarTable;
