import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginActionPayload = {
  username: string;
  nombre: string;
};

type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: LoginActionPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      return {
        validando: false,
        token: "ABCD",
        username: action.payload.username,
        nombre: action.payload.nombre,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Oscar", username: "Koala" },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <h3>Login</h3>

        <div>Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {token ? <div> Autenticado {nombre}</div> : <div> No autenticado</div>}

      {token ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </>
  );
};
