import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Header,
  HeaderDashboard,
  Container,
  ContainerDashboard,
  NavLinks,
  Logo,
  Nav,
  MenuLogout
} from "./styles";
import { Avatar } from "@rmwc/avatar";
import { Ripple } from "@rmwc/ripple";
import { TopAppBarTitle } from "@rmwc/top-app-bar";
import { Fab } from "@rmwc/fab";
import { NavLink, withRouter } from "react-router-dom";
import { baseUrl, getRequest } from 'services/api';
import logo from "assets/img/duck-128.png";
import userImg from "assets/img/man.png";
import { AuthContext } from 'utils/AuthContext';
import { SizeContext } from 'utils/SizeContext';
import { Can } from 'services/Authorization';
import "@rmwc/avatar/avatar.css";
import '@material/fab/dist/mdc.fab.css';
import { ROUTES } from 'utils/RoutePaths';

const Dashboard = props => {
  const {history} = props;
  const [user, setUser] = useContext(AuthContext);
  const [windowWidth] = useContext(SizeContext);
  const [open, setOpen] = useState(window.innerWidth > 1150);
  const refMenu = useRef(null);

  const can = Can(user.user_type)
  console.log('FUNCAO CAN ',can)
  
  useEffect(() => {
    if(windowWidth <= 1150){
      setOpen(false);
    }else{
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  useEffect(() => {
    if(refMenu !== null && refMenu.current !== null){
      if (open) refMenu.current.style = "margin-left: 0"
      else refMenu.current.style = "margin-left: -220px";
    }
  }, [open]);
  
  async function logout(e) {
    e.preventDefault();
    
    const res = await getRequest('/logout');
    
    const resetUser = Object.keys(user).reduce((current, nextKeys) => {
      return {...current, [nextKeys]: undefined};
    },{});
    setUser(resetUser);

    if(res.success){
      // console.log(res.success);
      localStorage.clear();
      history.push(ROUTES.LOGIN);
    }else if(res.error){
      console.log('Problema no logout: ',res.error);
      localStorage.clear();
    }
  }

  return (
    <Container>
      <Header ref={refMenu}>
        <Nav>
          <NavLinks>
            <Logo>
              <img alt="img logo" src={logo} />
            </Logo>
            <li>
              <NavLink
                activeClassName="is-active"
                exact
                to={ROUTES.DASHBOARD.HOME}
                alt="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.RANKING}
                alt="Ranking"
              >
                Ranking
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.SUBTITLE.LIST}
                alt="Legendas"
              >
                Legendas
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.PROGRESS.LIST}
                alt="Legendas em andamento"
              >
                Em andamento
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.CATEGORY.LIST}
                alt="Categorias"
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.GALLERY.LIST}
                alt="Galeria"
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={ROUTES.DASHBOARD.USER.LIST}
                alt="Usuarios"
              >
                Usuários
              </NavLink>
            </li>
          </NavLinks>
          <MenuLogout onClick={e => logout(e)}>Sair</MenuLogout>
        </Nav>
      </Header>

      <Container style={{ height: "100%", flexWrap: "wrap" }}>
        <HeaderDashboard
          startContent={
          <>
            <Fab
              ripple
              style={{ boxShadow: 'unset' }}
              icon="menu"
              type="button"
              onClick={() => setOpen(!open)}
            />
            <TopAppBarTitle>{props.title}</TopAppBarTitle>
          </>
          }
          endContent={
            <Ripple onClick={()=> props.history.push({
                pathname: `${ROUTES.DASHBOARD.USER.FORM}/${user.id}`,
                state: { item: user , islogin : true }
              })}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                  height: "100%",
                  cursor: "pointer",
                  marginLeft: ".8rem",
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  padding: "0 1.3rem"
                }}
              >
                <span style={{ fontSize: ".9rem",paddingLeft:'.5rem' }}>{user.name}</span>
                <Avatar
                style={{height:'48px'}}
                  src={user.image? `${baseUrl}storage/${user.image}?${user.updated_at.replace(/\D/g,'').trim()}`: false || userImg}
                  size="xlarge"
                  name={user.name}
                />
              </div>
            </Ripple>
          }
        />
        <ContainerDashboard>
          <div className="card card-shadow">{props.children}</div>
        </ContainerDashboard>
      </Container>
    </Container>
  );
};

export default withRouter(Dashboard);