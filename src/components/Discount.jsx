import React from 'react'
import Genaric from "../assets/generic.avif"
import { DISCOUNT_URL } from '../utils/Constants'
const Discount = ({infors}) => {
  return (
    <div className='discount-ult-box'>
       <img className='discount-img' src={DISCOUNT_URL + infors?.info?.offerLogo} alt={Genaric} />
       <div className='flex-vertical'>
           <p className='dis-row-one'> {infors?.info?.header}</p>
           <p className='dis-row-two'> {infors?.info?.couponCode}</p>
       </div>
       
    </div>
  )
}

export default Discount