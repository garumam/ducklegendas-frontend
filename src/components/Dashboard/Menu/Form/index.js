import React from 'react';
import { withFormik, Field } from 'formik'
import {Col, CustomForm} from './styles';

export const InputPersonalizado = (props) => (
    <Col>
      {props.type !=="submit" ? <label htmlFor={props.name}>{props['data-label']}</label> :""}
     
      { <Field {...props}/> }
    </Col>
);

const formikConfig = withFormik({
    mapPropsToValues: () => ({ 
      email: '',
      password: '',
      nome: '',
      mensagem: ''
    }),
    handleSubmit: values => {
        console.log(values);
    }
});

export default formikConfig(() => ( 
    
        <CustomForm className="formulario"> 
            <InputPersonalizado data-label="E-mail" name="email" type="email" />
            <InputPersonalizado data-label="Senha" name="password" type="password" />
            <InputPersonalizado data-label="Nome" name="nome" type="text" />
            <InputPersonalizado data-label="Mensagem" name="mensagem" type="text" />
            <InputPersonalizado type="submit" value="Enviar" />
        </CustomForm>
    )
);