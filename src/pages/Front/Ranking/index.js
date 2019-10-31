import React,{ useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "services/api";
import { Ranking, UsersContainer, Top, GrupoLegendas, Eclipse, More } from "./styles";


export default (props) => {
  const [entities,setEntities] = useState([]);
  const location = useLocation().pathname.replace('/','');

  useEffect(() => {
    async function getItens(){
      const res = await getRequest('rankings/list');

      if(res.success){
        if(location !== 'ranking'){
          res.success.forEach((item, index) => {
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
        }
        res.success = res.success.filter((item) => {
          return item.position < 11;
        });
        setEntities(res.success);
      }
    }
    getItens();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <Ranking className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-card">
              <h2>{props.title}</h2>
              <Eclipse>{entities.length}</Eclipse>
            </div>
          </div>
          <div className="card-border" />
          <Top style={{padding: '0 1.5rem', height: '42px'}}>
              <GrupoLegendas>
                <div className="descricao-legendas">
                  <span>Posição</span>
                  <p>Usuário</p>
                  <span>N° legendas</span>
                </div>
              </GrupoLegendas>
          </Top>
          <UsersContainer style={location === 'ranking'?{ overflowY: 'auto' }:null}>
            {entities.map((item,value) => {
              return (
                <Top key={value}>
                  <GrupoLegendas>
                    <div className="descricao-legendas">
                      <span>{item.position+"°"}</span>
                      <p>{item.empatados? `Empate entre ${item.empatados} usuários`:item.name}</p>
                      <span>{item.subtitles_count}</span>
                    </div>
                  </GrupoLegendas>
                </Top>
              );
            })}
          </UsersContainer>
        {location !== 'ranking' && <More>
            <a href="/ranking">Veja mais...</a>
        </More>}
        </div>
      </div>
    </Ranking>
  )
}
