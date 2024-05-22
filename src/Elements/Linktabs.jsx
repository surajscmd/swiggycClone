import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Nearme from '../components/Nearme'
import HeadLine from '../components/HeadLine'
import Nearmewide from '../components/Nearmewide'

const Linktabs = () => {
    const resturents =  useSelector((store)=>store?.resto?.restaurent)
    const [showmore , setshowmore] = useState(true);
    const [showmoretwo , setshowmoretwo] = useState(true);
    const num = 12
    
        
      
      
  return (
    <div className='link-containers'>
        <div >
               <HeadLine props={resturents?.data?.cards[6]?.card?.card?.title} />
        <div className='nearme-comtainers'>

               {showmore? resturents?.data?.cards[6]?.card?.card?.brands?.slice(0, num).map((data)=> <Nearme link={data?.link}  text={data?.text} /> ) : resturents?.data?.cards[6]?.card?.card?.brands?.map((data)=> <Nearme link={data?.link}  text={data?.text} /> )  }
               
         
        
          <button className='btn-show' onClick={()=>setshowmore(!showmore)}>{showmore? "showmore" : "showless"}</button> 
          </div>
        </div>

        <div>
               <HeadLine props={resturents?.data?.cards[7]?.card?.card?.title} />
        <div className='nearme-comtainers'>
        {showmoretwo? resturents?.data?.cards[7]?.card?.card?.brands?.slice(0, num).map((data)=> <Nearme link={data?.link}  text={data?.text} /> ) : resturents?.data?.cards[7]?.card?.card?.brands?.map((data)=> <Nearme link={data?.link}  text={data?.text} /> )  }
        
         <button className='btn-show' onClick={()=>setshowmoretwo(!showmoretwo)}>{showmoretwo? "showmore" : "showless"}</button> 
        </div>
        </div>  
        <div>
               <HeadLine props={resturents?.data?.cards[8]?.card?.card?.title} />
        <div className='nearme-comtainers-two'>
               {resturents?.data?.cards[8]?.card?.card?.brands?.map((data)=> <Nearmewide link={data?.link}  text={data?.text} /> )}
         </div>  
        </div>
    </div>
  )
}

export default Linktabs