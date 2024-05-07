import React from 'react'
import Star from "../assets/star.svg"
import "../Styles/Style.css"
const Maincard = () => {
  return (
    <div className='maincard-container' >
    <div className='image-container'>
        <img className='img-card' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" alt="this img" />
         <div className='gradient'> </div>
        <div className='offer-highligt'>
          <p className='offer-style'>$100 OFF ABOVE $399</p>     
        </div>
    </div> 
    <div className='info-container'>
      <p className='resto-name'>Andhra Gunpowder</p>   
    
    <div className='rating-distance'>
       <img className="star-icon" src={Star} alt='star'/>
       <p className='rating'>4.5</p>
       <p className='dot'> • </p>
       <p className='distance'>35-40 mins</p>
    </div>
     
      <div className='tags-area-con'>
        <p>Burgers,Beverages,Cafe,Desserts</p>
        <p>Koramangala</p>
      </div> 
      </div>
      </div>
    
  )
}

export default Maincard