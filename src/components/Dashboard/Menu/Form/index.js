import React from 'react';
import { Formik } from 'formik';
import {TextField} from 'rmwc'
import {CustomForm} from './styles';

const textFieldStyle = { width: '49%', marginBottom: '15px' };

export default () => ( 
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
        <CustomForm onSubmit={handleSubmit} className="formulario">
            <TextField 
            style={textFieldStyle} 
            outlined 
            label="E-mail"
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email" />
            
            <TextField 
            style={textFieldStyle} 
            outlined 
            label="Senha"
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password" />

            <TextField 
            style={textFieldStyle} 
            outlined 
            label="Nome"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="nome" />

            <TextField 
            style={textFieldStyle} 
            outlined 
            label="Mensagem"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="mensagem" />

            <input type="submit" value="Enviar" />
        </CustomForm>
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