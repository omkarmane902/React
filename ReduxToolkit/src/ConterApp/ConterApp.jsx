import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement,incerement,reset,} from "../features/counterslice";

import "./CounterApp.css";

const ConterApp = () => {
  const dispach = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div className="counter-page">
      <div className="counter-card">

        <div className="counter-icon">⚛️</div>

        <h1>Redux Toolkit Counter</h1>

        <p className="subtitle">Functionality powered by Redux Toolkit</p>

        <div className="counter-display">
          <span>{count}</span>
        </div>

        <div className="counter-buttons">

          <button
            className="btn increment-btn"
            onClick={() => dispach(incerement())}
          >
            <span>＋</span>
            Increment
          </button>

          <button
            className="btn decrement-btn"
            onClick={() => dispach(decrement())}
          >
            <span>−</span>
            Decrement
          </button>

          <button
            className="btn reset-btn"
            onClick={() => dispach(reset())}
          >
            ↻ Reset
          </button>

        </div>

        <div className="counter-info">
          <div>
            <strong>Redux</strong>
            <span>State Management</span>
          </div>

          <div>
            <strong>Toolkit</strong>
            <span>Modern Redux</span>
          </div>

          <div>
            <strong>React</strong>
            <span>UI Library</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConterApp;