import React from 'react';
import { Formik } from 'formik';
import {Fab} from '@rmwc/fab';
import {CustomForm,InputText,HeaderCard} from './styles';


export default (props) => ( 
    <Formik
    initialValues={{  
        email: '',
        password: '',
        nome: '',
        mensagem: ''
    }}
    onSubmit={values => {
        console.log(values);
    }}
    render={({
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
          <>
    <HeaderCard>
        <h2>{props.title}</h2>
        <Fab icon="add" type="button" onClick={handleSubmit} />
    </HeaderCard>
    <div className="card-border"/>
        <CustomForm onSubmit={handleSubmit} className="formulario">
            <InputText  
            label="E-mail"
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email" />
            
            <InputText 
            label="Senha"
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password" />

            <InputText 
            label="Nome"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="nome" />

            <InputText 
            label="Mensagem"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="mensagem" />

           
        </CustomForm>
        </>
      )}

    />
        
);