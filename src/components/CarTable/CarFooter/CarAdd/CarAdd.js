import { useContext, useState } from "react";
import { CarContext } from "../../../../CarContext";

const CarAdd = () => {
  // CarContext içerisindeki createcars metodu kullanılması için usecontext yapısı kurgulandı.
  const { createCars } = useContext(CarContext);
  // Car datasında bulunan attributeların usestate yapıları oluşturuldu.
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  // Aşağıdaki 5 metotta kullanıcının girdiği verileri alıp araba attributelarını set etmek için.
  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };
  // Butona tıklandığında createcars metodu çalıştırıldı ve arabanın verileri kaydedilip fomrda bulunan inputlar boşaltıldı.
  const handleSubmit = (e) => {
    e.preventDefault();
    createCars(model, year, price, description, url);
    setModel("");
    setYear("");
    setPrice("");
    setDescription("");
    setUrl("");
  };
  return (
    <div className="car-create" id="carAdd">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <span class="text-center">CAR ADD FORM</span>
          
          <div className="input-container">
            <label> Model :</label>
            <br />
            <input type="text" value={model} onChange={handleChangeModel} />
          </div>

          <div className="input-container">
            <label> Year :</label>
            <br />
            <input type="text" value={year} onChange={handleChangeYear} />
          </div>

          <div className="input-container">
            <label> Price :</label>
            <br />
            <input type="text" value={price} onChange={handleChangePrice} />
          </div>

          <div className="input-container">
            <label> Description :</label>
            <br />
            <input
              type="text"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>

          <div className="input-container">
            <label> Url giriniz :</label>
            <br />
            <input type="text" value={url} onChange={handleChangeUrl} />
          </div>

          <button className="create-button">Add Car</button>
        </form>
      </div>
    </div>
  );
};
export default CarAdd;
