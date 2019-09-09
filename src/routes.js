import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/App/ScrollToTop";
import App from "./components/App/App.js";
import Legendas from "./components/Front/Legendas";
import Chat from "./components/Front/Chat";
import Contato from "./components/Front/Contato";
import Post from "./components/Front/Post/";
import Error404 from "./components/Front/Error404";
import Login from "./components/Front/Login";
import HomeDashboard from "./components/Dashboard/index";
import Header from "./components/Front/Header";
import Dashboard from "./components/Dashboard";
import Indice from "./components/Front/Indice";
import Logo from "./assets/img/duck-128.png";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );

export default () =>(
    <Router>
    <ScrollToTop>
      <>
        <Switch>
          <AppRoute
            exact
            path="/"
            layout={App}
            component={() => <Legendas title="Ultimas" />}
          />
          <AppRoute
            path="/series"
            layout={App}
            component={() => <Legendas title="Series" />}
          />
          <AppRoute
            path="/filmes"
            layout={App}
            component={() => <Legendas title="Filmes" />}
          />
          <AppRoute
            path="/chat"
            layout={App}
            component={() => <Chat title="Chat" />}
          />
           <AppRoute
            path="/indice"
            layout={App}
            component={() => <Indice title="Índice" />}
          />
          <AppRoute
            path="/contato"
            layout={App}
            component={() => <Contato title="Contato" />}
          />
          <AppRoute
            path="/post"
            layout={App}
            component={() => <Post title="Single Post" />}
          />
          <Route
            path="/painel"
            render={() => (
              <>
                <Header title="Legendas" logo={Logo} />
                <Login title="Login" />
              </>
            )}
          />
          <AppRoute
            path="/dashboard"
            layout={Dashboard}
            component={() => <HomeDashboard title="Single Post" />}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </>
    </ScrollToTop>
  </Router>
)