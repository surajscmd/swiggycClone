import React from 'react'
import Play from '../assets/play_store.avif';
import App from '../assets/app_store.avif';


const Itemfooter = () => {
  return (
    <div className='item-footer-container'>
         <img className='fassi-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="" />
         <div className='resto-addrs'>
            <p className='name-resto'>Pizza Hut</p>
            <p className='addres-resto'>#478, 80Ft Road, 17th F main, 6th Block, Koramangala Opp Vasan eye Care, Bangalore</p>
        </div>
        
         <div className='play-iem-fotr'>
            <p className='itm-for-heading'>For better experience,download the Swiggy app now</p>
            <img className='item-img'  src={Play} alt="play banner"/>
            <img className='item-img' src={App} alt="App banner"/>
        </div>   
    </div>
  )
}

export default Itemfooter