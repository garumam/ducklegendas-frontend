import React,{useState,useEffect} from "react";
import {TopLegendas,Eclipse,Top,GrupoLegendas} from "./styles";
import { getRequest } from "services/api";

const style = (porcentagem) => {
  return {width: porcentagem+"%"}
};

export const LegendasAndamento = (props) => {
  const [entities,setEntities] = useState([]);
  useEffect(()=>{
    async function getItems(){
      const res = await getRequest('/subtitles/andamento/list');
      if (res.success) {
        setEntities(res.success)
      }
    }
    getItems();
  },[])
  return(
    <TopLegendas className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-card">
              <h2>{props.title}</h2>
              <Eclipse>{entities.length}</Eclipse>
            </div>
          </div>
          <div className="card-border" />

          {entities.map((item,value) => {
            return (
              <Top key={value}>
                <img alt="" src="#" />
                <GrupoLegendas>
                  <p>{item.name}</p>
                  <div className="descricao-legendas">
                    <span>{item.updated_at}</span>
                    <span>{item.percent} %</span>
                  </div>
                  <div className="progressbar">
                    <span style={style(item.percent)} />
                  </div>
                </GrupoLegendas>
              </Top>
            );
          })}
        </div>
      </div>
    </TopLegendas>
  );
}