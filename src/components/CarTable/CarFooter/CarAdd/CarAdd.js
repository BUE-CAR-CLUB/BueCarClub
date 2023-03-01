import { useContext, useState } from "react";
import { CarContext } from "../../../../CarContext";

const CarAdd = () => {
  const { createCars } = useContext(CarContext);
  const [model, setModel]= useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return <div>CarAdd</div>;
};
export default CarAdd;
