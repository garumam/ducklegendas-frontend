import React from "react";
import {Login,Error} from "./styles";
import {Link} from 'react-router-dom';
import { InputPersonalizado } from "../Contato";
import api from '../../../services/api';
var estilo = {
  paddingTop: "6.38rem"
};
export default props => {
  const [errors,setErrors] = React.useState(null);
  async function logar(e) {
    e.preventDefault();
    await api.post('/login', {email:'admin@admin.com',password:'123456'})
    .then(r=>{
      console.log(r.data)
      // setErrors(r.data)
    }).catch(e=>{
      console.log(e.response.data.message)
      setErrors(e.response.data.message)
    })
    
  }
  return (
    <div style={estilo} className="container flex-center">
    <Login className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-card">
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className="card-border" />
          <form className="formulario">
            <InputPersonalizado name="E-mail" type="email" />
            <InputPersonalizado name="Senha" type="password" />
            <InputPersonalizado
              type="submit"
              value="Logar"
              onClick={e => logar(e)}
            />
            <Error>
            {errors && <span>{errors}</span>}
            <Link to='/esqueceu'>Esqueceu a senha ?</Link>
            <Link to='/registro'>Criar conta </Link>
            </Error>
           
          </form>
        </div>
      </div>
    </Login>
    </div>
  );
};
