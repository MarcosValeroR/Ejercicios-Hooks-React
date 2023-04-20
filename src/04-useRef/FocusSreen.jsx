import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const focus = () => {
    console.log(inputRef2);
    inputRef2.current.focus();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input
        ref={inputRef1}
        type="text"
        placeholder="texto"
        className="form-control"
      />
      <input
        ref={inputRef2}
        type="text"
        placeholder="texto"
        className="form-control mt-2"
      />

      <button onClick={focus} className="btn btn-primary mt-2">
        Haz focus
      </button>
    </>
  );
};
