import React, { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iteractionNumber = 100) => {
  for (let i = 0; i < iteractionNumber; i++) {
    console.log("hola que tal");
  }
  return `${iteractionNumber} iteracciones`;
};
function MemoHook() {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(10);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(!show)}
      </button>
    </>
  );
}

export default MemoHook;
