import React from "react";
import Header from "./Header";
// import {
//   Container,
//   Painel,
//   MenuCustom,
//   Divider,
//   Welcome,
//   Notification,Counters , W62
// } from "./styles";
// import { Menu, MenuItem, Ripple,Avatar } from "rmwc";
// import "@rmwc/menu";
// import '@material/menu/dist/mdc.menu.css';
// import '@material/menu-surface/dist/mdc.menu-surface.css';
// import '@material/list/dist/mdc.list.css';
// import "@rmwc/ripple";
// import '@material/ripple/dist/mdc.ripple.css';
// import "@rmwc/avatar";
// import "@rmwc/avatar/avatar.css"
// import "material-components-web/dist/material-components-web.min.css";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    return (
      <>
       <Header />
      {/* <Container style={{ background: "#eef2fb" }}>
       
        <Painel> */}
          {/* <MenuCustom className="shadow">
            <p>Dashboard</p>
            <Ripple>
              <Divider
                className=""
                onClick={evt => this.setState({ open: true })}
              >
                <Avatar src="https://placeimg.com/80/80/animals" style={{width:48,height:48}} text="avatar"/>
                <span>Admin</span>
              </Divider>
            </Ripple>
            <Menu
              style={{ width: 190,left: "auto", right: 0, top: 85,borderRadius: 0 }}
              open={this.state.open}
              onSelect={evt => console.log(evt.detail.index)}
              onClose={evt => this.setState({ open: false })}
            >
              <MenuItem style={{fontWeight: 600}}>Cookies</MenuItem>
              <MenuItem style={{fontWeight: 600}}>Pizza</MenuItem>
              <MenuItem style={{fontWeight: 600}}>Icecream</MenuItem>
            </Menu>
          </MenuCustom> */}
{/* 
          <Container style={{justifyContent:"space-between",flexWrap: "wrap"}}>
          <W62>
            <Welcome className="card-dashboard shadow">
              <p>Welcome to the Dashboard</p>
            </Welcome>
            <Counters className="card-dashboard shadow">
              <div>
                <p>45</p>
                <span>Usuarios</span>
              </div>
              <div>
                <p>99</p>
                <span>Legendas</span>
              </div>
              <div>
                <p>120</p>
                <span>Categorias</span>
              </div>
            </Counters>
            </W62>
            <Notification className="card-dashboard shadow">
              <div>
                <h5>Notificações</h5>
              </div>
              
            </Notification>
          </Container>
        </Painel> */}

        {/* <div className="container flex-center">{props.children}</div> */}
      {/* </Container> */}
      </>
    );
  }
}
