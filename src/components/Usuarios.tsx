import { Usuario } from "../interfaces/reqRes";
import useUsuarios from "../hooks/useUsuarios";

export const Usuarios = () => {
  const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td className="border padding">
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ width: 50, borderRadius: 50 }}
          />
        </td>
        <td className="border padding">
          {usuario.first_name} {usuario.last_name}
        </td>
        <td className="border padding">{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="border">
        <thead>
          <tr>
            <th className="border padding">Avatar</th>
            <th className="border padding">Nombre</th>
            <th className="border padding">email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      &nbsp;
      <button className="padding" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="padding" onClick={paginaSiguiente}>
        Siguientes
      </button>
    </>
  );
};
