import React from 'react'
import Topbar from '../components/Topbar'
import PlaystoreFlex from '../components/PlaystoreFlex'
import Footer from '../components/Footer'
import Topslider from './Topslider'
import Topchain from './Topchain'
import Restolist from './Restolist'
import Linktabs from './Linktabs'


const Restopage = () => {
  return (
    <div>
        <div>
        <Topbar/>
        </div> 
        <div className='resto-mid-sec'>
         <div className='resto-banners'>
          <Topslider/>
          <Topchain/>
          <Restolist/>
        </div>
        <div>
           <Linktabs/>
        </div>     
        
        </div>   
          
        <div>
           <PlaystoreFlex/>
           <Footer/>
        </div>
        
    </div>
  )
}

export default Restopage