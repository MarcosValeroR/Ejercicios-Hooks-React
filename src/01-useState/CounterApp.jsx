import React, { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={() => setCounter(counter - 1)}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
    </>
  );
}

export default CounterApp;
