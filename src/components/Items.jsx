import React, { useEffect, useMemo } from 'react'
import Star from "../assets/star.svg"
import Cycle from "../assets/cycle.avif"
import clock from "../assets/clock-color-icon.svg"
import { main_Resto_url } from '../utils/Constants'
import { addvalue } from '../redux/Navslice'

import { useDispatch } from 'react-redux'
const Items = ({info}) => {
  const charges =  useMemo(() => Math.floor(Math.random() * (80 - 40 + 1) + 40), [info?.avgRatingString]); 
  const time = ["10-15", "15-20", "20-25", "25-30", "30-35", "35-40", "45-50"]
  const randomIndex = useMemo(() => Math.floor(Math.random() * time.length), [info?.avgRatingString]);
  const distance =  useMemo(() => (Math.random() * (3.2 - 1.2 + 1) + 1.2).toFixed(1), [info?.avgRatingString])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addvalue(charges))
  }) , [charges];

  
  return (  
    <div className='Resto-item-container'>
       <div className='second-continer'>

        <div className='item-container-flex'>
          <div>
        <div className='rating-container'>
            <img className="star-icon" src={Star} alt='star'/>
            <div className='rate'>{info?.avgRatingString}</div>   
            <p className='dot'> • </p>
            <p className='for-two' >{info?.costForTwoMessage}</p>   
        </div>
           <p className='locality-itm'>{(info?.areaName === info?.locality) ? info?.areaName : `${info?.areaName}, ${info?.locality}`}</p>
          <p className='cuzens'>{info?.cuisines.join(" , ")}</p>
          
          <div className='icons-container'>
          <div className='strike-rate rate '>{info?.totalRatingsString}</div>
          <div className='flex-horizontel'>
             <img className="clock-icon" src={clock} alt='star'/>
             <p className='time' >Reach By - {time[randomIndex]} min</p>
              
          </div>
          
          <div className='flex-horizontel'>
              <img className="cycle-icon" src={Cycle} alt='star'/>
              <p className='distance'> {distance} kms Distance from You </p>
          </div>

          </div >
          </div>
          <div>
                  <img className="resto-iem-img" src={main_Resto_url +info?.cloudinaryImageId} alt='star'/>
          </div>
          </div>
            <p className='delivery-charge' >₹{charges} Delivery fee will apply</p>
        
               
        </div>
    </div>
  )
}

export default Items