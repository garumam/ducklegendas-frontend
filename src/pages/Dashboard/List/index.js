import React, { useEffect, useState, useReducer, useContext } from "react";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableCell,
  DataTableHeadCell,
  DataTableBody,
  Fab,
  CircularProgress,
} from "rmwc";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import Modal from "components/Modal";
import "./styles.css";
import { FormHeader,SwitchCustom,InputSearch } from "./styles";
import { HeaderCard} from "../Form/styles";
import "@rmwc/data-table/data-table.css";
import "@rmwc/circular-progress/circular-progress.css";
import { baseUrl, getRequest, postRequest } from "services/api";
import { Paginator, getBackendUriBase } from "utils/Utils";
import { ROUTES } from "utils/RoutePaths";
import image_serie from "assets/img/sem_capa.jpg";
import { SizeContext } from 'utils/SizeContext';
import ListMobile from 'components/ListMobile';
import Gallery from 'components/Gallery';

const List = props => {
  const [windowWidth] = useContext(SizeContext);
  const [openModal, setOpenModal] = useState({ open: false });
  const [entities, setEntities] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      pageSelected: 0, // PÁGINA SELECIONADA NO COMPONENTE DE PAGINAÇÃO DO FRONT
      page: 1, // PÁGINA SELECIONADA NA PAGINAÇÃO DO BACKEND DE 100 EM 100 ITEMS
      dataPaginada: [], // DADOS PÁGINADOS DE 10 EM 10 ITEMS
      data: [], // DADOS PÁGINADOS DO BACKEND DE 100 EM 100 ITEMS
      total: 0, // TOTAL DE ITEMS QUE EXISTE NA BASE DE DADOS
      trigSearch: false, // ACIONADOR DE PESQUISA
      loading: true,
      search: "", // PESQUISA
      checked: false // PESQUISA EM TEMPO REAL OU NÃO
    }
  );

  const tableParams = {
    headCells: [],
    headNames: [],
    formPath: ""
  };
  let baseUri = getBackendUriBase(props.history.location.pathname);

  switch (props.table) {
    case 1: //usuários
      tableParams.headCells.push("ID", "Nome", "E-mail");
      // headNames são os nomes dos index (key) dos dados
      // da dataPaginada que poderão ser inseridos na tabela
      tableParams.headNames.push("id", "name", "email");
      tableParams.formPath = ROUTES.DASHBOARD.USER.FORM;
      break;
    case 2: //legendas
      tableParams.headCells.push("ID", "Nome", "Ano", "Categoria", "Status");
      tableParams.headNames.push("id", "name", "year", "category", "status");
      tableParams.formPath = ROUTES.DASHBOARD.SUBTITLE.FORM;
      break;
    case 3: //categorias
      tableParams.headCells.push("ID", "Nome");
      tableParams.headNames.push("id", "name");
      tableParams.formPath = ROUTES.DASHBOARD.CATEGORY.FORM;
      break;
    case 4: //legendas em andamento
      tableParams.headCells.push("ID", "Legenda", "%");
      tableParams.headNames.push("id", "name", "percent");
      tableParams.formPath = ROUTES.DASHBOARD.PROGRESS.FORM;
      break;
    case 5: //galeria
      tableParams.headCells.push('Imagem', 'Nome');
      tableParams.headNames.push('image', 'name');
      tableParams.formPath = ROUTES.DASHBOARD.GALLERY.FORM;
      break;
    case 6: //ranking
      tableParams.headCells.push("Posição", "Usuario", "Qtd de Legendas");
      tableParams.headNames.push("id", "name", "subtitles_count");
      tableParams.formPath = ROUTES.DASHBOARD.RANKING;
      break;
    case 7: //legendas pendentes
      tableParams.headCells.push("ID", "Nome", "Status");
      tableParams.headNames.push("id", "name", "status");
      tableParams.formPath = ROUTES.DASHBOARD.SUBTITLE.FORM;
      baseUri = getBackendUriBase(ROUTES.DASHBOARD.PENDING);
      break;
    case 8: //Mensagens
      tableParams.headCells.push("ID", "Mensagem", "Tipo", "Status");
      tableParams.headNames.push("id", "message", "type", "status");
      tableParams.formPath = ROUTES.DASHBOARD.MESSAGE.FORM;
      break;
    default:
      baseUri = getBackendUriBase(ROUTES.DASHBOARD.GALLERY.LIST);
  }
  
  useEffect(() => {
    let isMount = true;
    async function getItens() {
      const res = await getRequest(
        `/${baseUri}?page=${entities.page}&search=${entities.search}`
      );
      if(isMount){
        if (res.success) {
          console.log("Página selecionada: ", entities.pageSelected);
          setEntities({
            categories: res.categories ? res.categories : null,
            ...res.success,
            dataPaginada: Paginator(res.success.data, entities.pageSelected),
            pageSelected: entities.pageSelected,
            loading: false
          });
        } else {
          setOpenModal({
            open: true,
            error: res.error || "Erro inesperado, por favor atualize a página!"
          });
        }
        console.log("DADOS QUE CHEGARAM: ", res);
      }
    }

    if(props.isgallery){
      getItens();
    }else{
      if (props.location.state) {
        if (props.location.state.anyChange || !props.location.state.entities) {
          getItens();
        } else {
          setEntities({ ...props.location.state.entities });
          props.location.state = undefined;
        }
      } else {
        getItens();
      }
    }
    return () => isMount = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entities.page, entities.trigSearch]);

  const ActiveModal = (isList) => (
    <>
      <Modal
        onConfirm={() => openModal.action === 'excluir'?
                        handleDelete(openModal.id)
                        :handleConfirmSubtitle(openModal.item)
        }
        onClose={() => setOpenModal({ open: false })}
        show={openModal.open}
        showConfirm={openModal.id}
        title={openModal.id ? "Você quer realmente "
                            +(baseUri === 'progress'?"finalizar"
                            : openModal.action)
                            +"?" : "Error"
        }
        content={openModal.id ? openModal.msg : openModal.error}
      />

      {(!openModal.open && isList) && (
        <CircularProgress size="xlarge" style={{ margin: "auto" }} />
      )}
    </>
  );

  const handlePageClick = data => {
    console.log("data selected", data.selected)
    let selected = data.selected;
    let newlevelpage = Math.floor(selected / 10 + 1);
    if (entities.page !== newlevelpage) {
      setEntities({
        pageSelected: selected,
        page: newlevelpage
      });
    } else {
      let dados = Paginator(entities.data, selected);
      console.log(dados);
      setEntities({ dataPaginada: dados, pageSelected: selected });
    }
  };

  const handleDelete = async id => {
    const formData = new FormData();
    formData.append("_method", "DELETE");
    setOpenModal({ open: false });
    const res = await postRequest(`${props.title === "Legendas Pendentes" ? "subtitles" : baseUri}/${id}`, formData);
    if (res.success) {
      let newpageSelected =
        entities.dataPaginada.length === 1
          ? entities.pageSelected - 1
          : entities.pageSelected;
      let newData = entities.data.filter(element => element.id !== id);
      let newDataPaginada = Paginator(newData, newpageSelected);

      setEntities({
        data: newData,
        dataPaginada: newDataPaginada,
        total: entities.total - 1,
        pageSelected: newpageSelected
      });

      if(baseUri === 'progress'){
        props.history.push(ROUTES.DASHBOARD.SUBTITLE.FORM);
      }

    } else {
      setOpenModal({
        open: true,
        error: res.error || "Erro ao excluir por favor atualize a página!"
      });
    }
  };

  const onSearch = e => {
    setEntities({ page: 1, pageSelected: 0, trigSearch: !entities.trigSearch });
  };

  const handleConfirmSubtitle = async (data) => {
    let uri = `subtitles/${data.id}`;
    const formData = new FormData();
    Object.keys(data).map(key => {
      if(key === "status"){
        return formData.append(key, "APROVADA");
      }
        return formData.append(key, data[key] === null?'':data[key]);
    });
    formData.append("_method", "PATCH");
    setOpenModal({ open: false });
    const res = await postRequest(uri, formData)
    if(res.success){
      setEntities({trigSearch: !entities.trigSearch})
    }else{
      setOpenModal({
        open: true,
        error: res.error || "Erro inesperado, por favor atualize a página!"
      });
    }

  }

  return entities.loading ? (
    ActiveModal(true)
  ) : (
    <>
      {ActiveModal(false)}
      {!props.isgallery && (
      <>
      <HeaderCard>
        <h2>{props.title === "Legendas em andamento"? "Em andamento": props.title}</h2>
        {props.title !== "Ranking" && props.title !== "Legendas Pendentes"  && (
            <Fab
              icon="add"
              type="button"
              onClick={() => {
                props.history.push({
                  pathname: tableParams.formPath,
                  state: { entities: entities }
                });
              }}
            />
          )}
      </HeaderCard>
      <div className="card-border" />
      </>
      )}
      <FormHeader 
        isgallery={props.isgallery} 
        hasButton={props.title !== "Ranking" && props.title !== "Legendas Pendentes"}
      >
          <SwitchCustom
            isgallery={props.isgallery} 
            checked={entities.checked}
            onChange={e => setEntities({ checked: e.currentTarget.checked })}
            label="Tempo real"
          />
          <InputSearch
            ranking="0"
            icon={{
              icon: "search",
              tabIndex: 0,
              onClick: onSearch
            }}
            trailingIcon={{
              icon: "close",
              tabIndex: 0,
              onClick: () => {
                setEntities({ search: "" });
                entities.checked && onSearch();
              }
            }}
            onKeyUp={e => {
              if (e.keyCode === 13)
                //ENTER
                onSearch();
            }}
            value={entities.search}
            label="Pesquisar..."
            onChange={e => {
              setEntities({ search: e.target.value });
              entities.checked && onSearch();
            }}
          />
          
        </FormHeader>
      {props.table? windowWidth > 800?
        (<DataTable style={{ width: '100%',height:'calc(100% - 130px)', overflow:'auto',border: "none" }}>
        <DataTableContent style={{ width: "100%" }}>
          <DataTableHead>
            <DataTableRow>
              {tableParams.headCells.map((cell, index) => (
                <DataTableHeadCell
                  style={{ fontSize: "0.8rem", lineHeight: "1.8rem" }}
                  key={index}
                >
                  {cell}
                </DataTableHeadCell>
              ))}
              {props.title !== "Ranking" && (
                <DataTableHeadCell
                  style={{ fontSize: "0.8rem", lineHeight: "1.8rem" }}
                >
                  Ação
                </DataTableHeadCell>
              )}
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {entities.dataPaginada &&
              entities.dataPaginada.map((item, index) => (
                <DataTableRow key={index}>
                  {tableParams.headNames.map((objectKey, i) => (
                    <DataTableCell 
                      style={{
                        maxWidth: '60ch', 
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      }} 
                      key={i}
                    >
                      {objectKey !== 'image'? typeof item[objectKey] === "object"
                        ? item[objectKey].name
                        : item[objectKey]
                        : <img 
                            style={{ maxHeight: '150px' }} 
                            src={`${baseUrl}${item[objectKey]}?${item['updated_at']}`} 
                            onError={(e) => e.target.src = image_serie}
                            alt=""
                          />
                      }
                    </DataTableCell>
                  ))}
                  {props.title !== "Ranking" && (
                    <DataTableCell>
                      <Fab
                        style={{
                          marginRight: "5px",
                          backgroundColor: "var(--edit-button)"
                        }}
                        mini
                        icon="create"
                        type="button"
                        onClick={() => {
                          props.history.replace({
                            pathname: `${tableParams.formPath}/${item.id}`,
                            state: {
                              item: item,
                              entities: entities
                            }
                          });
                        }}
                      />
                      {props.title === "Legendas Pendentes" && 
                      <Fab
                        style={{
                          marginRight: "5px",
                          backgroundColor: "#4CAF50"
                        }}
                        mini
                        icon="save"
                        type="button"
                        onClick={() => 
                          setOpenModal({
                            open: true,
                            id: item.id,
                            msg: `Id: ${item.id}  Nome: ${item.name}`,
                            item: item,
                            action: 'aprovar'
                          })
                        }
                        />
                      }
                      <Fab
                        style={{ backgroundColor: "var(--delete-button)" }}
                        mini
                        icon={baseUri === 'progress'?"assignment_turned_in":"delete"}
                        type="button"
                        onClick={() =>
                          setOpenModal({
                            open: true,
                            id: item.id,
                            msg: `Id: ${item.id}  ${item.name?'Nome: '+item.name:'Mensagem: '+item.message}`,
                            action: 'excluir'
                          })
                        }
                      />
                    </DataTableCell>
                  )}
                </DataTableRow>
              ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>)
      :
      <ListMobile 
        entities={entities} 
        tableParams={tableParams} 
        {...props} 
        setOpenModal={setOpenModal}
        baseUri={baseUri}
      />
      :
      
      <Gallery 
        data={entities.dataPaginada} 
        setFieldValue={props.setFieldValue} 
        inputName={props.inputName} 
      />
      
      }
      <ReactPaginate
        forcePage={entities.pageSelected}
        previousLabel={<i className="material-icons">keyboard_arrow_left</i>}
        nextLabel={<i className="material-icons">keyboard_arrow_right</i>}
        breakLabel={"..."}
        breakClassName={"break"}
        pageCount={Math.ceil(entities.total / 10)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default withRouter(List);
