import React, { Fragment, Component } from "react";
import {Rodape,FooterLogo,FooterBottom,ReturnToTop} from "./styles";
import CopyrightIMG from "../../../assets/img/copyright24x.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  subir = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log('adicionado');
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log('removido');
  }

  handleScroll = () => {
    const subir = document.getElementById("return-to-top");
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? this.fadeIn(subir) : this.fadeOut(subir);
  };
  fadeIn(el) {
    el.classList.add("show");
    el.classList.remove("hide");
  }

  fadeOut(el) {
    el.classList.add("hide");
    el.classList.remove("show");
  }
  render() {
    return (
      <Fragment>
        <Rodape>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <FooterLogo>
                  <img
                    src={this.props.logo}
                    className="img-fluid"
                    alt="footer logo"
                  />
                  {/* <h5>{this.props.title}</h5> */}

                  <ul>
                  <li>
                    <Link to="/" alt="home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/series" alt="series">
                      Series
                    </Link>
                  </li>
                  <li>
                    <Link to="/filmes" alt="filmes">
                      Filmes
                    </Link>
                  </li>
                  <li>
                    <Link to="/chat" alt="chat">
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato" alt="contato">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to="/painel" alt="painel">
                      Painel
                    </Link>
                  </li>
                </ul>
                </FooterLogo>

                
              </div>
            </div>
          </div>
          <FooterBottom>
            <img src={CopyrightIMG} alt="copyrighticon" />
            <span>2019 {this.props.title}</span>
          </FooterBottom>
        </Rodape>

        <ReturnToTop
          href="null"
          id="return-to-top"
          alt="Subir"
          onClick={this.subir}>
          <i className="material-icons">keyboard_arrow_up</i>
        </ReturnToTop>
      </Fragment>
    );
  }
}
export default Footer;
