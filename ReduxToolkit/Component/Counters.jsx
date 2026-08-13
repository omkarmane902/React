import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deccrement, increment, reset } from '../ReduxToolkit/counterSlice'

const Counters = () => {
    const mydata = useSelector((mystore)=>{
        return mystore.counterStore.count
        
    })

    let dispatch = useDispatch()
  return (
    <div>
       <h1>Count : {mydata}</h1>
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(deccrement())}}>decrement</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  )
}

export default Counters