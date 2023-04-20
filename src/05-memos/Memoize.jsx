import { useCounter } from "../hooks/useCounter";
import { useState } from "react";
import { Small } from "./Small";
export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(10);
  return (
    <>
      <h1>
        Counter <Small value={counter}></Small>
      </h1>
      <hr />
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
};
