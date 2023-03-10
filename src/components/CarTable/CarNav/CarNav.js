import React from "react";
import BUE from "../../../resimler/BUE-3.jpg";

const CarHeader = () => {
  // Burada sayfanın en yukarısında bulunan barda logo için import işlemi yapıldı ve linkler oluşturuldu.
  return (
    <div className="navBar">
      <div className="topNav">
        <div className="logo">
          <img src={BUE} alt="logo" />
        </div>
        <div className="navItems">
          <span>
            {" "}
            <a href="#welcome">Home</a>
          </span>
          <span>
            {" "}
            <a href="#about">About</a>
          </span>
          <span>
            <a href="#car-list">Car List</a>
          </span>
          <span>
            <a href="#carAdd">Car Add</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarHeader;
