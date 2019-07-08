import React from "react";
import "../Login/Login.css";
import {InputPersonalizado} from "../Contato/Contato";

export default (props) => (
<section className="card login card-shadow">
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
          <InputPersonalizado type="submit" value="Logar" />
        </form>
      </div>
    </div>
  </section>
)