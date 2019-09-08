import React from "react";
import ReactDOM from "react-dom";
import "./assets/bootstrap.min.css";
import GlobalStyles from "./styles/global.js";
import Routes from "./routes";


// import '../node_modules/material-components-web/dist/material-components-web.min.css';

ReactDOM.render(
  <>
  <GlobalStyles/>
  <Routes/>
  </>,
  document.getElementById("root")
);
