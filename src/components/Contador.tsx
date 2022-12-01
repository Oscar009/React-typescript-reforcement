import React, { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button onClick={() => acumular(1)}>+1</button>
      &nbsp;
      <button>-1</button>
    </>
  );
};
