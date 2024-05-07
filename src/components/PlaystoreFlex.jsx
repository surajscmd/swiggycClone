import React from 'react'
import Play from '../assets/play_store.avif';
import App from '../assets/app_store.avif';

const PlaystoreFlex = () => {
  return (
    <div className='play-container'>
        <p className='play-heading'>For better experience,download the Swiggy app now</p>
        <img className='play-img'  src={Play} alt="play banner" />
        <img className='play-img' src={App} alt="App banner"  />
    </div>
  )
}

export default PlaystoreFlex