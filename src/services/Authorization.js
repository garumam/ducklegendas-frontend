import React,{useContext} from "react";
import { AuthContext } from 'context/AuthContext';

export const User = ["user"];
export const Moderador = ["moderador"];
export const Admin = ["admin", "moderador"];

const Authorization = allowedRoles => Component => {
  const WithAuthorization = () => {
    const [user] = useContext(AuthContext);
    console.log("role user", user.user_type);
    if (allowedRoles.includes(user.user_type)) {
      return <Component />;
    } else {
      console.log("Sem permissão!");
      return <h4 style={{ color: "black" }}>Sem permissão!</h4>;
    }
  };
  return WithAuthorization;
}
export default Authorization;
