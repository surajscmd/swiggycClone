import React from 'react'
import { useRouteError } from 'react-router-dom'
import error from "../assets/robot.svg"
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className='error-conatiner'>
        <div>
            <img className='err-img' src={error} alt="error-boundries" />
        </div>
        <div className='err-mesage'>
           <h1>{err.error.message}</h1>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
        
    </div>
  )
}

export default Error