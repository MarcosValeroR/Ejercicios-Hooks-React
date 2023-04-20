import React from "react";
import { useForm } from "../hooks/useForm";
import Message from "./Message";

function FormWithCustomHook() {
  const { user, mail,password, handleChange, resetForm } = useForm({
    user: "Marc",
    mail: "marc@gmail.com",
    password: "",
  });

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="user"
        value={user}
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="mail"
        value={mail}
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button className="btn btn-primary mt-2" onClick={resetForm}>Reset</button>
      {user === "pepe" && <Message />}
    </>
  );
}

export default FormWithCustomHook;
