import React from 'react'
import Play from '../assets/play_store.avif';
import App from '../assets/app_store.avif';

const PlaystoreFlex = () => {
  return (
    <div className='play-container'>
        <p className='play-heading'>For better experience,download the Swiggy app now</p>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='blank'>
        <img className='play-img'  src={Play} alt="play banner" /></a>
        
        <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target='blank'>
        <img className='play-img' src={App} alt="App banner"/></a>
    </div>
  )
}

export default PlaystoreFlex