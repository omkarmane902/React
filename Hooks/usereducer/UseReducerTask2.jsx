import React, { useReducer } from "react";

export const UseReducerTask2 = () => {
  const initialValue = {
    count: 0,
  };

  const Reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };

      case "DECREMENT":
        return {
          count: state.count - 1,
        };

      case "RESET":
        return {
          count: 0,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(Reducer, initialValue);

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
};