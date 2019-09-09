import React from "react";
import { Header,HeaderDashboard,Container,ContainerDashboard,NavLinks,Logo,Nav } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/duck-128.png";

const dashboardPath = '/dashboard';

export default (props) => {
  // const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Header>
        <Nav>
          <Logo>
            <img alt="img logo" src={logo} />
          </Logo>

          <NavLinks>
            <li>
              <NavLink activeClassName="is-active" exact to={dashboardPath} alt="Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={`${dashboardPath}/usuarios`} alt="Series">
                Usuários
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={`${dashboardPath}/legendas`} alt="Filmes">
                Legendas
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={`${dashboardPath}/categorias`} alt="Índice">
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={`${dashboardPath}/toplegendas`} alt="Índice">
                Top legendas
              </NavLink>
            </li>
          </NavLinks>
        </Nav>
      </Header>

      <Container style={{height:'100%',flexWrap:'wrap'}}>
      <HeaderDashboard 
        title={props.title}
        navigationIcon={{ onClick: () => console.log("Navigate") }}
        actionItems={[
          {
            icon: "file_download",
            onClick: () => console.log("Do Something")
          },
          { icon: "print", onClick: () => console.log("Do Something") },
          { icon: "bookmark", onClick: () => console.log("Do Something") }
        ]}
      />
     
      <ContainerDashboard>
       
        {props.children}
      
      </ContainerDashboard>
     

      </Container>
    </Container>
  );
};
