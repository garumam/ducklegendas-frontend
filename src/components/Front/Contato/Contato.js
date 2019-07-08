import React, { Fragment } from "react";
import "./Contato.css";

export const InputPersonalizado = (props) => (
  <Fragment>
    {props.type !=="submit" ? <label htmlFor={props.name}>{props.name}</label> :""}
   
    {props.type === "textarea" ? <textarea {...props} />  : <input {...props}/> }
  </Fragment>
);

export default props => (
  <section className="card contato card-shadow">
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
);
