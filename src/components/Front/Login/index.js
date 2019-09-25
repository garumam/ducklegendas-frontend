import React from "react";
import {LoginSection,Error} from "./styles";
import {Link} from 'react-router-dom';
import { InputPersonalizado } from "../Contato";
import api,{isAuthenticated,isToken} from '../../../services/api';
import {withRouter} from 'react-router-dom';

var estilo = {
  paddingTop: "6.38rem"
};

const Login = (props) => {
  const {title,history} = props;
  const [errors,setErrors] = React.useState(null);
  const [input,setInput] = React.useReducer( (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: ''
    }
  );
  console.log(props);

  if(isAuthenticated()){
    history.push('/dashboard')
  }else if(isToken() && props.location.state===undefined){
     api.get('/error')
    .then(r=>{
      console.log(r);

      localStorage.clear();

    }).catch(e=>{

      if (e.response === undefined) { // NETWORK ERROR
        console.log('Sem conexão');
      }else{
        console.log(e.response.data.error);
      }

    })
  }
  async function logar(e) {
    e.preventDefault();
    await api.post('/login', {email: input.email,password: input.password})
    .then(r=>{
      localStorage.setItem('user',JSON.stringify(r.data))
      localStorage.setItem('token',r.data.access_token)
      localStorage.setItem('expirate',r.data.token_expirate)
      api.defaults.headers.Authorization = isAuthenticated();
      history.push('/dashboard')
    }).catch(e=>{
      
      if (!e.status) { // NETWORK ERROR
        console.log(e)
        setErrors('Problema de conexão com o servidor, tente mais tarde!')
      }else{
        console.log(e.response.data.message)
        setErrors(e.response.data.message)
      }
      
    })
    
  }
  function handleInputChange(e){
    const { name, value} = e.target;
    setInput({ [name]: value});
    console.log(input);
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
            <InputPersonalizado title="E-mail" name="email" type="email" value={input.email} onChange={handleInputChange} />
            <InputPersonalizado title="Senha" name="password" type="password" value={input.password} onChange={handleInputChange} />
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