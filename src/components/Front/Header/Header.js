import React from "react";
import "../Header/Header.css";
import { Link, NavLink } from "react-router-dom";

export default props => {
  function navSlide(e) {
    const mobile = document.querySelector(".mobile");
    mobile.classList.toggle("toggle");
  }
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img alt="img logo" src={props.logo} />
            <Link to="/" alt="link logo">
              {props.title}
            </Link>
          </div>

          <input type="checkbox" id="chk" />

          <ul className="nav-links">
            <li>
              <NavLink activeClassName="is-active" exact to="/" alt="Home">
              {/* onClick={()=>  window.scrollTo(0,0)} */}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/series" alt="Series">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/filmes" alt="Filmes">
                Filmes
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/chat" alt="Chat">
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/contato" alt="Contato">
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/painel" alt="Painel">
                Painel
              </NavLink>
            </li>
            {/* <li>
              <div className="dropdown">
                <input id="check01" type="checkbox" name="menu"/>
                <label htmlFor="check01"><span>Painel</span></label>
                <div className="dropdown-menu">
                  <a href="{null1}" alt="home">
                    Home
                  </a>
                  <a href="{null2}" alt="home">
                    Home
                  </a>
                  <a href="{null3}" alt="home">
                    Home
                  </a>
                  <a href="{null4}" alt="home">
                    Home
                  </a>
                  <a href="{null5}" alt="home">
                    Home
                  </a>
                </div>
              </div>
            </li> */}
          </ul>

          <label className="mobile" onClick={navSlide} htmlFor="chk">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </label>
        </nav>
      </div>
    </header>
  );
};
