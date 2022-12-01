export const Tiposbasicos = () => {
  let nombre: string = "OSCAR";
  const edad: number | string = 22;
  const estadoActivo: boolean = true;

  const poderes: (string | number)[] = ["Velocidad", "Volar", "Respirar bajo el agua", 13];

  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre} - {edad} - {estadoActivo ? "activo" : "no avtivo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
