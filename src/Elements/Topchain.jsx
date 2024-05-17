import React, { useRef, useState } from 'react'
import Maincard from '../components/Maincard'
import HeadLine from '../components/HeadLine'
import { useSelector } from 'react-redux'
import  leftarrow from '../assets/arrow-left.svg'
import  rightarrow from '../assets/arrow-right.svg'
import Shimmercircle from '../components/Shimmercircle'
const Topchain = () => {
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
  if (!resturents) return (
     <div >
      <div className='circleshimmer'>
        {[...Array(7)].map((e,i)=><Shimmercircle key={i}/>)}
    </div>
    </div>
    
  )  
    return (
    <div className='topsconainer'>
      <HeadLine props={resturents?.data?.cards[1]?.card?.card?.header?.title}/>
       


       
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
      <div class="img-container-two" ref={elementRef}>
            {resturents?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((resto)=>  <Maincard key={resto?.info?.id}  restaurants={resto}  />)}
      </div>

          
      
       </div>

     
      
  
    
  )
}

export default Topchain