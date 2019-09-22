import React from "react";
import {Login} from "./styles";
import {Link} from 'react-router-dom';
import { InputPersonalizado } from "../Contato";
import api from '../../../services/api';
var estilo = {
  paddingTop: "6.38rem"
};
export default props => {
  async function logar(e) {
    e.preventDefault();
    await api.post('/login', {email:'teste@teste.com',password:'159159'}).then(r=>{
      console.log(r.data.message)
    }).catch(e=>{
      console.log(e.response.data.message)
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
            <Link to='/esqueceu'>Esqueceu a senha ?</Link>
            <Link to='/registro'>Criar conta </Link>
          </form>
        </div>
      </div>
    </Login>
    </div>
  );
};
