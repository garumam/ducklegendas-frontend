import React,{useEffect} from "react";
import {Publicidade} from "./styles";

export default (props) => {
  useEffect(() => {
    if(typeof window != "undefined"){
      window.onload = function() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
   }
  },[])

  return(  
    <Publicidade className="card card-shadow">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-card">
                <h2>{props.title}</h2>
              </div>
            </div>
            <div className="card-border"></div>
            <ins className="adsbygoogle"
                style={{display:"block",width:'100%',height:'100px'}}
                data-ad-client="ca-pub-1512669587942925"
                data-ad-slot="2980550624"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
          </div>
        </div>
      </Publicidade>
  )
}
