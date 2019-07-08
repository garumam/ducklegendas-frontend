import React from "react";
import "./Parceiros.css";

export default (props) => (
      <section className="card parceiros card-shadow">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-card">
                <h2>{props.title}</h2>
              </div>
            </div>
            <div className="card-border"></div>
          </div>
        </div>
      </section>
)

