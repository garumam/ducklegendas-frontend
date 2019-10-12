import React from "react";
import ReactDOM from "react-dom";
import "./assets/bootstrap.min.css";
import GlobalStyles from "./styles/global.js";
import Routes from "./routes";

ReactDOM.render(
  <>
  <GlobalStyles/>
  <Routes/>
  </>,
  document.getElementById("root")
);
