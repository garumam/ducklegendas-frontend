import React from "react";
import { Formik } from "formik";
import { Fab } from "@rmwc/fab";
import {
  CustomForm,
  InputText,
  HeaderCard,
  SelectCustom,
  DivCustom
} from "./styles";
import { withRouter } from "react-router-dom";
import api from '../../../../services/api';
import image from "../../../../assets/img/man.png";

const Form = props => {
  const inputParams = [],
    labels = [],
    types = [],
    names = [],
    initialValues = {};

  switch (props.form) {
    case 1: //usuários
      labels.push("Nome", "E-mail", "Senha", "Permissão", "Imagem");
      types.push("text", "email", "password", "select", "file");
      names.push("name", "email", "password", "permission", "img");
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
    case 4: //toplegendas
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
    case 5: //permissoes
      labels.push("Nome", "Descrição");
      types.push("text", "text");
      names.push("nome", "descricao");
      break;
    case 7: //galeria
      labels.push("Nome", "Descrição");
      types.push("text", "text");
      names.push("nome", "descricao");
      break;
    default:
  }

  for (let index = 0; index < labels.length; index++) {
    inputParams.push({
      label: labels[index],
      type: types[index],
      name: names[index]
    });
    initialValues[names[index]] = "";
  }

  const store = async (values) => {
    console.log(values);

    const formData = new FormData();
    Object.keys(values).map((key) => {
      formData.append(key, values[key]);
    });

    await api.post('/register', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(r=>{
      console.log('RESPOSTA SERVIDOR: ',r);
    }).catch(e=>{

      if (e.response === undefined) { // NETWORK ERROR
        console.log('Sem conexão');
      }else{
        console.log(e.response.data.error);
      }
      
    });
    
  }

  return (
    <Formik
      initialValues={{
        ...initialValues
      }}
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
                  props.history.goBack();
                }}
              />
              <Fab icon="save" type="button" onClick={handleSubmit} />
            </div>
          </HeaderCard>
          <div className="card-border" />
          <CustomForm onSubmit={handleSubmit} className="formulario">
            {inputParams.map((input, index) => {
              switch (props.form) {
                case 1: //usuários
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
                        <img
                          style={{
                            width: "150px",
                            padding: "1rem 1rem 1rem 0"
                          }}
                          src={
                            values[input.name] instanceof File
                              ? URL.createObjectURL(values[input.name])
                              : image
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
