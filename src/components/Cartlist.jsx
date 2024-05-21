import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '../utils/Constants'
import cart from "../assets/cart3.svg"
import emptycart from "../assets/empty-cart.png"
import { addcart , removeFromCart, decrementQuantity, clearcart} from "../redux/Cartslice"
const Cartlist = () => {
    const cartitems = useSelector((store)=> store.cart.cartItems)
    const dispatch = useDispatch();
   
    const handleRemoveItem = (data) => {
        dispatch(removeFromCart(data));
      };
    const handleAddItem = (data) => {
        dispatch(addcart(data));
        
      };
    const handledecrementItem = (data) => {
        dispatch(decrementQuantity(data));
      
      };
      const handleEmptyItem = () => {
        dispatch(clearcart());    
      };

      if (cartitems.length == 0) return (
        <div className='cart-items-container'>
            <div className='empty-container'>
               <p className='cart-heading-empty'>Your Cart empty</p>
               <img className='empty-img' src={emptycart} alt="" /> 
            </div>
        </div>
      )
  return (
    <div className='cart-items-container'>
        <div className='cart-item-header'>
            <img className='cart-icon' src={cart} alt="" /> 
            <p className='cart-heading-empty'>Explore your Items</p>
            <button className='btn cler-btn'  onClick={() => handleEmptyItem()}>Empty Cart</button>
        </div>
    {cartitems.map((data) => (   
       <div  className='cart-items-section' key={data?.card?.info?.id}>
        <div> 
          <img className='cart-item-img' src={MENU_ITEMS + data?.card?.info?.imageId} alt="" />
        </div>   
        <div>
           <p className='cart-item-name'>  {data?.card?.info?.name.length < 40 ? data?.card?.info?.name.substr(0, 41) : data?.card?.info?.name.substr(0, 41) + "..." }</p>
        </div> 
       <p className='cart-item-price'>₹ {((data?.card?.info?.defaultPrice) / 100) || ((data?.card?.info?.price) / 100)}</p>
       <div className='btn-container'>
       <button  className='small-btn' onClick={() => handledecrementItem(data)}> - </button>
       <p className='item-quantity' >{data?.quantity}</p>
       <button className='small-btn' onClick={() => handleAddItem(data)}> + </button>
       </div>
       <button className=' btn  remove-btn' onClick={() => handleRemoveItem(data)}>REMOVE</button> 
       </div>
))}



   </div>
  )
}

export default Cartlist