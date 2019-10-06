import React, { createRef } from "react";
import {Header,Nav,Logo,Mobile,CHK,NavLinks,Dropdown,DropdownMenu,InputDropdownMenu} from "../Header/styles";
import { Link, NavLink } from "react-router-dom";
import {decryptLogin} from 'services/api';

export default props => {
  let mobileInput = createRef();
  let name = 'Painel';
  const user = decryptLogin();
  if(user)
    name = user.user.name;
  
  const link = name === 'Painel' ? '/painel' : '/dashboard'
  
  const navSlide = () => {
    const mobile = mobileInput.current;
    mobile.classList.toggle("toggle");
  }
  return (
    <Header>
      <div className="container">
        <Nav>
          <Logo>
            <img alt="img logo" src={props.logo} />
            <Link to="/" alt="link logo">
              {props.title}
            </Link>
          </Logo>

          <CHK type="checkbox" id="chk" />

          <NavLinks>
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
              <NavLink activeClassName="is-active" to="/indice" alt="Índice">
                Índice
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/ranking" alt="Ranking">
                Ranking
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/contato" alt="Contato">
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={link} alt="Painel">
                {name}
              </NavLink>
            </li>
            <li>
              <Dropdown>
                <InputDropdownMenu id="check01" type="checkbox" name="menu"/>
                <label htmlFor="check01"><span>Painel</span></label>
                <DropdownMenu>
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
                </DropdownMenu>
              </Dropdown>
            </li>
          </NavLinks>

          <Mobile ref={mobileInput} onClick={navSlide} htmlFor="chk">
            <label htmlFor="chk" className="line1" />
            <label htmlFor="chk" className="line2" />
            <label htmlFor="chk" className="line3" />
          </Mobile>
        </Nav>
      </div>
    </Header>
  );
};
