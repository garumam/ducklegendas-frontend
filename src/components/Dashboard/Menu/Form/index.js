import React from 'react';
import { withFormik, Field } from 'formik'
import {Col, CustomForm} from './styles';

export const InputPersonalizado = (props) => (
    <Col>
      {props.type !=="submit" ? <label htmlFor={props.name}>{props.labelText}</label> :""}
     
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
            <InputPersonalizado labelText="E-mail" name="email" type="email" />
            <InputPersonalizado labelText="Senha" name="password" type="password" />
            <InputPersonalizado labelText="Nome" name="nome" type="text" />
            <InputPersonalizado labelText="Mensagem" name="mensagem" type="text" />
            <InputPersonalizado type="submit" value="Enviar" />
        </CustomForm>

    )
);