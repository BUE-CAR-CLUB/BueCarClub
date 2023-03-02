import React, { useContext } from "react";
import CarNav from "./CarNav/CarNav"
import { CarContext } from "../../CarContext";
import CarAdd from "./CarFooter/CarAdd/CarAdd";



import CarList from "./CarList/CarList";
import CarMain from "./CarMain/CarMain";


const CarTable = () => {
  const { cars } = useContext(CarContext);
  

  return <div>
    <CarNav/>
    <CarMain/>
    <CarList/>
    <CarAdd/>
   
  </div>;
};

export default CarTable;
