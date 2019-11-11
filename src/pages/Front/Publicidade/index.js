import React from "react";
import { Publicidade } from "./styles";

export default props => {

  return (
    <Publicidade className="card card-shadow">
      <div className="header-card">
        <h2>{props.title}</h2>
      </div>
      <div className="card-border"></div>
    </Publicidade>
  );
};
