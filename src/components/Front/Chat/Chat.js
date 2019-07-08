import React from "react";
import "./Chat.css";
import {InputPersonalizado} from "../Contato/Contato";

export default (props) => (
<section className="card chat card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="card-border" />
        <form className="formulario">
          <InputPersonalizado name="Nome" type="text" />
          <InputPersonalizado name="E-mail" type="email" />
          <InputPersonalizado name="Mensagem" type="textarea" />
          <InputPersonalizado type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  </section>
)
