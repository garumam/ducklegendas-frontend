import React from "react";
import "./TopLegendas.css";

const style = (porcentagem) => {
  return {width: porcentagem+"%"}
};

const legendas = [
  {id:1,nome:"Kung Fu Panda Legend - 2015", addtime: "1 Minutos ago",porcentagem: "10"},
  {id:2,nome:"Kung Fu Panda Legend - 2016", addtime: "10 Minutos ago",porcentagem: "25"},
  {id:3,nome:"Kung Fu Panda Legend - 2017", addtime: "20 Minutos ago",porcentagem: "50"},
  {id:4,nome:"Kung Fu Panda Legend - 2018", addtime: "30 Minutos ago",porcentagem: "67"},
  {id:5,nome:"Kung Fu Panda Legend - 2020", addtime: "50 Minutos ago",porcentagem: "95"},
  {id:6,nome:"Kung Fu Panda Legend - 2021", addtime: "60 Minutos ago",porcentagem: "99"},
  {id:7,nome:"Kung Fu Panda Legend - 2022", addtime: "120 Minutos ago",porcentagem: "100"}
];

export default props => (
  <section className="card top-legendas card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{props.title}</h2>
            <div className="eclipse">{legendas.length}</div>
          </div>
        </div>
        <div className="card-border" />

        {legendas.map((index,value) => {
          return (
            <div key={value} className="top">
              <img className="eclipse" alt="" src="#" />
              <div className="grupo-legendas">
                <p>{index.nome}</p>
                <div className="descricao-legendas">
                  <span>{index.addtime}</span>
                  <span>{index.porcentagem} %</span>
                </div>
                <div className="progressbar">
                  <span style={style(index.porcentagem)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
