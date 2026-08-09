import React, { useReducer } from "react";

const UseReducerTask = () => {
  const initialstate = {
    state: 0,
  };

  const reduce = (state, action) => {
    if (action.type === "INCREMENT") {
      return {
        state: state.state + 1,
      };
    }

    if (action.type === "DECREMENT") {
      if (state.state > 0) {
        return {
          state: state.state - 1,
        };
      }

      return state;
    }

    if (action.type === "RESET") {
      return {
        state: 0,
      };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reduce, initialstate);

  return (
    <div>
      <h1>{state.state}</h1>

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

export default UseReducerTask;