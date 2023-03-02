import React from "react";
import aboutLogoFoto from "../../../resimler/BUE.png";

const CarMain = () => {
  return (
    <>
      <div className="welcome" id="welcome">
        <div className="welcomeMain">
          <div className="welcomeLeft">
            <h1>WELCOME </h1>
            <h1>CLASSIC CAR</h1>
            <h1>SHOWROOM</h1>
            <p>
              Welcome to our classic car showroom, where timeless elegance and
              unmatched craftsmanship come together to create automotive
              masterpieces. Our collection of vintage vehicles is a testament to
              the enduring appeal of classic cars, and we take pride in curating
              only the finest examples for our discerning clients. Whether
              you're a seasoned collector or a passionate enthusiast, our
              showroom offers a rare opportunity to own a piece of automotive
              history that will be cherished for generations to come. Come visit
              us and experience the magic of classic cars firsthand
            </p>
          </div>
          <div className="welcomeRight">
            <img
              src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="aboutMain">

          <div className="aboutLeft">
            <img
              className="img-responsive"
              src={aboutLogoFoto}
              alt="aboutfoto"
            />
          </div>

          <div class="aboutRight">
                <h1>About Me</h1>
                <p>Hey I am jaya.We've rounded up our 60 best, easy dinner recipes! From grilled steak to braised chickpeas to allll the sheet pan dinners—we've got you covered. You don't have to drop major dough to make something delicious for dinner. We'​ve got you covered for dinner every week of the year with ... </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default CarMain;
