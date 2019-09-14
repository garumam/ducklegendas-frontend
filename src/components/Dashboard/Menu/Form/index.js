import React from 'react';
import { Formik } from 'formik';
import {Fab} from '@rmwc/fab';
import {CustomForm,InputText,HeaderCard,SelectCustom, DivCustom} from './styles';
import {withRouter} from 'react-router-dom';
import image from '../../../../assets/img/man.png';

 const Form = (props) => {
     const inputParams = [], 
           labels = [],
           types = [],
           names = [],
           initialValues = {};
  
     switch(props.form){
        case 1: //usuários
            labels.push('Nome','E-mail','Senha', 'Permissão', 'Imagem');
            types.push('text','email','password', 'select', 'file');
            names.push('nome','email','password', 'permissao', 'img');
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
            handleSubmit,
            setFieldValue
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
                    inputParams.map((input, index) => {
                        if(input.type === 'select'){
                            return(
                                <SelectCustom
                                options={['admin', 'legender']} 
                                key={index} 
                                label={input.label}
                                name={input.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[input.name]}
                                />
                            )
                        }
                        if(input.type === 'file'){
                            return(
                                <DivCustom key={index} style={{width: '49%'}}>
                                    <img 
                                    style={{ width: '150px', padding:'1rem 1rem 1rem 0'}} 
                                    src={values[input.name] instanceof File ? 
                                            URL.createObjectURL(values[input.name]) : image} 
                                    alt='' 
                                    />
                                    <input
                                    id="file" 
                                    name={input.name}
                                    type={input.type}
                                    onChange={(event) => {
                                        setFieldValue(input.name, event.currentTarget.files[0]);
                                    }}
                                    />
                                </DivCustom>
                            )
                        }
                        return(
                            <InputText 
                            key={index} 
                            label={input.label}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={input.type}
                            name={input.name}
                            />
                        )
                    })
                }
            </CustomForm>
            </>
        )}

        />  
    );
};

export default withRouter(Form);