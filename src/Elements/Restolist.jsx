import React from 'react'
import { useSelector } from 'react-redux'
import Maincard from '../components/Maincard'
import HeadLine from '../components/HeadLine'
import Shimmer from '../components/Shimmer'
import Shimmercircle from '../components/Shimmercircle'
import Shimmercard from '../components/Shimmercard'

const Restolist = () => {
    const resturents =  useSelector((store)=>store?.resto?.restaurent)

    if (!resturents) return (
      <div className='rectangelshimmer'>
          {[...Array(6)].map((e,i)=><Shimmercard key={i}/>)}
      </div>
    )  

  return (
    <div className='resto-container'>
        <HeadLine props={resturents?.data?.cards[2]?.card?.card?.title}/>
        <div className='resto-list'>
        {resturents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((resto)=>  <Maincard key={resto?.info?.id}  restaurants={resto}  />)}
        </div>   
    </div>
  )
}

export default Restolist