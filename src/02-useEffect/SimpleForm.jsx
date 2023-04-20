import React, { useState, useEffect } from "react";
import Message from "./Message";

function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "juan",
    email: "juan@email.com",
  });

  const { username, email } = formState;

  // useEffect(() => {
  //   console.log("Se lanza");
  // });
  // useEffect(() => {
  //   console.log("Se lanza en el primer renderizado");
  // }, []);
  // useEffect(() => {
  //   console.log("Se lanza cuando haya un cambio en formState");
  // }, [formState]);
  // useEffect(() => {
  //   console.log("Se lanza cuando haya un cambio en username");
  // }, [username]);


  function handleOnChange({ target }) {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleOnChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleOnChange}
      />

      {username === "pepe" && <Message />}
    </>
  );
}

export default SimpleForm;
