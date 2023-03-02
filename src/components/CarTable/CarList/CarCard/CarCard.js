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
      <div className="scene">
        <div className="card">
          <div className="card_front_face">
            <img className="carImage" src={car.url} alt="resim" />
          </div>

          <div className="card_back_face">
            <h3>{car.model}</h3>
            <h3>{car.year}</h3>
            <h3>{car.price}</h3>
            <h3>{car.description}</h3>
          </div>
          
        </div>
      </div>
    );
  };
  let content = goster();
  if (showEdit) {
    content = <CarEdit car={car} onSubmit={handleSubmit} />;
  }
  return (
    <div className="car-card">
      {content}
      <div className="actions">
        
        <div className="buttons">
        <button className="btn" onClick={handleEditClick}>
          EDIT
        </button>
        <button className="btn" onClick={handleDeleteClick}>
          DELETE
        </button>

        </div>
       
      </div>
    </div>
  );
};

export default CarCard;
