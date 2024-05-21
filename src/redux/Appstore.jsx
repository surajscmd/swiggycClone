import { configureStore } from "@reduxjs/toolkit";
import navdetailsReducer from "./Navslice";
import restoReducer from "./Restoslice";
import cartReducer from "./Cartslice";




const appstore = configureStore({
    reducer:{
        navdetails : navdetailsReducer,
        resto : restoReducer,
        cart : cartReducer
    }
})

export default appstore;