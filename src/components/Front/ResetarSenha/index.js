import React from "react";
import { Login, Error } from "./styles";
import { withRouter } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import api from "../../../services/api";
var estilo = {
  paddingTop: "6.38rem"
};
const ResetarSenha = props => {
  const [errors, setErrors] = React.useState(null);
  const [input, setInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
      password_confirmation: ""
    }
  );
  const { token } = props.match.params;

  async function resetPassword(e) {
    e.preventDefault();

    const values = { email: input.email };
    if (token) {
      values.token = token;
      values.password = input.password;
      values.password_confirmation = input.password_confirmation;
    } else {
      values.urlFront = window.location.href;
    }

    const uriApi = token ? "/password/reset" : "/password/create";

    const res = await api.post(uriApi, values);
    setErrors(res.success || res.error);
    
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({ [name]: value });
    console.log(input);
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
              <InputPersonalizado
                title="E-mail"
                name="email"
                type="email"
                value={input.email}
                onChange={handleInputChange}
              />
              {token && (
                <>
                  <InputPersonalizado
                    title="Senha"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleInputChange}
                  />
                  <InputPersonalizado
                    title="Confirmação de senha"
                    name="password_confirmation"
                    type="password"
                    value={input.password_confirmation}
                    onChange={handleInputChange}
                  />
                </>
              )}

              <InputPersonalizado
                type="submit"
                value="Resetar"
                onClick={e => resetPassword(e)}
              />
              <Error>
                {errors &&
                  Object.keys(errors).map(key => (
                    <span key={key}>{errors[key]}</span>
                  ))}
              </Error>
            </form>
          </div>
        </div>
      </Login>
    </div>
  );
};

export default withRouter(ResetarSenha);
