import { createSlice } from "@reduxjs/toolkit";


const navslice = createSlice({
    name:"navdetails",
    initialState:{
        searchvalue : " ",
        toprated : false,
    },
    reducers:{
        addsearchvalue: (state, action) =>{
            state.searchvalue = action.payload; 
        },
        addToprated:(state)=>{
            !state.toprated == state.toprated
        }
    
    }
})

export const {addsearchvalue, addToprated} = navslice.actions;
export default navslice.reducer;