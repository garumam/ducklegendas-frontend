import React, { useEffect } from "react";
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
  TextField,
  Switch
} from "rmwc";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import Modal from "../../../Modal";
import "./styles.css";
import { HeaderCard,InputSearch } from "../Form/styles";
import "@rmwc/data-table/data-table.css";
import "@rmwc/circular-progress/circular-progress.css";
import api from "../../../../services/api";

// 10  offset = 100 100%100 = 0
const Paginator = (items, page) => {
  page = page || 0;
  let per_page = 10;
  let offset = page * per_page;
  offset = offset >= 100 ? offset % 100 : offset;

  return items.slice(offset).slice(0, per_page);
};

const List = props => {
  const [openModal, setOpenModal] = React.useState({ open: false });
  const [search, setSearch] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [entities, setEntities] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      pageSelected: 0,
      page: 1,
      dataPaginada: [],
      data: [],
      total: 0,
      trigSearch: false
    }
  );

  const tableParams = {
    headCells: [],
    headNames: [],
    formPath: "/form",
    uriSearch: ''
  };

  switch (props.table) {
    case 1: //usuários
      tableParams.headCells.push("ID", "Nome", "E-mail");
      tableParams.headNames.push("id", "name", "email");
      tableParams.uriSearch = "users";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    case 2: //legendas
      tableParams.headCells.push("ID", "Nome", "Categoria", "Autor");
      tableParams.uriSearch = "subtitles";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    case 3: //categorias
      tableParams.headCells.push("ID", "Nome", "Descrição", "Classificação");
      tableParams.uriSearch = "categories";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    case 4: //legendas em andamento
      tableParams.headCells.push("ID", "Legenda", "%", "Categoria");
      tableParams.uriSearch = "progress";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    case 5: //ranking
      tableParams.headCells.push(
        "Posição",
        "Usuario",
        "Qtd de Legendas",
        "Descrição"
      );
      tableParams.uriSearch = "ranking";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    case 6: //galeria
      tableParams.headCells.push("ID", "Nome", "Descrição", "Descrição2");
      tableParams.uriSearch = "gallery";
      tableParams.formPath = tableParams.uriSearch + tableParams.formPath;
      break;
    default:
  }

  useEffect(() => {
    async function getItens() {
      const res = await api.post(`/${tableParams.uriSearch}?page=${entities.page}`,{ search: search });

      if (res.success) {
        console.log("Página selecionada: ", entities.pageSelected);
        setEntities({
          ...res.success,
          dataPaginada: Paginator(res.success.data, entities.pageSelected),
          total: Math.ceil(res.success.total / 10),
          pageSelected: entities.pageSelected
        });
      } else {
        setOpenModal({ open: true, error: res.error || 'Erro inesperado, por favor atualize a página!'});
      }
      console.log(res);
    }

    if (props.location.state) {
      if (props.location.state.anyChange) {
        getItens();
      } else {
        setEntities({ ...props.location.state.entities });
        props.location.state = undefined;
      }
    } else {
      getItens();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entities.page, entities.trigSearch]);

  const error = () => (
    <>
      <Modal
        onClose={() => setOpenModal({ open: false })}
        show={openModal.open}
        title={"Error"}>
        {openModal.error}
      </Modal>
      {!openModal.open &&
        <CircularProgress size="xlarge" style={{ margin: "auto" }} />
      }
    </>
  );

  const handlePageClick = data => {
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

  const onSearch = (e) => {
    setEntities({ page: 1, pageSelected: 0, trigSearch: !entities.trigSearch });
  }

  return entities.total === 0 ? (
    error()
  ) : (
    <>
      <HeaderCard>
        <h2>{props.title}</h2>
        <div style={{display:'flex',alignItems:'center'}}>
        <Switch
          style={{height:'60px',color:'rgba(0,0,0,.6)',fontWeight:600,fontFamily:'Montserrat, sans-serif'}}
          id="realTime"
          checked={checked}
          onChange={e => setChecked(e.currentTarget.checked)}
          label="Tempo real"
        />
        <InputSearch 
          icon={{
            icon: 'search',
            tabIndex: 0,
            onClick: onSearch
          }}
          trailingIcon={{
            icon: 'close',
            tabIndex: 0,
            onClick: () => setSearch('')
          }} 
          onKeyUp={(e) => {
            if(e.keyCode === 13) //ENTER
              onSearch();
          }}
          value={search}
          label="Pesquisar..."
          onChange={(e) => {
            setSearch(e.target.value) 
            checked && onSearch();
          }} 
        />
      
        {props.title !== "Ranking" && (
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
        </div>
      </HeaderCard>
      <div className="card-border" />
      <DataTable style={{ height: "100%", border: "none" }}>
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
              <DataTableHeadCell
                style={{ fontSize: "0.8rem", lineHeight: "1.8rem" }}
              >
                Ação
              </DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {entities.dataPaginada &&
              entities.dataPaginada.map((user, index) => (
                <DataTableRow key={index}>
                  {Object.keys(user).map(
                    (item, i) =>
                      tableParams.headNames.includes(item) && (
                        <DataTableCell key={i}>{user[item]}</DataTableCell>
                      )
                  )}

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
                        props.history.push({
                          pathname: `${tableParams.formPath}/${user.id}`,
                          state: {
                            user: user,
                            entities: entities
                          }
                        });
                      }}
                    />
                    <Fab
                      style={{ backgroundColor: "var(--delete-button)" }}
                      mini
                      icon="delete"
                      type="button"
                      onClick={() => {
                        console.log("DELETANDO");
                      }}
                    />
                  </DataTableCell>
                </DataTableRow>
              ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      <ReactPaginate
        forcePage={entities.pageSelected}
        previousLabel={<i className="material-icons">keyboard_arrow_left</i>}
        nextLabel={<i className="material-icons">keyboard_arrow_right</i>}
        breakLabel={"..."}
        breakClassName={"break"}
        pageCount={entities.total}
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
