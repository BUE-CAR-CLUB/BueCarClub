import React, { useState } from 'react'
import CarEdit from './CarEdit'

const CarCard = ({car}) => {
  const [showEdit,setShowEdit]=useState(false)


const handleSubmit=()=>{
  setShowEdit(false)
}



let content=<h3>{car.model}</h3>
if(showEdit){
  content=<CarEdit car={car} onSubmit={handleSubmit}/>
}


  return (
    <div>CarCard</div>
  )
}

export default CarCard