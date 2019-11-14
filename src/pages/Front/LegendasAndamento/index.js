import React, { useState, useEffect } from "react";
import { TopLegendas, Top, GrupoLegendas, LegendasContainer } from "./styles";
import { Eclipse } from "components/Generic";
import { getRequest } from "services/api";
import { formatDate } from "utils/Utils";

const style = porcentagem => {
  return { width: porcentagem + "%" };
};

export const LegendasAndamento = props => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    async function getItems() {
      const res = await getRequest("/subtitles/andamento/list");
      if (res.success) {
        setEntities(res.success);
      }
    }
    getItems();
  }, []);
  return (
    <TopLegendas className="card card-shadow">
      <div className="header-card">
        <h2>{props.title}</h2>
        <Eclipse>{entities.length}</Eclipse>
      </div>

      <div className="card-border" />
      <LegendasContainer>
        {entities.map((item, value) => {
          return (
            <Top key={value}>
              <GrupoLegendas>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <p>{item.name}</p> <span style={{color:'#9fa9ba'}}>Autor: {item.author.name}</span>
                </div>
                
                <div className="descricao-legendas">
                  <span>{"Atualizado em: " + formatDate(item.updated_at)}</span>
                  <span>{item.percent} %</span>
                </div>
                <div className="progressbar">
                  <span style={style(item.percent)} />
                </div>
              </GrupoLegendas>
            </Top>
          );
        })}
      </LegendasContainer>
    </TopLegendas>
  );
};
