import React, { useEffect ,useState } from 'react'

const Index = () => {
    const [count, setCount] = React.useState(0)
    
    useEffect(() => {
       console.log("count"+(count));
       
    }, [count])

  return (
    <div>
        <h1>useEffect Hook</h1>
        <h1>Run When State Changes</h1>
        
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default Index