import React from 'react'
import { banner_url } from '../utils/Constants'

const Banners = ({link, imageurl}) => {
  return (
    <div>
        <a href={link}  target="_blank">
       <img className='img-Banner' src={banner_url + imageurl} alt="this img" />
       </a>
    </div>
  )
}

export default Banners