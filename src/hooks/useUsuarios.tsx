import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespListado, Usuario } from "../interfaces/reqRes";

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqRespListado>("/users", {
      params: { page: paginaRef.current },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current--;
      alert("Sin registros");
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return { usuarios, paginaSiguiente, paginaAnterior };
};

export default useUsuarios;
