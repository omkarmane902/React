import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        counterStore:counterSlice
    }
})

export default store