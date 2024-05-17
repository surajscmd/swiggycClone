import { createSlice } from "@reduxjs/toolkit";

const restoslice = createSlice({
    name:"resto",
    initialState:{
        restaurent : null,
        menuitems : null,
    },
    reducers:{
        addrestaurent:(state, action) =>{
            state.restaurent = action.payload; 
        },
        addmenu:(state, action) =>{
            state.menuitems = action.payload;
        }
    
    }
})

export const {addrestaurent, addmenu} = restoslice.actions;
export default restoslice.reducer;