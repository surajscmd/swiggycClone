import React from 'react'
import Cartlist from '../components/Cartlist'
import Bill from '../components/Bill'
import PlaystoreFlex from '../components/PlaystoreFlex'
import Footer from '../components/Footer'

const Cartpage = () => {
  return (
    <>
    <div className='card-page-container'>
       <Cartlist/>
        <Bill/> 
    </div>
    <div className='cart-footer'>
      <PlaystoreFlex/>
      <Footer/>
    </div>
      
    </>
   
  )
}

export default Cartpage