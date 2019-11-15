import React, { useState, useReducer } from "react";
import {
  Container,
  Error,
  FormContainer,
  Alert,
  LoadingContainer
} from "components/Generic";
import { Link, useParams } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import { postRequest } from "services/api";
import { ROUTES } from "utils/RoutePaths";
import HeadHelmet from "services/HeadHelmet";
import { CircularProgress } from "@rmwc/circular-progress";

const ResetPassword = props => {
  const [errors, setErrors] = useState(null);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      loading: false,
      email: "",
      password: "",
      password_confirmation: ""
    }
  );
  const { token } = useParams();

  async function resetPassword(e) {
    e.preventDefault();
    setInput({ loading: true });
    setErrors(["Aguarde um momento..."]);

    const values = { email: input.email };
    if (token) {
      values.token = token;
      values.password = input.password;
      values.password_confirmation = input.password_confirmation;
    } else {
      values.urlFront = window.location.href;
    }

    const uriApi = token ? "/password/reset" : "/password/create";
    const res = await postRequest(uriApi, values);
    setErrors(res.success || res.error);
    setInput({ loading: false });
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
        uri={ROUTES.RESETPASSWORD}
        description={`${props.title} - painel`}
      />
      <FormContainer className="card card-shadow">
        <div className="header-card">
          <h2>{props.title}</h2>
        </div>
        <div className="card-border" />
        {input.loading ? (
          <LoadingContainer style={{ height: "320px" }}>
            <CircularProgress style={{ color: "#00B6FF" }} size="xlarge" />
          </LoadingContainer>
        ) : (
          <form className="formulario">
            {errors && (
              <Alert type={"danger"}>
                {Object.keys(errors).map(key => (
                  <p style={{ textAlign: "center" }} key={key}>
                    {errors[key]}
                  </p>
                ))}
              </Alert>
            )}

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
              <Link to="/painel">Acessar Painel</Link>
            </Error>
          </form>
        )}
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
