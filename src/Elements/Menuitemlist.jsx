import React, { useState } from 'react'
import Menuitems from '../components/Menuitems'
import Subliner from '../components/Subliner'

const Menuitemlist = ({info , isVeg}) => {

  
  return (
    <div>     
       {info?.cards?.map((data) => (
          <div key={data?.card?.card?.info?.id}>
            <Subliner props={data?.card?.card?.title} />       
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

           {data?.card?.card?.itemCards?.filter((itemData) => (isVeg ? itemData?.card?.info?.isVeg === 1 : true))
           .map((data) => (
             <div key={data?.card?.info?.id}>
                <Menuitems info={data} />
               </div>
             ))}
             {data?.card?.card?.categories?.map((catData) => (
                catData?.itemCards?.filter((itemData) => (isVeg ? itemData?.card?.info?.isVeg === 1 : true)).map((m)=>(
                  <div key={m?.card?.info?.id}>
                    <Menuitems info={m} />
                 </div>
                ))
               ))}
    
            </div> 
          ))}    
    </div>
  )
}

export default Menuitemlist