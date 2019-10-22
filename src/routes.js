import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import App from "App";
import Legendas from "pages/Front/Legendas";
import Ranking from "pages/Front/Ranking";
import Gallery from "pages/Dashboard/Gallery";
import Contato from "pages/Front/Contato";
import Post from "pages/Front/Post/";
import Error404 from "pages/Front/Error404";
import Login from "pages/Front/Login";
import Header from "pages/Front/Header";
import Dashboard from "pages/Dashboard";
import Indice from "pages/Front/Indice";
import Form from "pages/Dashboard/Form";
import List from "pages/Dashboard/List";
import Logo from "assets/img/duck-128.png";
import ResetarSenha from "pages/Front/ResetarSenha";
import TokenExpired from "services/TokenExpired";
import { isAuthenticated } from "services/api";
import { AuthProvider } from "utils/AuthContext";
import Authorization,{Admin} from "services/Authorization";
import { ROUTES } from 'utils/RoutePaths';

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
            path={ROUTES.HOME}
            layout={App}
            component={() => <Legendas title="Ultimas" />}
          />
          <AppRoute
            path={ROUTES.SERIES}
            layout={App}
            component={() => <Legendas title="Series" />}
          />
          <AppRoute
            path={ROUTES.FILMES}
            layout={App}
            component={() => <Legendas title="Filmes" />}
          />
          <AppRoute
            path={ROUTES.RANKING}
            layout={App}
            component={() => <Ranking title="Ranking" />}
          />
          <AppRoute
            path={ROUTES.INDICE}
            layout={App}
            component={() => <Indice title="Índice" />}
          />
          <AppRoute
            path={ROUTES.CONTATO}
            layout={App}
            component={() => <Contato title="Contato" />}
          />
          <AppRoute
            path={ROUTES.POST}
            layout={App}
            component={() => <Post title="Single Post" />}
          />
          <PrivateRouteLogin
            path={ROUTES.LOGIN}
            layout={props => (
              <>
                <Header title="Legendas" logo={Logo} />
                <Login title="Login" />
              </>
            )}
          />
          <Route
            path={`${ROUTES.RESETPASSWORD}/:token?`}
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
            path={ROUTES.DASHBOARD.HOME}
            layout={props => <Dashboard title="Dashboard" {...props} />}
            component={() => <List title="Legendas Pendentes" table={7} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.USER.LIST}
            layout={props => <Dashboard title="Usuários" {...props} />}
            component={() => <List title="Usuários" table={1} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${ROUTES.DASHBOARD.USER.FORM}/:id?`}
            layout={props => <Dashboard title="Usuários" {...props} />}
            component={() => <Form title="Usuários" form={1} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.SUBTITLE.LIST}
            layout={props => <Dashboard title="Legendas" {...props} />}
            component={() => <List title="Legendas" table={2} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${ROUTES.DASHBOARD.SUBTITLE.FORM}/:id?`}
            layout={props => <Dashboard title="Legendas" {...props} />}
            component={() => <Form title="Legendas" form={2} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.CATEGORY.LIST}
            layout={props => <Dashboard title="Categorias" {...props} />}
            component={() => <List title="Categorias" table={3} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${ROUTES.DASHBOARD.CATEGORY.FORM}/:id?`}
            layout={props => <Dashboard title="Categorias" {...props} />}
            component={() => <Form title="Categorias" form={3} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.PROGRESS.LIST}
            layout={props => (
              <Dashboard title="Legendas em andamento" {...props} />
            )}
            component={() => <List title="Legendas em andamento" table={4} />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${ROUTES.DASHBOARD.PROGRESS.FORM}/:id?`}
            layout={props => (
              <Dashboard title="Legendas em andamento" {...props} />
            )}
            component={() => <Form title="Legendas em andamento" form={4} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.GALLERY.LIST}
            layout={props => <Dashboard title="Galeria" {...props} />}
            component={() => <Gallery title="Galeria" />}
          />
          <PrivateRoute
            permissions={Admin}
            path={`${ROUTES.DASHBOARD.GALLERY.FORM}/:id?`}
            layout={props => <Dashboard title="Galeria" {...props} />}
            component={() => <Form title="Galeria" form={5} />}
          />
          <PrivateRoute
            permissions={Admin}
            exact
            path={ROUTES.DASHBOARD.RANKING}
            layout={props => <Dashboard title="Ranking" {...props} />}
            component={() => <List title="Ranking" table={6} />}
          />
          <AppRoute path="*" layout={App} component={Error404} />
        </Switch>
      </AuthProvider>
    </ScrollToTop>
  </Router>
);
