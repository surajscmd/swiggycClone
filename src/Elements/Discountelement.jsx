import React, { useRef, useState } from 'react'
import Discount from '../components/Discount'
import  leftarrow from '../assets/arrow-left.svg'
import  rightarrow from '../assets/arrow-right.svg'
import Subliner from '../components/Subliner'
const Discountelement = ({info}) => {

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

  return (
    <div className='discount-slider'>
        
        <div className='display-flex-discoun'>
         <div><Subliner props={"Deals for you"} /></div>
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
      </div>
      
      <div class="img-container-two" ref={elementRef}>
                {info?.offers?.map((data)=> <Discount key={data?.info?.offerIds[0]}  infors={data}/> )}
      </div>         
    
    </div>      
  )
}

export default Discountelement