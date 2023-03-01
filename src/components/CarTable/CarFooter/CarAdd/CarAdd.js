import { useContext, useState } from "react";
import { CarContext } from "../../../../CarContext";

const CarAdd = () => {
  const { createCars } = useContext(CarContext);
  const [model, setModel]= useState("");
  const [year,setYear]=useState("")
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl]=useState("")

const handleChangeModel = (e) =>{
  setModel(e.target.value);
}
const handleChangeYear = (e) =>{
  setYear(e.target.value);
}
const handleChangePrice = (e) =>{
  setPrice(e.target.value);
}
const handleChangeDescription = (e) =>{
  setDescription(e.target.value);
}
const handleChangeUrl = (e) =>{
  setUrl(e.target.value);
}

  return  (

<div className="car-create">
  <form >
  <label> Model :</label>
    <input type="text" value={model} onChange={handleChangeModel} />

    <label> Year :</label>
    <input type="text" value={year} onChange={handleChangeYear} />

    <label> Price :</label>
    <input type="text" value={price} onChange={handleChangePrice} />

    <label> Description :</label>
    <input type="text" value={description} onChange={handleChangeDescription} />

    <label> Url giriniz :</label>
    <input type="text" value={url} onChange={handleChangeUrl} />

  </form>


</div>


  );
};
export default CarAdd;
