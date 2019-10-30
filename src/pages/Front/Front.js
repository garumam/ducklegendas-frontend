import React, { Fragment } from "react";
import Doacao from "./Doacao";
import {LegendasAndamento} from "./LegendasAndamento";
import Ranking from "./Ranking";
import Parceiros from "./Parceiros";

export default props => (
  <Fragment>
    <div  className="container paddingTop">
      <div className="alert alert-success">
        Quer ajudar a postar legendas no site ? entre em contato e peça seu
        login !!!
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          {props.children}
          <Parceiros title="Parceiros" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <Doacao title="Doação" />
          <LegendasAndamento title="Próximas Legendas" />
          <Ranking title="Ranking" />
        </div>
      </div>
    </div>
  </Fragment>
);
