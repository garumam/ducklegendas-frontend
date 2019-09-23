import React,{useEffect} from "react";
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
import { NavLink, withRouter } from "react-router-dom";
import api,{isAuthenticated} from '../../services/api';
import logo from "../../assets/img/duck-128.png";
import "@rmwc/avatar/avatar.css";

const dashboardPath = "/dashboard";

const Dashboard = props => {
  const {history} = props;
  const [open, setOpen] = React.useState(true);
  const [data,setData] = React.useState(JSON.parse(localStorage.getItem("user")));
  const refMenu = React.useRef(null);

  async function logout(e) {
    e.preventDefault();

    await api.post('/logout')
    .then(r=>{
      console.log(r);

      localStorage.clear();

      history.push('/painel');
    }).catch(e=>{
      console.log(e.response.data.message)
    })
    
  }

  function handlerMenuLateral() {
    setOpen(!open);

    if (open) refMenu.current.style = "margin-left: -220px";
    else refMenu.current.style = "margin-left: 0";
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
                to={dashboardPath}
                alt="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/ranking`}
                alt="Ranking"
              >
                Ranking
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/subtitles`}
                alt="Legendas"
              >
                Legendas
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/progress`}
                alt="Legendas em andamento"
              >
                Em andamento
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/categories`}
                alt="Categorias"
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/gallery`}
                alt="Galeria"
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/users`}
                alt="Usuarios"
              >
                Usuários
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="is-active"
                to={`${dashboardPath}/permissions`}
                alt="Permissões"
              >
                Permissões
              </NavLink>
            </li>
          </NavLinks>
          <MenuLogout onClick={e => logout(e)}>Sair</MenuLogout>
        </Nav>
      </Header>

      <Container style={{ height: "100%", flexWrap: "wrap" }}>
        <HeaderDashboard
          title={props.title}
          navigationIcon={{ onClick: () => handlerMenuLateral() }}
          actionItems={[
            {
              icon: "notifications",
              onClick: () => console.log("Do Something")
            }
          ]}
          endContent={
            <Ripple>
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
                <span style={{ fontSize: ".9rem",paddingLeft:'.5rem' }}>{data.user.name}</span>
                <Avatar
                  src="images/avatars/ironman.png"
                  size="xlarge"
                  name="Tony Stark"
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