import React, { useReducer, useState, useEffect } from "react";
import { Formik } from "formik";
import { Fab } from "@rmwc/fab";
import {
  CustomForm,
  InputText,
  HeaderCard,
  SelectCustom,
  DivCustom,
  Error
} from "./styles";
import { withRouter } from "react-router-dom";
import {baseUrl, getRequest, postRequest} from 'services/api';
import image from "assets/img/man.png";
import * as YupValidation from 'services/YupValidation';

const Form = props => {
  const [entities, setEntities] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      errorsReponse: null,
      anyChange: false
    }
  );
  const [data, setData] = useState(null);

  const inputParams = [],
    labels = [],
    types = [],
    names = [],
    validationSchema = [],
    initialValues={},
    dataPassed = props.location.state ? props.location.state.item : null;

  switch (props.form) {
    case 1: //usuários
      labels.push("Nome", "E-mail", "Senha", "Tipo", "Imagem");
      types.push("text", "email", "password", "select", "file");
      names.push("name", "email", "password", "user_type", "image");
      validationSchema.push(YupValidation.UserSchema);
      break;
    case 2: //legendas
      labels.push("Nome", "Categoria", "Ano", "Imagem", "URL", "Autor");
      types.push("text", "select", "number", "file", "text", "disabled");
      names.push("name", "categoria", "ano", "img", "url", "autor");
      break;
    case 3: //categorias
      labels.push("Nome", "Classificação");
      types.push("text", "text");
      names.push("categoria", "classificacao");
      break;
    case 4: //legendas em andamento
      labels.push(
        "Nome",
        "Categoria",
        "Ano",
        "Imagem",
        "URL",
        "Porcentagem",
        "Autor"
      );
      types.push(
        "text",
        "select",
        "number",
        "file",
        "text",
        "number",
        "disabled"
      );
      names.push(
        "nome",
        "categoria",
        "ano",
        "img",
        "url",
        "porcentagem",
        "autor"
      );
      break;
    case 5: //galeria
      labels.push("Nome", "Descrição");
      types.push("text", "text");
      names.push("nome", "descricao");
      break;
    default:
  }

  useEffect(() => {

    async function getUser() {
      const res = await getRequest(`/user/${props.match.params.id}`);
      console.log(res.success);
      if (res.success) {
        setData(res.success);
      } else {
        setEntities({
          errorsReponse: res.error 
        });
      }
    }
    if(props.match.params.id && dataPassed === null){
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);
  
  //inicio dos inputs
    for (let index = 0; index < labels.length; index++) {
      inputParams.push({
        label: labels[index],
        type: types[index],
        name: names[index]
      });
      
      initialValues[names[index]] = dataPassed ? dataPassed[names[index]] : 
                                          data ? data[names[index]] : '';
      
    }
    Object.keys(initialValues).map((key) => initialValues[key]? null : initialValues[key] = '')
    console.log('valores iniciais formulário: ' ,initialValues)
// fim dos inputs

  const store = async (values) => {
    console.log(values);

    const formData = new FormData();
    Object.keys(values).map((key) => {
      return formData.append(key, values[key]);
    });
    let uri = '/register';

    if(data || dataPassed){
      const itemId = data? data.id : dataPassed.id;
      uri = `${uri}/update/${itemId}`
      formData.append('_method', 'PATCH');
    }
    
    const res = await postRequest(uri, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    console.log('res',res);
    if(res.success){
      setEntities({
        anyChange: true,
        errorsReponse: res.success 
      });
    }else{
      setEntities({
        errorsReponse: res.error 
      });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema[0]}
      onSubmit={store}
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
              <Fab
                icon="keyboard_arrow_left"
                style={{ marginRight: "12px" }}
                type="button"
                onClick={() => {
                  props.history.replace({
                    pathname: `/dashboard/users`,
                    state:{ 
                      anyChange: props.location.state && props.location.state.islogin ? true : entities.anyChange,
                      entities: props.location.state && props.location.state.entities
                    }
                  });;
                }}
              />
              <Fab icon="save" type="button" onClick={handleSubmit} />
            </div>
          </HeaderCard>
          <div className="card-border" />
          <CustomForm onSubmit={handleSubmit} className="formulario">
            <Error>
                {entities.errorsReponse &&
                  Object.keys(entities.errorsReponse).map(key => (
                    <span key={key}>{entities.errorsReponse[key]}</span>
                  ))}
                {inputParams.map((input, index) => (
                  errors[input.name] && touched[input.name] && (
                    <span key={index}>{errors[input.name]}</span>
                  )
                ))}
            </Error>
            {inputParams.map((input, index) => {
              switch (props.form) {
                case 1: //usuários
                  if (input.type === "select") {
                    return (
                      <SelectCustom
                        options={["admin", "moderador", "autor", "legender"]}
                        key={index}
                        label={input.label}
                        name={input.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[input.name]}
                      />
                    );
                  }

                  if (input.type === "file") {
                    return (
                      <DivCustom key={index} style={{ width: "49%" }}>
                        <img
                          style={{
                            width: "150px",
                            padding: "1rem 1rem 1rem 0"
                          }}
                          src={
                            values[input.name] instanceof File
                              ? URL.createObjectURL(values[input.name])
                              : values[input.name]? baseUrl+values[input.name] : image
                          }
                          alt=""
                        />
                        <input
                          id="file"
                          name={input.name}
                          type={input.type}
                          onChange={event => {
                            setFieldValue(
                              input.name,
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </DivCustom>
                    );
                  }
                  break;
                case 2: //legendas
                  if (input.type === "select") {
                    return (
                      <SelectCustom
                        options={["categoria 1", "categoria 2"]}
                        key={index}
                        label={input.label}
                        name={input.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[input.name]}
                      />
                    );
                  }
                  if (input.type === "file") {
                    return (
                      <DivCustom key={index} style={{ width: "49%" }}>
                        <input
                          id="file"
                          name={input.name}
                          type={input.type}
                          onChange={event => {
                            setFieldValue(
                              input.name,
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </DivCustom>
                    );
                  }
                  if (input.type === "disabled") {
                    return (
                      <InputText
                        disabled
                        key={index}
                        label={input.label}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name={input.name}
                      />
                    );
                  }
                  break;
                case 3: //categorias
                  break;
                case 4: //toplegendas
                  if (input.type === "select") {
                    return (
                      <SelectCustom
                        options={["admin", "legender"]}
                        key={index}
                        label={input.label}
                        name={input.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[input.name]}
                      />
                    );
                  }

                  if (input.type === "file") {
                    return (
                      <DivCustom key={index} style={{ width: "49%" }}>
                        <input
                          id="file"
                          name={input.name}
                          type={input.type}
                          onChange={event => {
                            setFieldValue(
                              input.name,
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </DivCustom>
                    );
                  }
                  if (input.type === "disabled") {
                    return (
                      <InputText
                        disabled
                        key={index}
                        label={input.label}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name={input.name}
                      />
                    );
                  }
                  break;
                case 5: //permissoes
                  break;
                case 6: //ranking
                  break;
                case 7: //ranking
                  break;
                default:
              }

              return (
                <InputText
                  key={index}
                  label={input.label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={input.type}
                  name={input.name}
                  value={values[input.name]}
                />
              );
            })}
          </CustomForm>
        </>
      )}
    />
  );
};

export default withRouter(Form);
