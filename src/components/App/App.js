import React, { Component } from "react";
import Header from "../Front/Header/Header";
import Footer from "../Front/Footer/Footer";
import Logo from "../../assets/img/duck-128.png";
import Doacao from "../Front/Main/Doacao/Doacao";
import TopLegendas from "../Front/Main/TopLegendas/TopLegendas";
import Parceiros from "../Front/Main/Parceiros/Parceiros";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    var estilo = {
      paddingTop: "7rem"
    };

    const { location } = this.props;
    const isPainel = location.pathname === "/painel" ? false : true;
    return (
      <div className="App">
        <Header title="Legendas" logo={Logo} />

        {isPainel ? (
          <div style={estilo} className="container">
            <div className="alert alert-success">
              Quer ajudar a postar legendas no site ? entre em contato e peça
              seu login !!!
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8">
                {this.props.children}
                <Parceiros title="Parceiros" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <Doacao title="Doação" />
                <TopLegendas title="Legendas" />
              </div>
            </div>
          </div>
        ) : (
          <div style={estilo} className="container flex-center">
            
              {this.props.children}
            
          </div>
        )}
        <Footer title="Duck Legendas" logo={Logo} />
      </div>
    );
  }
}
export default (App = withRouter(App));
