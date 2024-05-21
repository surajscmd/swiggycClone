import { createSlice } from "@reduxjs/toolkit";


const navslice = createSlice({
    name:"navdetails",
    initialState:{
        value : " ",
        toprated : false,
    },
    reducers:{
        addvalue: (state, action) =>{
            state.value = action.payload; 
        },
        addToprated:(state)=>{
            !state.toprated == state.toprated
        }
    
    }
})

export const {addvalue, addToprated} = navslice.actions;
export default navslice.reducer;