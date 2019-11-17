import React,{useContext} from "react";
import { AuthContext } from 'utils/AuthContext';

export const LEGENDER = "legender";
export const AUTOR = "autor";
export const MODERADOR = "moderador";
export const ADMIN = "admin";
export const ALL = [LEGENDER,AUTOR,MODERADOR,ADMIN];
let roles = [];
export const Can = (user_role) => (roles.includes(user_role) ? true : false)

const Authorization = (allowedRoles,Component) => {
  const [user] = useContext(AuthContext);
  roles = allowedRoles;
  if (allowedRoles.includes(user.user_type)) 
    return () => <Component />;
  else 
    return () => <h4 style={{ fontWeight:600, padding:'2rem',color: "red" }}>Sem permissão!</h4>;
}
export default Authorization;