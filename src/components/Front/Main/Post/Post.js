import React from "react";
import "./Post.css";
import {InputPersonalizado} from "../../Contato/Contato";

export default props => (
  <section className="card post card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="card-border" />
        <section className="post-info">
          <p>by Admin, Adicionado 06/12/2017</p>
          <article>
            <img
              src="http://via.placeholder.com/160x240"
              className="img-fluid"
              height="240"
              alt=""
            />
            <p>
              Episódio 13×09 – The Bad Place” <br />
              Legendas: <br />
              Supernatural.S13E09.720p.HDTV.x264-AVS
              <br />
              Supernatural.S13E09.1080p.HDTV.x264-CRAVERS
              <br />
              Supernatural.S13E09.HDTV.x264-SVA
              <br />
              Supernatural.S13E09.iNTERNAL.720p.WEB.x264-BAMBOOZLE
              <br />
              
            </p>
            <InputPersonalizado type="submit" value="Download"/>
          </article>
        </section>
      </div>
    </div>
  </section>
);
