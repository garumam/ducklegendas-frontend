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
import Header from "./components/Front/Header";
import Dashboard from "./components/Dashboard";
import Indice from "./components/Front/Indice";
import Form from "./components/Dashboard/Menu/Form";
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

const dashboardPath = '/dashboard';

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
            exact
            path={dashboardPath}
            layout={(props) => <Dashboard title="Dashboard" {...props} />}
            component={() => <div>Dashboard Home</div>}
          />
          <AppRoute
            path={`${dashboardPath}/usuarios`}
            layout={(props) => <Dashboard title="Usuários" {...props} />}
            component={() => <Form />}
          />
          <AppRoute
            path={`${dashboardPath}/legendas`}
            layout={(props) => <Dashboard title="Legendas" {...props} />}
            component={() => <div>Dashboard Legendas</div>}
          />
          <AppRoute
            path={`${dashboardPath}/categorias`}
            layout={(props) => <Dashboard title="Categorias" {...props} />}
            component={() => <div>Dashboard Categorias</div>}
          />
          <AppRoute
            path={`${dashboardPath}/top-legendas`}
            layout={(props) => <Dashboard title="Top legendas" {...props} />}
            component={() => <div>Dashboard Top legendas</div>}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </>
    </ScrollToTop>
  </Router>
)