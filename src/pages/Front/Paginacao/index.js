import React from "react";
import {PaginacaoContainer,MenuPaginacao,Arrow} from "./styles";

export const Paginacao = (props) => {
  const disabled = props.page && props.page <= 1 ? {background:"#dedede",pointerEvents: "none"} : null;

  return (
    <PaginacaoContainer className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <MenuPaginacao>
              <a href={`#/page/${props.page}`} style={disabled} onClick={() => props.handle(props.page - 1)}>
                  <Arrow>
                   <i className="material-icons">keyboard_arrow_left</i>
                  </Arrow>
                  Anterior
                </a>
                <div className="borda-meio" />
                <a href={`#/page/${props.page}`} onClick={() => props.handle(props.page + 1)}>
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
    </PaginacaoContainer>
    )
}
