import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
   name:'counter',
   initialState:{
    value:0
   },
   reducers:{
    incerement:(state)=>{
      state.value += 1;
    },
    decrement:(state)=>{
        if (state.value > 0) {
            state.value -= 1;
        }
        return state
    },
    reset:(state)=>{
        state.value = 0;
    }
   }
})

export const {incerement,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer