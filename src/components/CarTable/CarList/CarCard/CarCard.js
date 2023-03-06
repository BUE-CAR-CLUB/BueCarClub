import React, { useContext, useState } from "react";
import { CarContext } from "../../../../CarContext";
import CarEdit from "./CarEdit";

const CarCard = ({ car }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteCars } = useContext(CarContext);

  const handleSubmit = () => {
    setShowEdit(false);
  };
  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };
  const handleDeleteClick = () => {
    deleteCars(car.id);
  };
  const goster = () => {
    return (
      <div className="card">
        <div className="card_front_face">
          <img className="carImage" src={car.url} alt="resim" />
        </div>

        <div className="card_back_face">
          <div className="card_metin">
            <h2><span className="card-span">Model:</span> {car.model}</h2>
            <h3><span className="card-span">Year:</span> {car.year}</h3>
            <h3><span className="card-span">Price:</span> {car.price}$ </h3>
            <p><span className="card-span">Description:</span> {car.description}</p>
            <br />
          </div>

          <div className="actions">
            <div className="buttons ">
             
              <button className="btn" onClick={handleDeleteClick}>
                DELETE
              </button>
              <button className="btn" onClick={handleEditClick}>
                EDIT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  let content = goster();
  if (showEdit) {
    content = <CarEdit car={car} onSubmit={handleSubmit} />;
  }
  return <div className="car-card">{content}</div>;
};

export default CarCard;
