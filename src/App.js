import React from "react";
import Header from "pages/Front/Header";
import Footer from "pages/Front/Footer";
import Logo from "assets/img/duck-128.png";
import Front from "pages/Front/Front";

const App = (props) => (
  <div className="App">
    <Header title="Legendas" logo={Logo} />
    <Front children={props.children} />
    <Footer title="Duck Legendas" logo={Logo} />
  </div>
)

export default App;
