import React from "react";
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
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/duck-128.png";
import "@rmwc/avatar/avatar.css";

const dashboardPath = "/dashboard";

export default props => {
  const [open, setOpen] = React.useState(true);
  const refMenu = React.useRef(null);

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
          <MenuLogout>Sair</MenuLogout>
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
                  width: "160px",
                  height: "100%",
                  cursor: "pointer",
                  marginLeft: ".8rem",
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  padding: "0 1.3rem"
                }}
              >
                <span style={{ fontSize: ".9rem" }}>Admin</span>
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
