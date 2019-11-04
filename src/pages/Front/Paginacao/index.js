import React from "react";
import {PaginacaoContainer,MenuPaginacao,Arrow} from "./styles";

export const Paginacao = ({onClick,page,lastPage}) => {
  const disabled = {background:"#dedede",pointerEvents: "none"};

  return (
    <PaginacaoContainer className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <MenuPaginacao>
              <span
                style={page && page <= 1 ? disabled : null} 
                onClick={(e) => {
                e.preventDefault();
                onClick(page - 1);
              }}>
                  <Arrow>
                   <i className="material-icons">keyboard_arrow_left</i>
                  </Arrow>
                  Anterior
                </span>
                <div className="borda-meio" />
                <div 
                  style={{
                    width: '150px', 
                    color: 'black', 
                    margin: 'auto 0', 
                    textAlign: 'center'
                  }}
                >
                {page}
                </div>
                <div className="borda-meio" />
                <span
                  style={lastPage === page || lastPage === 0 ? disabled : null}
                  onClick={(e) => {
                  e.preventDefault();
                  onClick(page + 1);
                }}>
                Proximo
                <Arrow>
                   <i className="material-icons">keyboard_arrow_right</i>
                </Arrow>
                 
                </span>
              </MenuPaginacao>
          </div>
          <div className="card-border" />
        </div>
      </div>
    </PaginacaoContainer>
    )
}
