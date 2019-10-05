import React, { useState, useReducer } from "react";
import { LoginSection, Error } from "./styles";
import { Link } from "react-router-dom";
import { InputPersonalizado } from "../Contato";
import { postRequest, refreshAuthorization } from "services/api";
import { withRouter } from "react-router-dom";
import CryptoJS from 'crypto-js';

var estilo = {
  paddingTop: "6.38rem"
};

const Login = props => {
  const { title, history } = props;
  const [errors, setErrors] = useState(null);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: ""
    }
  );

  // if(isAuthenticated()){
  //   history.push('/dashboard')
  // }else

  // if(isToken() && props.location.state===undefined){
  //    api.get('/error')
  //   .then(r=>{
  //     console.log(r);

  //     localStorage.clear();

  //   }).catch(e=>{
  //     localStorage.clear();
  //     if (e.response === undefined) { // NETWORK ERROR
  //       console.log('Sem conexão');
  //     }else{
  //       console.log(e.response.data.error);
  //     }

  //   })
  // }
  async function logar(e) {
    e.preventDefault();
    // const res = await api.post("/login", {
    //   email: input.email,
    //   password: input.password
    // });
    const res = await postRequest("/login", {
         email: input.email,
         password: input.password
    });

    if (res.success) {
      const data = res.success;
      console.log("RESPOSTA LOGAR: ", data);

      const encrypt = CryptoJS.AES.encrypt(JSON.stringify(data),'senha secreta')
      console.log("encript data:"+encrypt)

      const decrypt = CryptoJS.AES.decrypt(encrypt.toString(),'senha secreta')
      console.log("decrypt:",decrypt)

      const decryptedData = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
      console.log("decrypt data:",decryptedData)

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("expirate", data.token_expirate);
      //api.defaults.headers.Authorization = isAuthenticated();
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
    <div style={estilo} className="container flex-center">
      {console.log("2")}
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
