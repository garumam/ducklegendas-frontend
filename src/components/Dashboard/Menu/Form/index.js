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


// import React from 'react';
// import { withFormik, Field } from 'formik'
// import {Col, CustomForm} from './styles';

// export const InputPersonalizado = (props) => (
//     <Col>
//       {props.type !=="submit" ? <label htmlFor={props.name}>{props['data-label']}</label> :""}
     
//       { <Field {...props}/> }
//     </Col>
// );

// const formikConfig = withFormik({
//     mapPropsToValues: () => ({ 
//       email: '',
//       password: '',
//       nome: '',
//       mensagem: ''
//     }),
//     handleSubmit: values => {
//         console.log(values);
//     }
// });

// export default formikConfig(() => ( 
    
//         <CustomForm className="formulario"> 
//             <InputPersonalizado data-label="E-mail" name="email" type="email" />
//             <InputPersonalizado data-label="Senha" name="password" type="password" />
//             <InputPersonalizado data-label="Nome" name="nome" type="text" />
//             <InputPersonalizado data-label="Mensagem" name="mensagem" type="text" />
//             <InputPersonalizado type="submit" value="Enviar" />
//         </CustomForm>
//     )
// );