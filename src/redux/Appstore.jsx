
import navdetailsReducer from "./Navslice";
import restoReducer from "./Restoslice";

import cartReducer from "./Cartslice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const persistConfig = {
    key: "root",
    storage

}

const rootReducer = combineReducers({
    navdetails : navdetailsReducer,
    resto : restoReducer,
    cart : cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


  export  const appstore = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ],
    });
   
   