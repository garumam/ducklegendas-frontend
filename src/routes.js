import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/App/ScrollToTop";
import App from "./components/App/App.js";
import Legendas from "./components/Front/Legendas";
import Ranking from "./components/Front/Ranking";
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
import ResetarSenha from "./components/Front/ResetarSenha";
import {isAuthenticated} from './services/api';

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

const PrivateRoute = ({ component: Component,layout: Layout, ...rest}) =>(
  <Route
    {...rest}
    render={props => isAuthenticated() ? ( 
    <Layout>
      <Component {...props} />
    </Layout> ) 
    : (
      <Redirect to={{pathname: "/painel",state:{ from: props.location}}} />
    )
    }
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
            path="/ranking"
            layout={App}
            component={() => <Ranking title="Ranking" />}
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
          <Route
            path="/reset"
            render={() => (
              <>
                <Header title="Legendas" logo={Logo} />
                <ResetarSenha title="Resetar senha" />
              </>
            )}
          />
          <PrivateRoute
            exact
            path={dashboardPath}
            layout={(props) => <Dashboard title="Dashboard" {...props} />}
            component={() => <div>Dashboard Home</div>}
          />
          <PrivateRoute
            exact
            path={`${dashboardPath}/users`}
            layout={(props) => <Dashboard title="Usuários" {...props} />}
            component={() => <List title="Usuários" table={1} />}
          />
          <PrivateRoute
            path={`${dashboardPath}/users/form/:id?`}
            layout={(props) => <Dashboard title="Usuários" {...props} />}
            component={() => <Form title="Usuários" form={1} />}
          />
          <PrivateRoute
            exact
            path={`${dashboardPath}/subtitles`}
            layout={(props) => <Dashboard title="Legendas" {...props} />}
            component={() => <List title="Legendas" table={2} />}
          />
          <PrivateRoute
            path={`${dashboardPath}/subtitles/form/:id?`}
            layout={(props) => <Dashboard title="Legendas" {...props} />}
            component={() => <Form title="Legendas" form={2} />}
          />
          <PrivateRoute
            exact
            path={`${dashboardPath}/categories`}
            layout={(props) => <Dashboard title="Categorias" {...props} />}
            component={() => <List title="Categorias" table={3} />}
          />
          <PrivateRoute
            path={`${dashboardPath}/categories/form/:id?`}
            layout={(props) => <Dashboard title="Categorias" {...props} />}
            component={() => <Form title="Categorias" form={3} />}
          />
          <PrivateRoute
            exact
            path={`${dashboardPath}/progress`}
            layout={(props) => <Dashboard title="Legendas em andamento" {...props} />}
            component={() => <List title="Legendas em andamento" table={4} />}
          />
          <PrivateRoute
            path={`${dashboardPath}/progress/form/:id?`}
            layout={(props) => <Dashboard title="Legendas em andamento" {...props} />}
            component={() => <Form title="Legendas em andamento" form={4} />}
          />
          <PrivateRoute
            exact
            path={`${dashboardPath}/permissions`}
            layout={(props) => <Dashboard title="Permissões" {...props} />}
            component={() => <List title="Permissões" table={5} />}
          />
          <PrivateRoute
            path={`${dashboardPath}/permissions/form/:id?`}
            layout={(props) => <Dashboard title="Permissões" {...props} />}
            component={() => <Form title="Permissões" form={5} />}
          />
           <PrivateRoute
            exact
            path={`${dashboardPath}/ranking`}
            layout={(props) => <Dashboard title="Ranking" {...props} />}
            component={() => <List title="Ranking" table={6} />}
          />
           <PrivateRoute
            exact
            path={`${dashboardPath}/gallery`}
            layout={(props) => <Dashboard title="Galeria" {...props} />}
            component={() => <List title="Galeria" table={7} />}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </>
    </ScrollToTop>
  </Router>
)