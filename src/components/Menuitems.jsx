import React from 'react'
import veg from "../assets/veg.png"
import nonveg from "../assets/non-veg.png"
import { MENU_ITEMS } from '../utils/Constants'


const Menuitems = ({info}) => {
  return (
    <div className='menuitem-container' >
       <div className='left-continer'>
         <div>
            {info?.card?.info?.isVeg == 1?  <img className='veg-icon' src={veg} alt="veg" /> :<img className='veg-icon' src={nonveg} alt="non-veg" />}    
        </div>
        <div>
          <p className='item-name'>{info?.card?.info?.name}</p>
          <p className='item-price'>₹ {((info?.card?.info?.defaultPrice) / 100) || ((info?.card?.info?.price) / 100)}</p>
          
        </div>
        <div>
            <p className='item-discripton'>
            {info?.card?.info?.description}
            </p>
        </div>
       </div>
       <div className='right-continer'>
           <img className='item-menu-img' src={MENU_ITEMS + info?.card?.info?.imageId} alt="" />
           <div className='btn-container'>
            <button className=' btn  add-btn'>ADD</button>
            <button className=' btn  remove-btn'>REMOVE</button>
           </div>
       </div>
    </div>
  )
}

export default Menuitems