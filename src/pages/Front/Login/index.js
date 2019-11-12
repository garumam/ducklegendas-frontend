import React, { useState, useReducer, useContext } from "react";
import { LoginSection, Error } from "./styles";
import { Container } from "components/Generic";
import { Link } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import { postRequest, encryptLogin } from "services/api";
import { withRouter } from "react-router-dom";
import { AuthContext } from "utils/AuthContext";
import { ROUTES } from "utils/RoutePaths";
import HeadHelmet from "services/HeadHelmet";

const Login = props => {
  const [, setUser] = useContext(AuthContext);
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
      console.log("RESPOSTA LOGAR: ", res.success);
      encryptLogin(res.success);
      setUser(res.success.user);
      history.push(ROUTES.DASHBOARD.HOME);
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
    <Container>
      <HeadHelmet 
        title={title}
        uri={ROUTES.LOGIN}
        description={`${title} - painel`}
      />
      <LoginSection className="card card-shadow">
        <div className="header-card">
          <h2>{title}</h2>
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
      </LoginSection>
    </Container>
  );
};

export default withRouter(Login);
