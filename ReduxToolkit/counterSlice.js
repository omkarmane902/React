import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    
        name: "counter",
        initialState:{
            count:0
        },
        reducers:{
            increment :(state,reqdata)=>{
                state.count +=1
            },
            deccrement :(state,reqdata)=>{
                state.count -=1
            },
            reset:(state,reqdata)=>{
                state.count=0
            }

            
        }
    
})

export const {increment,deccrement,reset}=counterSlice.actions

export default counterSlice.reducer