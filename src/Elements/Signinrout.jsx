import React, { useRef, useState } from 'react'
import loginimg from "../assets/Image-login.avif"
import close from "../assets/circle.svg"
const Signinrout = ({setOpenModal}) => {
  const[login , setlogin] = useState(false);

  const changewindow = () => {
    setlogin(!login);
  } 
  const modelref = useRef();
  
  const closemodel = (e) =>{
    if(modelref.current == e.target){
        setOpenModal(false);
    }
  }

  return (
    <div  ref={modelref}  onClick={closemodel} className='model-container' >
        
        <div className='popup-section'>
            <a onClick={() => {
              setOpenModal(false);
            }}><img  className="close-imga" src={close} alt="" /></a>
             <div className='first-section'>
        <div className='log-section'>
           <p className='head-line'>{!login? "Login" : "Sign up"}</p>
            <div className='dis-flex'>
                <p className=''>or</p>
                <p className='btn-change' onClick={changewindow}>{!login?  "create an account": "login to your account" }</p>
            </div>
        </div>
        <div>
            <img className='img-log' src={loginimg} alt="."  />
        </div>
        </div>
        <div className='input-container'>
            <input className='input-login' type="text" placeholder='Phonenumber' />
            <input className={login?  'input-login' : 'd-none' } type="text" placeholder='Name' />
            <input className={login?  'input-login' : 'd-none' } type="email" placeholder='email' />     
        </div>
        <div className='login-btn-section'>
            <button className='login-btn'> {!login? "LOGIN" : "CONTINUE"}</button>
            <p className='temandcondition'>{!login? "By creating an account, " : "By clicking on Login, "}I accept the Terms & Conditions & Privacy Policy</p>
        </div>

        </div>
        
           
    </div>
  )
}

export default Signinrout