import React, { useState, useReducer } from "react";
import { InputPersonalizado } from "../Contato";
import { Container, Error, FormContainer } from "components/Generic";
import { ROUTES } from "utils/RoutePaths";
import HeadHelmet from "services/HeadHelmet";
import {postRequest} from "services/api"

const SignUp = props => {
  const [errors, setErrors] = useState(null);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      password: "",
    }
  );

  async function signUp(e) {
    e.preventDefault();
    const res = await postRequest("/register", {
      name: input.name,
      email: input.email,
      password: input.password
    });

    if (res.success) {
      console.log("RESPOSTA LOGAR: ", res.success);
      // encryptLogin(res.success);
      // setUser(res.success.user);
      // history.push(ROUTES.DASHBOARD.HOME);
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
        title={props.title}
        uri={ROUTES.SIGNUP}
        description={`${props.title} - painel`}
      />
      <FormContainer className="card card-shadow">
        <div className="header-card">
          <h2>{props.title}</h2>
        </div>
        <div className="card-border" />
        <form className="formulario">
          <InputPersonalizado
            title="Nome"
            name="name"
            type="text"
            value={input.name}
            onChange={handleInputChange}
          />

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
            value="Cadastrar"
            onClick={e => signUp(e)}
          />
          <Error>
            {errors &&
              Object.keys(errors).map(key => (
                <span key={key}>{errors[key]}</span>
              ))}
          </Error>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignUp;
