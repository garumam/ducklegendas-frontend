import React from "react";
import ReactDOM from "react-dom";
// import "./assets/bootstrap.min.css";
import GlobalStyles from "./styles/global.js";
import Routes from "./routes";
import HeadHelmet from "services/HeadHelmet";

ReactDOM.render(
  <>
  <HeadHelmet useDefault />
  <GlobalStyles/>
  <Routes/>
  </>,
  document.getElementById("root")
);
