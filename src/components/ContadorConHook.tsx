import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter(10);

  return (
    <>
      <h3>
        ContadorConHook: <small>{valor}</small>
      </h3>
      <button onClick={() => acumular(1)}>+1</button>
      &nbsp;
      <button onClick={() => acumular(-1)}>-1</button>
    </>
  );
};
