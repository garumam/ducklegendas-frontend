import React, { useReducer, useState, useEffect, useContext } from "react";
import { Formik } from "formik";
import { Fab, SimpleDialog, CircularProgress } from "rmwc";
import {
  CustomForm,
  InputText,
  HeaderCard,
  SelectCustom,
  DivCustom,
  Error,
  GalleryContainer,
  InputCheckbox
} from "./styles";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { baseUrl, getRequest, postRequest } from "services/api";
import image from "assets/img/man.png";
import image_serie from "assets/img/sem_capa.jpg";
import * as YupValidation from "services/YupValidation";
import { AuthContext } from "utils/AuthContext";
import {
  getBackendUriBase,
  setInputsParams,
  prepareCategories
} from "utils/Utils";
import { Inputs } from "utils/Inputs";
import { ROUTES } from "utils/RoutePaths";
import List from "pages/Dashboard/List";
import {LoadingContainer} from "components/Generic"

const Form = props => {
  const history = useHistory();
  const location = useLocation();
  const routeParams = useParams();
  const categories =
    location.state &&
    location.state.entities &&
    prepareCategories(location.state.entities.categories);

  const [openModal, setOpenModal] = useState({
    open: false,
    setFieldValue: () => {},
    inputName: ""
  });
  const [user, setUser] = useContext(AuthContext);
  const [data, setData] = useState({
    values: null,
    categories: categories || []
  });

  const [entities, setEntities] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      errorsReponse: null,
      anyChange: false,
      loading: false
    }
  );

  const validationSchema = [],
    dataPassed = location.state ? location.state.item : null;

  const [checked, setChecked] = React.useState(
    dataPassed ? (dataPassed.type === "SERIE" ? true : false) : false
  );
  let params = {};

  const baseUri = getBackendUriBase(history.location.pathname);
  const checkUser = user.user_type === "user" ? "disabled" : false;
  switch (props.form) {
    case 1: //usuários
      params = Inputs.user;
      validationSchema.push(YupValidation.UserSchema);
      break;
    case 2: //legendas
      params = Inputs.subtitle;
      validationSchema.push(YupValidation.SubtitleSchema);
      break;
    case 3: //categorias
      params = Inputs.category;
      validationSchema.push(YupValidation.CategorySchema);
      break;
    case 4: //legendas em andamento
      params = Inputs.progress;
      validationSchema.push(YupValidation.ProgressSchema);
      break;
    case 5: //galeria
      params = Inputs.gallery;
      validationSchema.push(YupValidation.GallerySchema);
      break;
    case 6: //mensagens
      params = Inputs.message;
      validationSchema.push(YupValidation.MessageSchema);
      break;
    default:
  }

  useEffect(() => {
    let isMount = true;
    async function getItem() {
      const res = await getRequest(`/${baseUri}/${routeParams.id}`);
      //console.log(res.success);
      if (isMount) {
        if (res.success || res.categories) {
          if (res.success && res.success.type === "SERIE") setChecked(true);

          setData({
            values: res.success,
            categories: prepareCategories(res.categories)
          });
        } else {
          setEntities({
            errorsReponse: res.error
          });
        }
      }
    }
    if (
      (routeParams.id && dataPassed === null) ||
      (baseUri === "subtitles" && data.categories.length === 0)
    ) {
      getItem();
    }
    return () => (isMount = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log("categorias", categories);
  //inicio dos inputs
  const [inputParams, initialValues] = setInputsParams(
    params.labels,
    params.types,
    params.names,
    dataPassed || data.values
  );

  // fim dos inputs

  const store = async values => {
    //console.log("valores values: ", values);

    let uri = `/${baseUri}/store`;
    let updateContext = false;
    const formData = new FormData();
    Object.keys(values).map(key => {
      if (baseUri === "gallery" && key === "image" && checked) {
        for (let i = 0; i < values[key].length; i++) {
          formData.append(`image[${i}]`, values[key][i]);
        }
      } else {
        formData.append(key, values[key]);
      }
      return "";
    });

    if (baseUri === "gallery") {
      formData.append("multiplefiles", checked ? true : "");
    }

    if (data.values || dataPassed) {
      const itemId = data.values ? data.values.id : dataPassed.id;
      uri = `/${baseUri}/${itemId}`;
      formData.append("_method", "PATCH");
      if (baseUri === "users") updateContext = itemId === user.id;
    }
    setEntities({ loading: true, errorsReponse: null });
    const res = await postRequest(uri, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    if (res.success) {
      setEntities({
        anyChange: true,
        errorsReponse: res.success,
        loading: false
      });
      if (updateContext) {
        const filename = values.image ? values.image.name : null;
        setUser({
          name: values.name,
          user_type: values.user_type,
          email: values.email,
          image: filename
            ? "img/users/" +
              user.id +
              filename.substring(filename.lastIndexOf("."), filename.length)
            : user.image,
          update: true,
          updated_at: new Date().getTime().toString()
        });
      }
    } else {
      setEntities({
        errorsReponse: res.error,
        loading: false
      });
    }
  };

  const galleryModal = (setFieldValue, inputName) => {
    setOpenModal({
      open: true,
      setFieldValue: setFieldValue,
      inputName: inputName
    });
  };

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
          <SimpleDialog
            style={{ zIndex: "999", position: "fixed" }}
            title="Selecione uma imagem"
            acceptLabel={null}
            cancelLabel="fechar"
            open={openModal.open}
            onClose={evt => {
              setOpenModal({ open: false });
            }}
          >
            <List
              isgallery="true"
              setFieldValue={openModal.setFieldValue}
              inputName={openModal.inputName}
            />
          </SimpleDialog>

          <HeaderCard>
            <h2>
              {props.title === "Legendas em andamento"
                ? "Em andamento"
                : props.title}
            </h2>
            
              {entities.loading?
              <LoadingContainer>
                <CircularProgress size="xlarge" />
              </LoadingContainer>
              :
              <div>
              <Fab
                icon="keyboard_arrow_left"
                style={{ marginRight: "12px" }}
                type="button"
                onClick={() => {
                  history.replace({
                    pathname: `${ROUTES.DASHBOARD.HOME}/${baseUri}`,
                    state: {
                      anyChange:
                        location.state && location.state.islogin
                          ? true
                          : entities.anyChange,
                      entities: location.state && location.state.entities
                    }
                  });
                }}
              />
              <Fab icon="save" type="button" onClick={handleSubmit} />
              </div>
              }
          </HeaderCard>
          <div className="card-border" />
          <CustomForm onSubmit={handleSubmit} className="formulario">
            {(Object.keys(errors).length !== 0 || entities.errorsReponse) && (
              <Error>
                {entities.errorsReponse &&
                  Object.keys(entities.errorsReponse).map(key => (
                    <span key={key}>*{entities.errorsReponse[key]}</span>
                  ))}
                {inputParams.map(
                  (input, index) =>
                    errors[input.name] &&
                    touched[input.name] && (
                      <span key={index}>*{errors[input.name]}</span>
                    )
                )}
              </Error>
            )}

            {inputParams.map((input, index) => {
              switch (props.form) {
                case 1: //usuários
                  if (input.type === "select") {
                    return (
                      <SelectCustom
                        options={["admin", "moderador", "autor", "legender","desativado"]}
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
                      <DivCustom key={index}>
                        <img
                          style={{
                            width: "150px",
                            padding: "1rem 1rem 1rem 0"
                          }}
                          src={
                            values[input.name] instanceof File
                              ? URL.createObjectURL(values[input.name])
                              : values[input.name]
                              ? baseUrl +
                                values[input.name] +
                                `?${new Date().getTime()}`
                              : image
                          }
                          onError={e => (e.target.src = image)}
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
                        disabled={checkUser}
                        options={
                          input.name === "category"
                            ? data.categories
                            : ["PENDENTE", "APROVADA"]
                        }
                        key={index}
                        label={input.label}
                        name={input.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={
                          values[input.name] ||
                          (input.name !== "category" ? "PENDENTE" : "")
                        }
                      />
                    );
                  }
                  if (input.name === "image") {
                    return (
                      <DivCustom
                        key={index}
                        style={{ width: "100%", paddingBottom: "1rem" }}
                      >
                        <label style={{ width: "100%", fontSize: ".9rem" }}>
                          Imagem da Legenda
                        </label>
                        <GalleryContainer>
                          <img
                            src={
                              values[input.name]
                                ? baseUrl + values[input.name]
                                : image_serie
                            }
                            onError={e => (e.target.src = image_serie)}
                            alt=""
                          />
                          <Fab
                            type="button"
                            icon="add"
                            onClick={() =>
                              galleryModal(setFieldValue, input.name)
                            }
                          />
                        </GalleryContainer>
                        <input
                          disabled
                          label={input.label}
                          onChange={handleChange}
                          type={input.type}
                          name={input.name}
                          value={values[input.name]}
                        />
                      </DivCustom>
                    );
                  }
                  if (input.type === "checkbox") {
                    return (
                      <InputCheckbox
                        key={index}
                        label="Marque se for uma série."
                        checked={checked}
                        name={input.name}
                        onChange={e => {
                          let newChecked = !checked;
                          setFieldValue(input.name, newChecked ? "SERIE" : "");
                          setChecked(newChecked);
                        }}
                      />
                    );
                  }
                  if (input.name === "episode") {
                    return checked ? (
                      <InputText
                        key={index}
                        label={input.label}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={input.type}
                        name={input.name}
                        value={values[input.name]}
                      />
                    ) : null;
                  }

                  if (input.type === "textarea") {
                    return (
                      <InputText
                        style={{ width: "100%" }}
                        textarea
                        outlined
                        characterCount
                        fullwidth
                        key={index}
                        label={input.label}
                        rows={10}
                        maxLength={1500}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={input.name}
                        value={values[input.name]}
                      />
                    );
                  }
                  break;
                case 3: //categorias
                  break;
                case 4: //legendas em andamento
                  break;
                case 5: //gallery
                  if (input.type === "file") {
                    return (
                      <DivCustom
                        key={index}
                        style={{ width: "100%", paddingBottom: "1rem" }}
                      >
                        {routeParams.id === undefined &&
                          user.user_type === "admin" && (
                            <InputCheckbox
                              label="Marque para enviar várias imagens!"
                              checked={checked}
                              onChange={e => {
                                let newChecked = !checked;
                                setChecked(newChecked);
                              }}
                            />
                          )}
                        {!checked && (
                          <img
                            style={{
                              width: "150px",
                              padding: "1rem 1rem 1rem 0"
                            }}
                            src={
                              values[input.name] instanceof File
                                ? URL.createObjectURL(values[input.name])
                                : values[input.name]
                                ? `${baseUrl}${
                                    values[input.name]
                                  }?${dataPassed && dataPassed.updated_at}`
                                : image_serie
                            }
                            onError={e => (e.target.src = image_serie)}
                            alt=""
                          />
                        )}
                        <input
                          id="file"
                          multiple={checked}
                          name={input.name}
                          type={input.type}
                          onChange={event => {
                            setFieldValue(
                              input.name,
                              checked
                                ? event.currentTarget.files
                                : event.currentTarget.files[0]
                            );
                          }}
                        />
                      </DivCustom>
                    );
                  }

                  if (input.type === "text") {
                    return (
                      <InputText
                        style={checked ? { display: "none" } : null}
                        key={index}
                        label={input.label}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={input.type}
                        name={input.name}
                        value={values[input.name]}
                      />
                    );
                  }
                  break;
                case 6: //mensagens
                  if (input.type === "select") {
                    return (
                      <SelectCustom
                        options={
                          input.name === "status"
                            ? ["ON", "OFF"]
                            : ["primary", "success", "danger", "warning"]
                        }
                        key={index}
                        label={input.label}
                        name={input.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={
                          values[input.name] ||
                          (input.name === "status" ? "OFF" : "warning")
                        }
                      />
                    );
                  }
                  if (input.type === "textarea") {
                    return (
                      <InputText
                        textarea
                        outlined
                        characterCount
                        fullwidth
                        key={index}
                        label={input.label}
                        rows={6}
                        maxLength={200}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={input.name}
                        value={values[input.name]}
                      />
                    );
                  }
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

export default Form;
