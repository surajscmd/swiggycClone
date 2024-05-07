import React from 'react'
import Genaric from "../assets/generic.avif"
const Discount = () => {
  return (
    <div className='flex-horizontel border'>
       <img className='discount-img' src={Genaric} alt="this img" />
       <div className='flex-vertical'>
           <p className='dis-row-one'> 50% Off Upto ₹100</p>
           <p className='dis-row-two'> USE SWIGGY50</p>
       </div>
       
    </div>
  )
}

export default Discount