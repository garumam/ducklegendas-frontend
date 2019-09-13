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
import List from "./components/Dashboard/Menu/List";
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
            exact
            path={`${dashboardPath}/usuarios`}
            layout={(props) => <Dashboard title="Usuários" {...props} />}
            component={() => <List title="Usuários" table={1} />}
          />
          <AppRoute
            path={`${dashboardPath}/usuarios/form/:id?`}
            layout={(props) => <Dashboard title="Usuários" {...props} />}
            component={() => <Form title="Usuários" form={1} />}
          />
          <AppRoute
            exact
            path={`${dashboardPath}/legendas`}
            layout={(props) => <Dashboard title="Legendas" {...props} />}
            component={() => <List title="Legendas" table={2} />}
          />
          <AppRoute
            path={`${dashboardPath}/legendas/form/:id?`}
            layout={(props) => <Dashboard title="Legendas" {...props} />}
            component={() => <Form title="Legendas" form={2} />}
          />
          <AppRoute
            exact
            path={`${dashboardPath}/categorias`}
            layout={(props) => <Dashboard title="Categorias" {...props} />}
            component={() => <List title="Categorias" table={3} />}
          />
          <AppRoute
            path={`${dashboardPath}/categorias/form/:id?`}
            layout={(props) => <Dashboard title="Categorias" {...props} />}
            component={() => <Form title="Categorias" form={3} />}
          />
          <AppRoute
            exact
            path={`${dashboardPath}/toplegendas`}
            layout={(props) => <Dashboard title="Top Legendas" {...props} />}
            component={() => <List title="Top Legendas" table={4} />}
          />
          <AppRoute
            path={`${dashboardPath}/toplegendas/form/:id?`}
            layout={(props) => <Dashboard title="Top Legendas" {...props} />}
            component={() => <Form title="Top Legendas" form={4} />}
          />
          <AppRoute
            exact
            path={`${dashboardPath}/permissoes`}
            layout={(props) => <Dashboard title="Permissões" {...props} />}
            component={() => <List title="Permissões" table={5} />}
          />
          <AppRoute
            path={`${dashboardPath}/permissoes/form/:id?`}
            layout={(props) => <Dashboard title="Permissões" {...props} />}
            component={() => <Form title="Permissões" form={5} />}
          />
           <AppRoute
            exact
            path={`${dashboardPath}/ranking`}
            layout={(props) => <Dashboard title="Ranking" {...props} />}
            component={() => <List title="Ranking" table={6} />}
          />
          <AppRoute
            path={`${dashboardPath}/ranking/form/:id?`}
            layout={(props) => <Dashboard title="Ranking" {...props} />}
            component={() => <Form title="Ranking" form={6} />}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </>
    </ScrollToTop>
  </Router>
)