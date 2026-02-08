import React, { useMemo, useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("calculating...");
    let sum = 0;

    for (let i = 0; i < 100000000; i++) {
      sum += 1;
    }

    return sum; 
  }, [count]);

  return (
    <div>
      <h1>Total: {total}</h1>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

export default Task1;
