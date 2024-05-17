import React from 'react'
import Play from '../assets/play_store.avif';
import App from '../assets/app_store.avif';


const Itemfooter = ({info}) => {
  return (
    <div className='item-footer-container'>
      <div className='flex-v'>
          <img className='fassi-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="" />
          <p className='name-resto'>{info?.cards[info?.cards?.length-2]?.card?.card?.text[0]}</p>
      </div>
        
         <div className='resto-addrs'>
            <p className='name-resto'>{info?.cards[info?.cards?.length-1]?.card?.card?.name}</p>
            <p className='addres-resto'>{info?.cards[info?.cards?.length-1]?.card?.card?.completeAddress}</p>
            <p className='addres-resto'>{info?.cards[info?.cards?.length-1]?.card?.card?.area}</p>
        </div>
        
         <div className='play-iem-fotr'>
            <p className='itm-for-heading'>For better experience,download the Swiggy app now</p>
            
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='blank'>
        <img className='item-img'  src={Play} alt="play banner" /></a>
           
           
        <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target='blank'>
        <img className='item-img' src={App} alt="App banner"  /></a>
        </div>   
    </div>
  )
}

export default Itemfooter