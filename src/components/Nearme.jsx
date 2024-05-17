import React from 'react'

const Nearme = ({link, text}) => {
  
  return (
    <div className='nearme-container'>
        <a href={link} target='blank' className='nearme-tabs'>
        <p>{text.substr(0,30)}</p>
        </a>
    </div>
  )
}

export default Nearme