import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {
    let [count,setCount] = useState(0)
     let [total,setTotal]=useState(0)
    
    useEffect(()=>{
         console.log("Calculating...");
         let sum = 0;
         for (let index = 1; index <  1000000000; index++) {
            sum +=1
         }
         setTotal(sum)
         console.log(sum);
         
    })
   
  return (
    <div>
        <h1>Total:{total}</h1>
      <h1>Count:{count}</h1> 
      <button onClick={()=>{setCount(count + 1)}}>Count</button>   
    </div>
  )
}


export default Memo
