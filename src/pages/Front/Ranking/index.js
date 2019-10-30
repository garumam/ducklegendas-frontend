import React,{ useState, useEffect } from "react";
import { getRequest } from "services/api";
import { Ranking, UsersContainer, Top, GrupoLegendas } from "./styles";


export default (props) => {
  const [entities,setEntities] = useState([]);

  useEffect(() => {
    async function getItens(){
      const res = await getRequest('rankings/list');
      console.log(res);
      if(res.success){
        res.success.filter((item, index) => {
          let count = 1;
          let nextIndex = index+count;
          if(nextIndex < res.success.length){
            while(res.success[nextIndex] && item.position === res.success[nextIndex].position){
              res.success.splice(nextIndex, 1);
              count++;
            }
          }
          if(count > 1){
            res.success[index].empatados = count;
          }
          return false;
        });
        res.success = res.success.filter((item) => {
          return item.position < 11;
        });
        setEntities(res.success);
      }
    }
    getItens();
  }, []);

  return(
    <Ranking className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-card">
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className="card-border" />
          <UsersContainer>
            {entities.map((item,value) => {
              return (
                <Top key={value}>
                  <GrupoLegendas>
                    <p>{item.empatados? `Empate entre ${item.empatados} usuários`:item.name}</p>
                    <div className="descricao-legendas">
                      <span>{item.position+"°"}</span>
                      <span>{"N° de legendas: "+item.subtitles_count}</span>
                    </div>
                  </GrupoLegendas>
                </Top>
              );
            })}
          </UsersContainer>
        </div>
      </div>
    </Ranking>
  )
}
