import React from 'react'
import BUE from "../../../resimler/BUE-2.png"

const CarHeader = () => {
  return (
    <div className='navBar'>
      <div className='topNav'>
        <div className='logo'>
          <img src={BUE} alt="logo" />
        </div>
        <div className='navItems'>
          <a href="#welcome">Home</a>
          <a href="#about">About</a>
          <a href="#carList">Car List</a>
          <a href="#carAdd">Car Add</a>
        </div>
      </div>

    </div>
  )
}

export default CarHeader