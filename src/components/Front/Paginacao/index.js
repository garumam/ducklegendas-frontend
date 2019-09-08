import React from "react";
import {Paginacao,MenuPaginacao,Arrow} from "./styles";

export default () => (
    <Paginacao className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <MenuPaginacao>
                <a href="{null}">
                  <Arrow>
                   <i className="material-icons">keyboard_arrow_left</i>
                  </Arrow>
                  Anterior
                </a>
                <div className="borda-meio" />
                <a href="{null}">
                Proximo
                <Arrow>
                   <i className="material-icons">keyboard_arrow_right</i>
                </Arrow>
                 
                </a>
              </MenuPaginacao>
          </div>
          <div className="card-border" />
        </div>
      </div>
    </Paginacao>
  )
