import React from 'react'

const Nearmewide = ({link, text}) => {
  return (
    <div className='nearme-container-wide'>
    <a href={link} target='blank' className='nearme-tabs'>
    <p>{text.substr(0,30)}</p>
    </a>
</div>
  )
}

export default Nearmewide