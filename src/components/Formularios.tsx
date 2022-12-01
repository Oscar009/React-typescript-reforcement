import "./Usuarios.css";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
export const Formularios = () => {
  const { onChange, state } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="padding"
        placeholder="email"
        onChange={({ target }) => onChange(target.value, "email")}
        value={state.email}
      />
      &nbsp;
      <input
        type="password"
        className="padding"
        placeholder="password"
        onChange={({ target }) => onChange(target.value, "password")}
        value={state.password}
      />
      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  );
};
