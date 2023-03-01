import React, { useContext, useState } from 'react'
import { CarContext } from '../../../../CarContext'
import CarEdit from './CarEdit'

const CarCard = ({car}) => {
  const [showEdit,setShowEdit]=useState(false)
  const {deleteCars}=useContext(CarContext)


const handleSubmit=()=>{
  setShowEdit(false)
}
const handleEditClick=()=>{
  setShowEdit((p)=>!p)
}
const handleDeleteClick=()=>{
  deleteCars(car.id)
}


let content=<h3>{car.model}</h3>
if(showEdit){
  content=<CarEdit car={car} onSubmit={handleSubmit}/>
}

  return (
    <div className='car-card'>
      {content}
      <img src="#" alt="resim " />
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>EDIT</button>
        <button className='delete' onClick={handleDeleteClick}>DELETE</button>
      </div>
    </div>
  )
}

export default CarCard