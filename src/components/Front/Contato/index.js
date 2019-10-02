import React, { Fragment } from "react";
import {Contato} from "./styles.js";

export const InputPersonalizado = (props) => (
  <Fragment>
    {props.type !=="submit" ? <label htmlFor={props.title}>{props.title}</label> :""}
   
    {props.type === "textarea" ? <textarea {...props} />  : <input {...props}/> }
  </Fragment>
);

export default props => (
  <Contato className="card card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="card-border" />
        <form className="formulario">
          <InputPersonalizado title ="Nome" name="Nome" type="text" />
          <InputPersonalizado title ="E-mail" name="E-mail" type="email" />
          <InputPersonalizado title ="Mensagem" name="Mensagem" type="textarea" />
          <InputPersonalizado type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  </Contato>
);
