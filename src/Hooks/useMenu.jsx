import {useEffect, useState} from "react";

import { addmenu } from "../redux/Restoslice";
import { useDispatch } from "react-redux";



const useMenu = (resId) =>{
  const [resInfo, setResInfo] = useState(null);
  const dispatch = useDispatch();
  
  const  getRestaurent = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
  const json = await data.json();
  dispatch(addmenu(json)); 
  setResInfo(json.data);
}
useEffect(()=>{
  getRestaurent();
},[])


return resInfo;
};


export default useMenu;