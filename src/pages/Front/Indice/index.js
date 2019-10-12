import React from "react";
import {Indice} from "./styles";

export default props => (
  <Indice className="card card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="card-border" />
       
      </div>
    </div>
  </Indice>
);
