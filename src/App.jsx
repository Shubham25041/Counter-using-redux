import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./slice1";
import { updateValue } from "./slice2";


function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const inputValue = useSelector((state) => state.getInput.inputValue);

  return (
      <div className="container">
          <h1>Counter is : {count}</h1>

          <div className="input-group">
              <input
                  placeholder="Enter the number"
                  value={inputValue}
                  onChange={(e) => dispatch(updateValue(e.target.value))}
              />

              <button
                  className="submit-btn"
                  onClick={() => {
                      dispatch(incrementByAmount(Number(inputValue)));
                      dispatch(updateValue(""));
                  }}
              >
                  Submit
              </button>
          </div>

          <div className="button-group">
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={() => dispatch(decrement())}>Decrement</button>
              <button onClick={() => dispatch(reset())}>Reset</button>
          </div>
      </div>
  )
}


export default App;
