import { configureStore } from "@reduxjs/toolkit";
import navdetailsReducer from "./Navslice";
import restoReducer from "./Restoslice";
const appstore = configureStore({
    reducer:{
        navdetails : navdetailsReducer,
        resto : restoReducer,
    }
})

export default appstore;