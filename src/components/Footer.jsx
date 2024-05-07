import React from 'react'
import Swiggylogo from '../assets/logo.png';
const Footer = () => {
  
  
    const company  = ['About',
    'Careers',
    'Team',
    'Swiggy One',
    'Swiggy Instamart',
    'Swiggy Genie']
    const contsct = ["Help & Support",
        "Partner with us",
        "Ride with us"]

    const legal = ["Terms & Conditions",
        "Cookie Policy",
       " Privacy Policy",
        "Investor Relations"]
   
        const deliver = ["Bangalore",
           " Gurgaon",
            "Hyderabad",
           " Delhi",
            "Mumbai",
            "Pune"]

  return (
    <div className='Footer-container'>
        <div className='Row'>
            <img className='logo'  src={Swiggylogo} alt="" />
            <p className='bullets'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className='Row-one'>
            <p className='heading-ftr'>Company</p>
            
            {company.map((data) => (
             <p className='bullets'>{data}</p>
            )
              
            )}
        </div>
        <div>
        <div className='Row-one'>
            <p className='heading-ftr'>Contact us</p>
            
            {contsct.map((data) => (
             <p className='bullets'>{data}</p>
            )
              
            )}
        </div>
        
        <div className='Row-one margin-top'>
            <p className='heading-ftr'>Legal</p>
            
            {legal.map((data) => (
             <p className='bullets'>{data}</p>
            )
              
            )}
        </div>
        </div>
        <div className='Row-one'>
            <p className='heading-ftr'>We deliver to:</p>
            
            {deliver.map((data) => (
             <p className='bullets'>{data}</p>
            )
              
            )}
        </div>
    </div>
  )
}

export default Footer