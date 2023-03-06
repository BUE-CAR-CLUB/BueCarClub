import React from "react";

const CarMain = () => {
  return (
    <>
      <div className="welcome" id="welcome">
        <div className="welcomeMain">
          <div className="welcomeLeft">
            <h1>WELCOME ...</h1>
            <h3>BUE CLASSIC CAR SHOWROOM</h3>
            <p>
              Welcome to our classic car showroom, where timeless elegance and
              unmatched craftsmanship come together to create automotive
              masterpieces. Our collection of vintage vehicles is a testament to
              the enduring appeal of classic cars, and we take pride in curating
              only the finest examples for our discerning clients.
            </p>
          </div>
          {/* <div className="welcomeRight">
            <img
              src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div> */}
        </div>
      </div>

      <div className="about" id="about">
        <div className="aboutMain">
            
          <div className="aboutLeft">
            {/* <img
              className="img-responsive"
              src="https://wallpapercave.com/dwp2x/yCtABom.jpg"
              alt="aboutfoto"
            /> */}
          </div>

          <div class="aboutRight">
            <h1>About Me</h1>
            <p>
              We are a team of automotive enthusiasts who strive to preserve the
              original design and unique character of classic cars. Our
              collection consists of the most exceptional and rare examples,
              with each vehicle carefully selected and restored. We take pride
              in offering high-quality classic cars to our clients and work to
              preserve automotive history with those who share our passion. We
              invite you to visit our showroom and take a step into the unique
              world of classic cars.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarMain;
