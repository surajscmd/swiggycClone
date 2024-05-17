import React, { useEffect, useState } from 'react'
import Topslider from './Topslider'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Maincard from '../components/Maincard';
import lens from '../assets/search.svg'

const Searchpage = () => {
    const navigate = useNavigate();
    const closeSearchPage = () => {
        navigate("/");
    }
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const resturents =  useSelector((store)=>store?.resto?.restaurent) 


    useEffect(() => {
        setData();
      }, []);
   
      const setData =  () => {
        const listOfRestaurants = [].concat(
            resturents?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
            resturents?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
        setListOfRestraunt(
            listOfRestaurants 
        );
        // setFilteredRestaurant(
        //     listOfRestaurants
        // );
      }; 
 
  return (

    <>
    <div className='search-container'>
        <div className='butn-container'>
            <button className='btn-close' onClick={closeSearchPage}>ClOSE</button>
        </div>
       
         
        <div className='search-slider'>
            <Topslider/>
        </div>
        </div>
        <div className='search-section'>
        <div className='search-flex'>
           <input className='search-input'  value={searchText} onChange={(e) => {setSearchText(e.target.value)}}  type="search" name="search" placeholder='Search for Food and Restaurant' id="" />
           <button  className='lens-img'  
           onClick={() => { const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}>
            <img src={lens} alt="." /></button>
        </div>
        <button
            className="toprated-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > "4.2"
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        <div className='search-boxs'>
        <div className='resto-list'>
               {filteredRestaurant.map((resto)=>  <Maincard key={resto?.info?.id}  restaurants={resto}  />)}
        </div>  
        </div>
        </div> 
     </>   
  )
}

export default Searchpage