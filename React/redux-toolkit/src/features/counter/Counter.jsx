import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./CounterSlice";

export function Counter() {

    const [amount, setAmount] = useState(0)

  // to access state
  const count = useSelector((state) => state.counter.value);

  // to dispatch action
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <br />
        <input type="number" 
            onChange={(e)=>setAmount(e.target.value)}
        />
        <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
