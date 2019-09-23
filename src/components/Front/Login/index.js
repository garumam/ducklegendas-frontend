import React from "react";
import {LoginSection,Error} from "./styles";
import {Link} from 'react-router-dom';
import { InputPersonalizado } from "../Contato";
import api,{isAuthenticated} from '../../../services/api';
import {withRouter} from 'react-router-dom';

var estilo = {
  paddingTop: "6.38rem"
};

const Login = (props) => {
  const {title,history} = props;
  const [errors,setErrors] = React.useState(null);
  if(isAuthenticated()){
    console.log('dsa',isAuthenticated())
    history.push('/dashboard')
  }
  async function logar(e) {
    e.preventDefault();
    await api.post('/login', {email:'admin@admin.com',password:'123456'})
    .then(r=>{
      localStorage.setItem('user',JSON.stringify(r.data))
      localStorage.setItem('token',r.data.access_token)
      localStorage.setItem('expirate',r.data.token_expirate)
      history.push('/dashboard')
    }).catch(e=>{
      console.log(e.response.data.message)
      setErrors(e.response.data.message)
    })
    
  }
  return (
    <div style={estilo} className="container flex-center">
      {console.log('2')}
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
            <InputPersonalizado name="E-mail" type="email" />
            <InputPersonalizado name="Senha" type="password" />
            <InputPersonalizado
              type="submit"
              value="Logar"
              onClick={e => logar(e)}
            />
            <Error>
            {errors && <span>{errors}</span>}
            <Link to='/reset'>Esqueceu a senha ?</Link>
            </Error>
           
          </form>
        </div>
      </div>
    </LoginSection>
    </div>
  );
};

export default withRouter(Login);