import React, { useEffect, useState } from 'react'
import veg from "../assets/veg.png"
import nonveg from "../assets/non-veg.png"
import { MENU_ITEMS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addcart , removeFromCart, decrementQuantity} from "../redux/Cartslice"

const Menuitems = ({info}) => {
  
  const cartitems = useSelector((store)=> store.cart.cartItems)
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("0");
  const[add ,setadd] = useState(false)
  useEffect(() =>  {
      const index = cartitems.findIndex((item) => item?.card?.info?.id === info?.card?.info?.id)
      if (index !== -1) {
        const itemInCart = cartitems[index];
        setQuantity(itemInCart.quantity.toString());
      } else {
        setQuantity("0");
      } 
  }, [add]);
  const handleAddItem = (info) => {
    dispatch(addcart(info));
    setadd(!add)
  };
  const handledecrementItem = (info) => {
    dispatch(decrementQuantity(info));
    setadd(!add)
  };
  return (

    <div>
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
            <button  className='small-btn' onClick={() => handledecrementItem(info)}> - </button>
            <button className={cartitems.find((item) => info?.card?.info?.id === item?.card?.info?.id) ? "btn added-btn" :'btn add-btn'} 
            onClick={() => handleAddItem(info)}>{cartitems.find((item) => info?.card?.info?.id === item?.card?.info?.id) ? quantity : "ADD"}</button>
            <button className='small-btn' onClick={() => handleAddItem(info)}> + </button>
           </div>
       </div>
    </div>
    </div>
    
  )
}

export default Menuitems