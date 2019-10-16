import React, { Fragment, useEffect, useRef } from "react";
import { Rodape, FooterLogo, FooterBottom, ReturnToTop } from "./styles";
import CopyrightIMG from "../../../assets/img/copyright24x.png";
import { Link } from "react-router-dom";
import { ROUTES } from 'utils/RoutePaths';

const Footer = props => {
  const returntop = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    console.log("adicionado");
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      console.log("removido");
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? fadeIn(returntop.current) : fadeOut(returntop.current);
  }

  function subir(e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  function fadeIn(el) {
    el.classList.add("show");
    el.classList.remove("hide");
  }

  function fadeOut(el) {
    el.classList.add("hide");
    el.classList.remove("show");
  }

  return (
    <Fragment>
      <Rodape>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FooterLogo>
                <img src={props.logo} className="img-fluid" alt="footer logo" />
                <ul>
                  <li>
                    <Link to={ROUTES.HOME} alt="home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.SERIES} alt="series">
                      Series
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.FILMES} alt="filmes">
                      Filmes
                    </Link>
                  </li>
                  <li>
                    <Link to="/chat" alt="chat">
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.CONTATO} alt="contato">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.LOGIN} alt="painel">
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
          <span>2019 {props.title}</span>
        </FooterBottom>
      </Rodape>

      <ReturnToTop
        ref={returntop}
        href="null"
        alt="Subir"
        onClick={e => subir(e)}
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </ReturnToTop>
    </Fragment>
  );
};

export default Footer;
