import React, { useContext, useState } from "react";
import { CarContext } from "../../../../CarContext";
import CarEdit from "./CarEdit";
// Car nesnesi prop olarak fonksiyon içerisine aktarıldı.
const CarCard = ({ car }) => {
  const [showEdit, setShowEdit] = useState(false); // Cardda edit formunun görünürlüğü için state oluşturuldu.
  const { deleteCars } = useContext(CarContext); // deleteCars metodu için context yapısı kullanıldı.

  const handleSubmit = () => {
    setShowEdit(false); // Edit ekranının kapanması için setShowEdit false'a çekildi.
  };
  const handleEditClick = () => {
    setShowEdit((p) => !p); // Edit butonuna tıklandığında caredit açılıp kapanması için gerekli useState döngüsü uygulandı.
  };
  const handleDeleteClick = () => {
    deleteCars(car.id); // Burada delete işlemi için CarContextten deleteCars fonksiyonuna id'si ile erişim gerçekleştiriliyor.
  };
  const goster = () => {
    // Burada card yapısı için gerekli html yapısı oluşturuldu.Cardın ön yüzü ve arka yüzü için divler oluşturuldu. Ön yüzünde sadece resim arka yüzünde ise aracın bilgileri yer aldı.
    return (
      <div className="card">
        <div className="card_front_face">
          <img className="carImage" src={car.url} alt="resim" />
        </div>

        <div className="card_back_face">
          <div className="card_metin">
            <h2 style={{ opacity: 1 }}>
              <span className="card-span">Model:</span> {car.model}
            </h2>
            <h3 style={{ opacity: 1 }}>
              <span className="card-span">Year:</span> {car.year}
            </h3>
            <h3 style={{ opacity: 1 }}>
              <span className="card-span">Price:</span> {car.price}${" "}
            </h3>
            <p style={{ opacity: 1 }}>
              <span className="card-span">Description:</span> {car.description}
            </p>
            <br />
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
  let content = goster(); // Burada aracın tüm içeriği fonksiyon çağırılarak gösteriliyor.
  if (showEdit) {
    //showEdit'in doğru olması durumunda kullanıcı kullanıcının değiştirilmek istenen özellikleri carEdit componentiyle gösterilecektir.
    // Aracın dataları prop olarak aktarıldı
    content = <CarEdit car={car} onSubmit={handleSubmit} />;
  }
  return <div className="car-card">{content}</div>;
};

export default CarCard;
