import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./features/sideBarSlice"; 

export const store = configureStore({
    reducer:{
        sideBar: sideBarReducer ,
    },
});