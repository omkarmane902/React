import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counterslice";




const store = configureStore({
    reducer:{
        counter:counterSlice,
    },
})

export default store 