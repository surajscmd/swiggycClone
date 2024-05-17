import React, { useState } from 'react'
import Itemfooter from '../components/Itemfooter'
import useMenu from '../Hooks/useMenu'
import { useParams } from 'react-router-dom';
import Items from '../components/Items';
import HeadLine from '../components/HeadLine';
import Menuitemlist from './Menuitemlist';
import Discountelement from './Discountelement';
import Subliner from '../components/Subliner';
import Shimmercard from '../components/Shimmercard';
import Shimmer from '../components/Shimmer';
 
const Menupage = () => {
  const { resId } = useParams();
  
  const resInfo = useMenu(resId);
  console.log(resInfo);
  
  const[isveg , setisveg] = useState(false);

  const onlyVeg =  () => {
    if(!isveg){
      setisveg(true)
    }
    else{
      setisveg(false)
    }
    
  }
  if (!resInfo) return (
    <div className='section-one'>
      <div className='rectangelshimmer'>
         <div className='shim-wid'>
          <Shimmer/>
        </div>
        {[...Array(6)].map((e,i)=><Shimmercard key={i}/>)}
      </div>
    </div>
    
  )
  return (
    <div>
       <div className='section-one'>
        <div className='sec-one-align'>
             <Subliner props={resInfo?.cards[2]?.card?.card?.info?.name} /> 
             <Items  info={resInfo?.cards[2]?.card?.card?.info}/>
        </div>    
       </div>

       <div className='section-one'>
           <Discountelement info={resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle}  />
       </div>

      <div className='section-one'>
         <div className='menu-continer-sec'> 
          <p className='menu-name'>----MENU----</p> 
          <div> 
            <button className={ !isveg? "only-veg" : "veg-nonveg"} onClick={onlyVeg}>{!isveg? "Only Veg" :  "Veg & Non-Veg"}</button>
            <Menuitemlist info={resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR} isVeg={isveg}  />
          </div>
         
         </div>
      </div>
       
        <div className='footer-menu'>
             <Itemfooter info={resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR}/>
        </div>     
    </div>
  )
}

export default Menupage