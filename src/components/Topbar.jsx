import React from 'react'
import header from "../assets/header.avif"
const Topbar = () => {
  return (
    <div className='header-container'>
        <div className='left-container-top'>
            <h1 className='header-heading'>Restaurants Near Me</h1>
            <svg  width="120px" height="10px" viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" stroke-width="1.5"></path></svg>
        </div>
        <div className='right-container-top'>
            <img className='header-img' src={header} alt="." />
       </div>
       </div>
         )}

export default Topbar

