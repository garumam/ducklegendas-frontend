import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ScrollToTop from "components/App/ScrollToTop";
import App from "components/App/App.js";
import Legendas from "components/Front/Legendas";
import Ranking from "components/Front/Ranking";
import Gallery from "components/Dashboard/Gallery";
import Contato from "components/Front/Contato";
import Post from "components/Front/Post/";
import Error404 from "components/Front/Error404";
import Login from "components/Front/Login";
import Header from "components/Front/Header";
import Dashboard from "components/Dashboard";
import Indice from "components/Front/Indice";
import Form from "components/Dashboard/Menu/Form";
import List from "components/Dashboard/Menu/List";
import Logo from "assets/img/duck-128.png";
import ResetarSenha from "components/Front/ResetarSenha";
import TokenExpired from "services/TokenExpired";
import { isAuthenticated } from "services/api";
import { AuthProvider } from "context/AuthContext";
import Authorization from "services/Authorization";

const dashboardPath = "/dashboard";
const User = ["user"];
const Moderador = ["moderador"];
const Admin = ["admin", "moderador"];

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

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  permissions,
  ...rest
}) => {
  const NewComponent = Authorization(permissions)(() => <Component />);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Layout>
            <NewComponent {...props} />
          </Layout>
        ) : (
          <TokenExpired location={props.location} />
        )
      }
    />
  );
};

const PrivateRouteLogin = ({ layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Redirect to="/dashboard" /> : <Layout {...props} />
    }
  />
);

export default () => (
  <Router>
    <ScrollToTop>
      <AuthProvider>
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
          <PrivateRouteLogin
            path="/painel"
            layout={props => (
              <>
                <Header title="Legendas" logo={Logo} />
                <Login title="Login" />
              </>
            )}
          />
          <Route
            path="/reset/:token?"
            render={() => (
              <>
                <Header title="Legendas" logo={Logo} />
                <ResetarSenha title="Resetar senha" />
              </>
            )}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={dashboardPath}
            layout={props => <Dashboard title="Dashboard" {...props} />}
            component={() => <h5 style={{color:'black'}}>Dashboard Home</h5>}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/users`}
            layout={props => <Dashboard title="Usuários" {...props} />}
            component={() => <List title="Usuários" table={1} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${dashboardPath}/users/user/:id?`}
            layout={props => <Dashboard title="Usuários" {...props} />}
            component={() => <Form title="Usuários" form={1} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/subtitles`}
            layout={props => <Dashboard title="Legendas" {...props} />}
            component={() => <List title="Legendas" table={2} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${dashboardPath}/subtitles/subtitle/:id?`}
            layout={props => <Dashboard title="Legendas" {...props} />}
            component={() => <Form title="Legendas" form={2} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/categories`}
            layout={props => <Dashboard title="Categorias" {...props} />}
            component={() => <List title="Categorias" table={3} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${dashboardPath}/categories/category/:id?`}
            layout={props => <Dashboard title="Categorias" {...props} />}
            component={() => <Form title="Categorias" form={3} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/progress`}
            layout={props => (
              <Dashboard title="Legendas em andamento" {...props} />
            )}
            component={() => <List title="Legendas em andamento" table={4} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${dashboardPath}/progress/subtitle/:id?`}
            layout={props => (
              <Dashboard title="Legendas em andamento" {...props} />
            )}
            component={() => <Form title="Legendas em andamento" form={4} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/gallery`}
            layout={props => <Dashboard title="Galeria" {...props} />}
            component={() => <Gallery title="Galeria" />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${dashboardPath}/gallery/image/:id?`}
            layout={props => <Dashboard title="Galeria" {...props} />}
            component={() => <Form title="Galeria" form={5} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={`${dashboardPath}/rankings`}
            layout={props => <Dashboard title="Ranking" {...props} />}
            component={() => <List title="Ranking" table={6} />}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </AuthProvider>
    </ScrollToTop>
  </Router>
);
