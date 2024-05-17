import React from 'react'
import Star from "../assets/star.svg"
import "../Styles/Style.css"
import { main_Resto_url } from '../utils/Constants'
import { useNavigate } from 'react-router-dom'
const Maincard = ({restaurants}) => {
  const {name} = restaurants?.info
  const {cuisines} = restaurants?.info
  const navigate = useNavigate();
  const newcuisine = cuisines.join(", ")
  const handleButtonClick = () => {
    const {id} = restaurants?.info
    navigate(`/menu/${id}`)}
  
  return (
    <div className='maincard-container' onClick={handleButtonClick} >
    <div className='image-container'>
        <img className='img-card' src={main_Resto_url + restaurants?.info?.cloudinaryImageId} alt="this img" />
         <div className='gradient'> </div>
        <div className='offer-highligt'>
          <p className='offer-style'>{restaurants?.info?.aggregatedDiscountInfoV3 == null? " " : restaurants?.info?.aggregatedDiscountInfoV3?.header  + restaurants?.info?.aggregatedDiscountInfoV3?.subHeader}</p>     
        </div>
    </div> 
    <div className='info-container'>
      <p className='resto-name'>{name.length < 20 ? name.substr(0, 21) : name.substr(0, 21) + "..." }</p>   
    
    <div className='rating-distance'>
       <img className="star-icon" src={Star} alt='star'/>
       <p className='rating'>{restaurants?.info?.avgRating}</p>
       <p className='dot'> • </p>
       <p className='distance'>{restaurants?.info?.sla?.slaString}</p>
    </div>
     
      <div className='tags-area-con'>
        <p>{newcuisine.length < 20 ? newcuisine.substr(0, 21) : newcuisine.substr(0, 30) + "..." }</p> 
        <p>{restaurants?.info?.locality}</p>
      </div> 
      </div>
      </div>
    
  )
}

export default Maincard