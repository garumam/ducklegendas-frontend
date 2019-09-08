import React from "react";
import {Login} from "./styles";
import { InputPersonalizado } from "../Contato";
var estilo = {
  paddingTop: "6.38rem"
};
export default props => {
  function logar(e) {
    e.preventDefault();
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
          </form>
        </div>
      </div>
    </Login>
    </div>
  );
};
