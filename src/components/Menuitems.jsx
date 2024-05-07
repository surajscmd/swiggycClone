import React from 'react'
import veg from "../assets/veg.png"
import nonveg from "../assets/non-veg.png"


const Menuitems = () => {
  return (
    <div className='menuitem-container' >
       <div className='left-continer'>
         <div>
            <img className='veg-icon' src={veg} alt="veg" />
            {/* <img className='veg-icon' src={nonveg} alt="non-veg" /> */}
        </div>
        <div>
          <p className='item-name'>Melts 3 Course Meal for 1 Non-Veg</p>
          <p className='item-price'>Rs. 359</p>
        </div>
        <div>
            <p className='item-discripton'>
              Serves 1 | The perfect "Me Time" meal. Choose your favourite Melts & Fries accompanied with 1 Pepsi PET.
              Cheezy Cheese Chicken Melts : (268 Kcal/100g), Loaded BBQ Non-Veg Melts : (330 Kcal/100g), Chicken Tikka Keema Melts : 
              (283 Kcal/100g).
            </p>
        </div>
       </div>
       <div className='right-continer'>
           <img className='item-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/26d48552-a554-4b30-93d0-7462c255adc2_cc625cc1-b13b-44d4-a394-969d224b4c6c.jpg_compressed" alt="veg" />
           <div className='btn-container'>
            <button className=' btn  add-btn'>ADD</button>
            <button className=' btn  remove-btn'>REMOVE</button>
           </div>
       </div>
    </div>
  )
}

export default Menuitems