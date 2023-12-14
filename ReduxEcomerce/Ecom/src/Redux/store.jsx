import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
    reducer  : {
        cart : cartSlice
        //this key is important to access the state , coz whatever the state we have with the name here in store with the key we are going ot use it.
        
    }
})
