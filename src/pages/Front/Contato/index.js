import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postRequest } from "services/api";
import { Contato } from "./styles.js";
import HeadHelmet from "services/HeadHelmet";
import { ROUTES } from "utils/RoutePaths";

export const InputPersonalizado = props => (
  <>
    {props.type !== "submit" ? (
      <label htmlFor={props.title}>{props.title}</label>
    ) : (
      ""
    )}

    {props.type === "textarea" ? (
      <textarea {...props} ref={props.refs} />
    ) : (
      <input {...props} ref={props.refs} />
    )}
  </>
);

export default props => {
  const inputNome = useRef(null);
  const inputEmail = useRef(null);
  const inputMensagem = useRef(null);
  const recaptchaRef = useRef(null);
  const [message, setMessage] = useState(null);

  const submit = async e => {
    e.preventDefault();
    if (recaptchaRef.current && recaptchaRef.current.getValue()) {
      const values = {
        nome: inputNome.current.value,
        email: inputEmail.current.value,
        mensagem: inputMensagem.current.value
      };
      setMessage("Aguarde um momento...");
      const res = await postRequest("contact", values);
      if (res.success) {
        setMessage(res.success);
      } else {
        setMessage(res.error);
      }
      recaptchaRef.current.reset();
    } else {
      setMessage("Confirmação do recaptcha obrigatória!");
    }
  };
  return (
    <Contato className="card card-shadow">
      <HeadHelmet 
        title={props.title}
        uri={ROUTES.CONTATO}
        description={`ducklegendas - ${props.title}`}
      />
      <div className="header-card">
        <h2>{props.title}</h2>
      </div>

      <div className="card-border" />
      {message && (
        <div className="col-12">
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <p style={{ color: "red" }}>{message}</p>
          </div>
        </div>
      )}
      <form onSubmit={submit} className="formulario">
        <InputPersonalizado
          refs={inputNome}
          title="Nome"
          name="nome"
          type="text"
        />
        <InputPersonalizado
          refs={inputEmail}
          title="E-mail"
          name="email"
          type="email"
        />
        <InputPersonalizado
          refs={inputMensagem}
          title="Mensagem"
          name="mensagem"
          type="textarea"
        />
        <ReCAPTCHA
          style={{ margin: "0.5rem auto 1rem auto" }}
          sitekey="6Lex5cEUAAAAAFbTCze9OTDs9IWlWUi3fxP5-nhv"
          ref={recaptchaRef}
        />
        <InputPersonalizado type="submit" value="Enviar" />
      </form>
    </Contato>
  );
};
