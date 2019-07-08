import React from "react";
import "./Paginacao.css";

export default () => (
    <section className="card paginacao card-shadow">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <div className="menu-paginacao">
                <a href="{null}">
                  <div className="arrow">
                   <i className="material-icons">keyboard_arrow_left</i>
                  </div>
                  Anterior
                </a>
                <div className="borda-meio" />
                <a href="{null}">
                Proximo
                <div className="arrow">
                   <i className="material-icons">keyboard_arrow_right</i>
                  </div>
                 
                </a>
              </div>
          </div>
          <div className="card-border" />
        </div>
      </div>
    </section>
  )
