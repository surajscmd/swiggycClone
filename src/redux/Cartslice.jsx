import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems : [],
    },
    reducers:{
        addcart:(state, action) =>{
            const itemInCart = state.cartItems.find((item) => item?.card?.info?.id === action.payload?.card?.info?.id);
            if (itemInCart) {
                itemInCart.quantity++;
              } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
              }
            // state.cartItems.push(action.payload);
        },


        clearcart : (state) =>{
            state.cartItems.length = 0; 
        },


        removeFromCart : (state, action) => {
            const index = state.cartItems.findIndex((item) => item?.card?.info?.id === action.payload?.card?.info?.id);
            if (index !== -1) {
              state.cartItems.splice(index, 1);
            }
          },

        decrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item?.card?.info?.id === action.payload?.card?.info?.id);
            if (itemIndex !== -1) {
              const itemInCart = state.cartItems[itemIndex];
              itemInCart.quantity -= 1;
              if (itemInCart.quantity === 0) {
                state.cartItems.splice(itemIndex, 1); // Correctly remove the item from the array
              }
            }
        }
          
    
    }
})

export const {addcart, clearcart , removeFromCart, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;