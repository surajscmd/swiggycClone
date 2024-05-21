import React, { useState } from 'react'
import Menuitems from '../components/Menuitems'

import down from '../assets/chevron-double-down.svg'
const Menuitemlist = ({info , isVeg}) => {
 
  const[openAcc , setopenAcc] = useState(false)
 
  const [showIndex, setShowIndex] = useState(null);

  return (
    <div>     
       {info?.cards?.map((data , index) => (
          <div key={data?.card?.card?.info?.id}>

            <div className= {data?.card?.card?.title?  'accordin-con'  : "d-none"}  onClick={() => {setShowIndex(index)
                setopenAcc(!openAcc)
            }}>
                <p className='acorin-headline'>{data?.card?.card?.title}</p>
                <img className='acc-logo' src={down} alt="" />
            </div>
              
             {/* {data?.card?.card?.itemCards?.map((itemData) =>                
                (<div key={itemData?.card?.info?.id}>
                    <Menuitems info={itemData} />
                 </div>
               ))} 
                {data?.card?.card?.categories?.map((catData) => (
                catData?.itemCards?.map((m)=>(
                  <div key={m?.card?.info?.id}>
                    <Menuitems info={m} />
                 </div>
                ))
               ))}  */}
            <div className='center-co'>
          { (showIndex === index )  && (data?.card?.card?.itemCards?.filter((itemData) => (isVeg ? itemData?.card?.info?.isVeg === 1 : true))
           .map((data) => (
             <div key={data?.card?.info?.id}>
                     {  <Menuitems info={data} />}
               </div>
             )))}
             {(showIndex === index)  && (data?.card?.card?.categories?.map((catData) => (
                catData?.itemCards?.filter((itemData) => (isVeg ? itemData?.card?.info?.isVeg === 1 : true)).map((m)=>(
                  <div key={m?.card?.info?.id}>
                   { <Menuitems info={m} />}
                 </div>
                ))
               )))}
               </div>
               </div>
          
          ))}    
    </div>
  )
}

export default Menuitemlist