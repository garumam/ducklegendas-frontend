import React, { useState, useReducer } from "react";
import { LoginSection, Error } from "./styles";
import { Link } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import { postRequest, refreshAuthorization, encryptLogin} from "services/api";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const { title, history } = props;
  const [errors, setErrors] = useState(null);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: ""
    }
  );

  async function logar(e) {
    e.preventDefault();
    const res = await postRequest("/login", {
         email: input.email,
         password: input.password
    });

    if (res.success) {
      const data = res.success;
      console.log("RESPOSTA LOGAR: ", data);
      localStorage.setItem("user", encryptLogin(data));
      refreshAuthorization();
      history.push("/dashboard");
    } else if (res.error) {
      setErrors(res.error);
    }
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({ [name]: value });
    console.log(input);
  }
  return (
    <div className="container flex-center paddingTop">
      <LoginSection className="card card-shadow">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-card">
                <h2>{title}</h2>
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
              <InputPersonalizado
                title="Senha"
                name="password"
                type="password"
                value={input.password}
                onChange={handleInputChange}
              />
              <InputPersonalizado
                type="submit"
                value="Logar"
                onClick={e => logar(e)}
              />
              <Error>
                {errors &&
                  Object.keys(errors).map(key => (
                    <span key={key}>{errors[key]}</span>
                  ))}
                <Link to="/reset">Esqueceu a senha ?</Link>
              </Error>
            </form>
          </div>
        </div>
      </LoginSection>
    </div>
  );
};

export default withRouter(Login);
