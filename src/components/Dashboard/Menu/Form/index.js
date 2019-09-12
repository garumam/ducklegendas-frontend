import React from 'react';
import { Formik } from 'formik';
import {Fab} from '@rmwc/fab';
import {CustomForm,InputText,HeaderCard} from './styles';
import {withRouter} from 'react-router-dom';


 const Form = (props) => {
     const inputParams = [], 
           labels = [],
           types = [],
           names = [],
           initialValues = {};
     
     switch(props.form){
        case 1: //usuários
            labels.push('E-mail','Senha','Nome','Mensagem');
            types.push('email','password','text','text');
            names.push('email','password','nome','mensagem');
            break;
        case 2: //legendas
            labels.push('Série','Autor','Número','Mensagem');
            types.push('text','text','text','text');
            names.push('serie','autor','numero','mensagem');
            break;
        case 3: //categorias
            labels.push('Categoria','Classificação','Qtd','Mensagem');
            types.push('text','text','text','text');
            names.push('categoria','classificacao','qtd','mensagem');
            break;
        case 4: //toplegendas
            labels.push('Legenda','Autor','Série','Mensagem');
            types.push('text','text','text','text');
            names.push('legenda','autor','serie','mensagem');
            break;
        case 5: //permissoes
            labels.push('Nome','Descrição');
            types.push('text','text');
            names.push('nome','descricao');
            break;
            case 6: //ranking
            labels.push('Nome','Descrição');
            types.push('text','text');
            names.push('nome','descricao');
            break;
        default:  
    }

    for (let index = 0; index < labels.length; index++) {
        inputParams.push({
            label: labels[index],
            type: types[index],
            name: names[index]
        });
        initialValues[names[index]] = '';
    }

     return( 
        <Formik
        initialValues={{  
            ...initialValues
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
            <div>
            <Fab icon="keyboard_arrow_left" style={{marginRight:'12px'}} type="button" onClick={()=>{props.history.goBack()}} />
            <Fab icon="save" type="button" onClick={handleSubmit} />
            </div>
            
        </HeaderCard>
        <div className="card-border"/>
            <CustomForm onSubmit={handleSubmit} className="formulario">
                {
                    inputParams.map((input, index) => (
                        <InputText 
                        key={index} 
                        label={input.label}
                        onChange={(e) => {e.persist(); handleChange(e);}}
                        onBlur={(e) => {e.persist(); handleBlur(e);}}
                        type={input.type}
                        name={input.name} />
                    ))
                }
            </CustomForm>
            </>
        )}

        />  
    );
};

export default withRouter(Form);