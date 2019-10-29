import React from "react";
import {PaginacaoContainer,MenuPaginacao,Arrow} from "./styles";

export const Paginacao = (props) => {
  const disabled = {background:"#dedede",pointerEvents: "none"};

  return (
    <PaginacaoContainer className="card card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <MenuPaginacao>
              <a 
                href="#null" 
                style={props.page && props.page <= 1?disabled:null} 
                onClick={(e) => {
                e.preventDefault();
                props.handle(props.page - 1);
              }}>
                  <Arrow>
                   <i className="material-icons">keyboard_arrow_left</i>
                  </Arrow>
                  Anterior
                </a>
                <div className="borda-meio" />
                <div 
                  style={{
                    width: '150px', 
                    color: 'black', 
                    margin: 'auto 0', 
                    textAlign: 'center'
                  }}
                >
                {props.page}
                </div>
                <div className="borda-meio" />
                <a 
                  href="#null" 
                  style={props.lastPage === props.page?disabled:null}
                  onClick={(e) => {
                  e.preventDefault();
                  props.handle(props.page + 1);
                }}>
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
