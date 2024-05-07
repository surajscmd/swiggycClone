import React from 'react'
import "../Styles/Style.css"
const HeadLine = ({props}) => {
  return (
    <div>
        <p className='headlines'>{props}</p>
    </div>
  )
}

export default HeadLine