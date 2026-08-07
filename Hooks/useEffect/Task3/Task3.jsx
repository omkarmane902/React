import React, { useState, useEffect } from "react";

const Task3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}

export default Task3