import React from "react";
import { useCounter } from "../hooks/useCounter";

function CounterWithCustomHook() {
  const { counter,increment,decrement,reset } = useCounter();

  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />
      <button type="button" className="btn btn-danger mx-2" onClick={() => decrement(5)}>
        Decrement
      </button>
      <button type="button" className="btn btn-primary mx-2" onClick={reset}>
        Reset
      </button>
      <button type="button" className="btn btn-success mx-2" onClick={() => increment(5)}>
        Increment
      </button>
    </>
  );
}

export default CounterWithCustomHook;
