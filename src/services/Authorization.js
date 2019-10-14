import React,{useContext} from "react";
import { AuthContext } from 'utils/AuthContext';

export const User = ["user"];
export const Moderador = ["moderador"];
export const Admin = ["admin", "moderador"];
let roles = [];

export const Can = (user_role) => (roles.includes(user_role) ? true : false)
  
const Authorization = allowedRoles => Component => {
  roles = allowedRoles;
  const WithAuthorization = () => {
    const [user] = useContext(AuthContext);
    console.log("role user", user.user_type);
    if (allowedRoles.includes(user.user_type)) {
      return <Component />;
    } else {
      console.log("Sem permissão!");
      return <h4 style={{ fontWeight:600, padding:'2rem',color: "red" }}>Sem permissão!</h4>;
    }
  };
  return WithAuthorization;
}
export default Authorization;
