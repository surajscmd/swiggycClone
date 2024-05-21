import React from 'react'
import Cartlist from '../components/Cartlist'
import Bill from '../components/Bill'

const Cartpage = () => {
  return (
    <>
    <div className='card-page-container'>
       <Cartlist/>
        <Bill/> 
    </div>
      
    </>
   
  )
}

export default Cartpage