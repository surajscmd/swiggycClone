import React, { useEffect, useState ,useMemo} from 'react'
import { useSelector } from 'react-redux'

const Bill = () => {
    const cartitems = useSelector((store)=> store.cart.cartItems)
    const deliveryCharges = useSelector((store)=> store.navdetails.value)
    let induvisualTotal =   useMemo(() =>(cartitems.map((data)=>((((data?.card?.info?.defaultPrice) / 100) || ((data?.card?.info?.price) / 100))) * data?.quantity)), [cartitems])
    let totalsum = useMemo(() =>(induvisualTotal.reduce((a,b) => a+b, 0)), [cartitems])
    const finalsum = parseFloat(totalsum).toFixed(2) 
    const gst =   useMemo(() =>((totalsum * 3)/100), [cartitems]); 
    const tax = parseFloat(gst).toFixed(2) 
    let priceTopay = parseFloat(gst + totalsum + deliveryCharges);  
    priceTopay = priceTopay.toFixed(2)
    if (cartitems.length == 0) return (
        <div className='bill-container'>
                <p className='price-topay-detail'>Your Bill</p>
                <div className='bill-detail-sec'>
                <p className='price-topay-detail'>Find your favorite food and add it to your cart.</p>
                </div>
            </div>
      )
       return (
    <div className='bill-container'>
        <p className='price-topay-detail'>Your Bill</p>
       <div className='bill-detail-container'>
          {cartitems.map((data) => (   
          <div className='bill-detail-sec' key={data?.card?.info?.id}>   
            <p className='bill-del-lg'> {data?.card?.info?.name.length < 40 ? data?.card?.info?.name.substr(0, 41) : data?.card?.info?.name.substr(0, 41) + "..." }</p> 
            <p className='bill-del'>{((data?.card?.info?.defaultPrice) / 100) || ((data?.card?.info?.price) / 100)} X {data?.quantity}</p>
            <p className='bill-del'>₹{((((data?.card?.info?.defaultPrice) / 100) || ((data?.card?.info?.price) / 100)) * data?.quantity).toFixed(2)}</p>      
           </div> ))}
       </div>
        <div className='tol-det-container'>
            <p className='price-detail'>Total Price </p>
            <p className='sum-items'>{finalsum}</p>
        </div>
        <div className='tol-det-container'>
            <p className='price-detail'>GST</p>
            <p className='sum-items'>{tax}</p>
        </div>
        <div className='tol-det-container'>
            <p className='price-detail'>Delivery charges</p>
            <p className='sum-items'>{deliveryCharges}</p>
        </div>
        <div className='tol-det-container bordrer'>
            <p className='price-topay-detail'>Price to Pay</p>
            <p className='price-topay-detail'>{priceTopay}</p>
        </div>
        <div className='tol-det-container btn-con'>
             <button className='login-btn'> Proceed to Pay</button>
        </div>
    </div>
  )
}

export default Bill