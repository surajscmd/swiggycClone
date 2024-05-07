import React from 'react'
import HeadLine from './HeadLine'
import Star from "../assets/star.svg"
import Cycle from "../assets/cycle.avif"
import clock from "../assets/clock-color-icon.svg"
const Items = () => {
  return (
    
    <div className='Resto-item-container'>
       <div className='second-continer'>
        <div className='rating-container'>
            <img className="star-icon" src={Star} alt='star'/>
            <div className='rate'>4.1 </div>
            <div className='strike-rate rate '>(100+ ratings)</div>
            <p className='dot'> • </p>
            <p className='for-two' >₹600 for two</p>
            
        </div>
       
        <div>
          <p className='cuzens'>North Indian,Barbecue</p>
          
          <div className='icons-container'>
          <div className='flex-horizontel'>
             <img className="clock-icon" src={clock} alt='star'/>
             <p className='time' >Reach By - 30-35 mins</p>

          </div>

          <div className='flex-horizontel'>
              <img className="cycle-icon" src={Cycle} alt='star'/>
              <p className='distance'> 1.4 kms Distance from You </p>
          </div>
          </div >
          
            <p className='delivery-charge' >₹51 Delivery fee will apply</p>
        </div>
        </div>
    </div>
  )
}

export default Items