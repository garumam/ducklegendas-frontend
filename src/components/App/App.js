import React, { Component } from "react";
import Header from "../Front/Header";
import Footer from "../Front/Footer";
import Logo from "assets/img/duck-128.png";
import Front from "../Front/Front";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";



class App extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  render() {
    // const { location } = this.props;
    // const isPainel = location.pathname === "/painel" ?  <div style={estilo} className="container flex-center">{this.props.children}</div> : <Front children={this.props.children} />;
    return (
      <div className="App">
        <Header title="Legendas" logo={Logo} />
        <Front children={this.props.children} />
        <Footer title="Duck Legendas" logo={Logo} />
      </div>
    );
  }
}
// export default (App = withRouter(App));
export default App;
