import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { addrestaurent } from "../redux/Restoslice";
import { RESO_LIST_URL } from "../utils/Constants";

const useRestaurent = () =>{
  const dispatch = useDispatch();
  const  getRestaurent = async () =>{
  const data = await fetch(RESO_LIST_URL)
  const json = await data.json();
   dispatch(addrestaurent(json)); 
}
useEffect(()=>{
 getRestaurent();
},[])
} 
 
export default useRestaurent;