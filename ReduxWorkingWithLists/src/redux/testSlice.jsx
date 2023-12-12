import { createSlice } from "@reduxjs/toolkit";

const testSlice  = {
    name : "random",
    initialState : {

    },
    reducers : {
        setActive : (state, action) => {
         state.activeTabId = action.payload;
        }
    }
}

