import React, { Component } from "react";
import Header from "../Front/Header";
import Footer from "../Front/Footer";
import Logo from "assets/img/duck-128.png";
import Front from "../Front/Front";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Legendas" logo={Logo} />
        <Front children={this.props.children} />
        <Footer title="Duck Legendas" logo={Logo} />
      </div>
    );
  }
}
export default App;
