import React, { Fragment, useRef, useState } from "react";
import { postRequest } from "services/api";
import {Contato} from "./styles.js";

export const InputPersonalizado = (props) => (
  <Fragment>
    {props.type !=="submit" ? <label htmlFor={props.title}>{props.title}</label> :""}
   
    {props.type === "textarea" ? <textarea {...props} ref={props.refs} />  : <input {...props} ref={props.refs} /> }
  </Fragment>
);

export default props => {
  const inputNome = useRef(null);
  const inputEmail = useRef(null);
  const inputMensagem = useRef(null);
  const [message, setMessage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const values = {
      nome: inputNome.current.value,
      email: inputEmail.current.value,
      mensagem: inputMensagem.current.value
    }
    setMessage('Aguarde um momento...');
    const res = await postRequest('contact', values);
    if(res.success){
      setMessage(res.success);
    }else{
      setMessage(res.error);
    }
  }
  return (
    <Contato className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-card">
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className="card-border" />
          {message && <div className="col-12">
            <div style={{textAlign:'center', padding: '1rem 0'}}>
              <p style={{color:'red'}}>{message}</p>
            </div>
          </div>
          }
          <form onSubmit={submit} className="formulario">
            <InputPersonalizado refs={inputNome} title ="Nome" name="nome" type="text" />
            <InputPersonalizado refs={inputEmail} title ="E-mail" name="email" type="email" />
            <InputPersonalizado refs={inputMensagem} title ="Mensagem" name="mensagem" type="textarea" />
            <InputPersonalizado type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </Contato>
  )
};
