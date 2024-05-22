import React from 'react'
import HeadLine from '../components/HeadLine'
import Banners from '../components/Banners'
import { useSelector } from 'react-redux'
import { useRef, useState } from "react";
import  leftarrow from '../assets/arrow-left.svg'
import  rightarrow from '../assets/arrow-right.svg'
import Shimmercircle from '../components/Shimmercircle';
import Shimmer from '../components/Shimmer';
const Topslider = () => {
   
const resturents =  useSelector((store)=>store?.resto?.restaurent)
const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

// console.log(resturents)
if (!resturents) return (
 <div className='shim-wid'>
    <Shimmer/>
 </div>
)      
return (
    <div className='topsconainer'>
        <HeadLine props={resturents?.data?.cards[0]?.card?.card?.header?.title} />
    <div class="button-contianer">
        <button className='btn-lf-rt'
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
            <img  className='arrow-img' src={leftarrow} alt="->" />
        </button>
        
        <button className='btn-lf-rt'
             onClick={() => {
               handleHorizantalScroll(elementRef.current, 25, 100, 10);
             }}
        >
            <img className='arrow-img'  src={rightarrow} alt="<-" />
        </button>
      </div>
      
      <div class="img-container" ref={elementRef}>
            {resturents?.data?.cards[0]?.card?.card?.imageGridCards?.info.map((banner)=><Banners key={banner?.id} link={banner?.action?.link} imageurl={banner?.imageId}  />)}
      </div>         
    </div>         
    
  )
}

export default Topslider