import React,{useContext} from "react";
import { AuthContext } from 'context/AuthContext';

const Authorization = allowedRoles => Component => {
  const WithAuthorization = () => {
    const [user] = useContext(AuthContext);
    console.log("role user", user.user_type);
    if (allowedRoles.includes(user.user_type)) {
      return <Component />;
    } else {
      console.log("Sem permissão!");
      return <h1 style={{ color: "black" }}>Sem permissão!</h1>;
    }
  };
  return WithAuthorization;
}
export default Authorization;
