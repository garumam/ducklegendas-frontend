import React, { createRef,useContext } from "react";
import {Header,Nav,Logo,Mobile,CHK,NavLinks,Dropdown,DropdownMenu,InputDropdownMenu} from "../Header/styles";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from 'utils/AuthContext';
import { ROUTES } from 'utils/RoutePaths';

export default (props) => {
  const [user] = useContext(AuthContext);
  let mobileInput = createRef();
  const name =  user.name !== undefined ? user.name : 'Painel';
  const link = name === 'Painel' ? ROUTES.LOGIN : ROUTES.DASHBOARD.HOME
  
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
            <Link to={ROUTES.HOME} alt="link logo">
              {props.title}
            </Link>
          </Logo>

          <CHK type="checkbox" id="chk" />

          <NavLinks>
            <li>
              <NavLink activeClassName="is-active" exact to={ROUTES.HOME} alt="Home">
              {/* onClick={()=>  window.scrollTo(0,0)} */}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={ROUTES.SERIES} alt="Series">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={ROUTES.FILMES} alt="Filmes">
                Filmes
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={ROUTES.INDICE} alt="Índice">
                Índice
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={ROUTES.RANKING} alt="Ranking">
                Ranking
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={ROUTES.CONTATO} alt="Contato">
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
