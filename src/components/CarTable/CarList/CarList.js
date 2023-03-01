import React, { useContext } from 'react'
import { CarContext } from '../../../CarContext'
import CarCard from "./CarCard/CarCard"


const CarList = () => {
  const {cars}=useContext(CarContext)

  const renderCars=cars.map((car)=>{
    return <CarCard key={car.id} car={car}/>
  })
  
  return (
    <div className='car-list'>
      {renderCars}
    </div>
  )
}

export default CarList