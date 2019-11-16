import React, { useState, useReducer, useContext } from "react";
import {
  Container,
  Error,
  FormContainer,
  LoadingContainer,
  Alert
} from "components/Generic";
import { Link } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import { postRequest, encryptLogin } from "services/api";
import { useHistory } from "react-router-dom";
import { AuthContext } from "utils/AuthContext";
import { ROUTES } from "utils/RoutePaths";
import HeadHelmet from "services/HeadHelmet";
import { CircularProgress } from "@rmwc/circular-progress";

const Login = props => {
  const [, setUser] = useContext(AuthContext);
  const { title } = props;
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      loading: false,
      email: "",
      password: ""
    }
  );

  async function logar(e) {
    e.preventDefault();
    setInput({ loading: true });
    const res = await postRequest("/login", {
      email: input.email,
      password: input.password
    });

    if (res.success) {
      //console.log("RESPOSTA LOGAR: ", res.success);
      encryptLogin(res.success);
      setUser(res.success.user);
      history.push(ROUTES.DASHBOARD.HOME);
    } else if (res.error) {
      setErrors(res.error);
    }
    setInput({ loading: false });
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({ [name]: value });
    //console.log(input);
  }

  return (
    <Container>
      <HeadHelmet
        title={title}
        uri={ROUTES.LOGIN}
        description={`${title} - painel`}
      />

      <FormContainer className="card card-shadow">
        <div className="header-card">
          <h2>{title}</h2>
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
              <Link to="/reset">Esqueceu a senha ?</Link>
              <Link to="/register">Criar conta</Link>
            </Error>
          </form>
        )}
      </FormContainer>
    </Container>
  );
};

export default Login;
