import React from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "services/api";
import { LoadingContainer,Alert} from "components/Generic";
import { LegendasContainer, Ordenar, SelectBusca, Box, Post } from "./styles";
import { Paginacao } from "pages/Front/Paginacao";
import { formatDate } from "utils/Utils";
import { CircularProgress } from "@rmwc/circular-progress";

const LegendasBody = props => {
  const { entities, setEntities } = props;
  let history = useHistory();
  const handlePageClick = page => {
    setEntities({
      page: page
    });
  };

  const currentDate = formatDate(Date());

  return (
    <>
      <LegendasContainer className="card card-shadow">
        <div className="header-card">
          <h2>{props.title}</h2>
          <SelectBusca>
            <Ordenar>
              <label id="ordernar">Ordernar:</label>
              <select
                onChange={e => setEntities({ order: e.target.value, page: 1 })}
              >
                <option defaultValue value="todas">
                  Todas
                </option>
                <option value="hoje">Hoje</option>
                <option value="semana">Semana</option>
                <option value="mes">Mês</option>
                <option value="semestre">Semestre</option>
                <option value="ano">Ano</option>
                <option value="populares">Populares</option>
              </select>
            </Ordenar>

            <input
              type="text"
              placeholder="Buscar.."
              value={entities.search}
              onChange={e => setEntities({ search: e.target.value })}
            />
          </SelectBusca>
        </div>

        <div className="card-border" />
        <Box>
          {entities.loading ? (
            <LoadingContainer
              style={{
                width: "100%",
                margin: "1rem",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <CircularProgress style={{ color: "#00B6FF" }} size="xlarge" />
            </LoadingContainer>
          ) : entities.dataPaginada.length === 0 ? (
           <Alert type={"danger"} style={{width:'calc(100% - .9rem)',height:'45px'}}>
            <p style={{ textAlign: "center" }}>Legenda não encontrada !!!</p>
           </Alert>
          ) : (
            entities.dataPaginada.map((item, key) => {
              let data = formatDate(item.created_at).substring(0, 10);

              return (
                <Post
                  key={key}
                  lineclamp={item.type === "SERIE" ? 1 : 2}
                  className="card card-shadow"
                >
                  <div className="topo-card">
                    <span>
                      {item.type === "FILME"
                        ? item.year
                        : item.episode &&
                          `${item.episode.substring(
                            1,
                            item.episode.toLowerCase().indexOf("e")
                          )} TEMPORADA`}
                    </span>
                  </div>
                  <a
                    href={`/post/${item.id}`}
                    title="Fazer Download"
                    onClick={e => {
                      e.preventDefault();
                      history.push({
                        pathname: `/post/${item.id}`,
                        state: { item }
                      });
                    }}
                  >
                    <div className="card-media">
                      <img
                        src={
                          item.image
                            ? `${baseUrl}${item.image}?${currentDate}`
                            : "https://via.placeholder.com/160x240"
                        }
                        className="img-fluid"
                        height="240"
                        alt=""
                      />
                    </div>
                    <div className="title-card">
                      <span>{item.name}</span>
                    </div>
                    {item.type === "SERIE" && (
                      <div className="subtitle-card">
                        <span>{item.episode.toUpperCase()}</span>
                      </div>
                    )}
                    <div className="info-card">
                      <span>{`by ${item.author.name} ${data}`}</span>
                    </div>
                  </a>
                </Post>
              );
            })
          )}
        </Box>
      </LegendasContainer>
      <Paginacao
        onClick={handlePageClick}
        page={entities.page}
        lastPage={entities.lastPage}
      />
    </>
  );
};

export default LegendasBody;
