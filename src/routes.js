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
import LegendasIndice from "pages/Front/Indice/LegendasIndice";
import Ranking from "pages/Front/Ranking";
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
import ResetPassword from "pages/Front/ResetPassword";
import TokenExpired from "services/TokenExpired";
import { isAuthenticated } from "services/api";
import { AuthProvider } from "utils/AuthContext";
import { SizeProvider } from "utils/SizeContext";
import Authorization,{
  ALL, ADMIN, AUTOR, MODERADOR
} from "services/Authorization";
import { ROUTES } from 'utils/RoutePaths';
import Analytics from 'react-router-ga';
import { HelmetProvider } from 'react-helmet-async';
import HeadHelmet from "services/HeadHelmet";
import SignUp from "pages/Front/SignUp";

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
    <Analytics id="UA-151424625-1">
    <ScrollToTop>
      <HelmetProvider>
        <HeadHelmet useDefault />
        <SizeProvider>
        <AuthProvider>
          <Switch>
            <AppRoute
              exact
              path={ROUTES.HOME}
              layout={App}
              component={() => <Legendas title="Últimas" />}
            />
            <AppRoute
              path={ROUTES.SERIES}
              layout={App}
              component={() => <Legendas title="Séries" />}
            />
            <AppRoute
              path={ROUTES.FILMES}
              layout={App}
              component={() => <Legendas title="Filmes" />}
            />
            <AppRoute
              exact
              path={ROUTES.LEGENDASINDICE}
              layout={App}
              component={() => <LegendasIndice />}
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
              path={`${ROUTES.POST}/:id`}
              layout={App}
              component={() => <Post title="Single Post" />}
            />
            <Route
              path={ROUTES.SIGNUP}
              render={() => (
                <>
                  <Header title="Legendas" logo={Logo} />
                  <SignUp title="Criar conta" />
                </>
              )}
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
                  <ResetPassword title="Resetar senha" />
                </>
              )}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR, AUTOR]}
              exact
              path={ROUTES.DASHBOARD.HOME}
              layout={props => <Dashboard title="Dashboard" {...props} />}
              component={() => <List title="Legendas Pendentes" table={7} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              exact
              path={ROUTES.DASHBOARD.USER.LIST}
              layout={props => <Dashboard title="Usuários" {...props} />}
              component={() => <List title="Usuários" table={1} />}
            />
            <PrivateRoute
              permissions={ALL}
              path={`${ROUTES.DASHBOARD.USER.FORM}/:id?`}
              layout={props => <Dashboard title="Usuários" {...props} />}
              component={() => <Form title="Usuários" form={1} />}
            />
            <PrivateRoute
              permissions={ALL}
              exact
              path={ROUTES.DASHBOARD.SUBTITLE.LIST}
              layout={props => <Dashboard title="Legendas" {...props} />}
              component={() => <List title="Legendas" table={2} />}
            />
            <PrivateRoute
              permissions={ALL}
              path={`${ROUTES.DASHBOARD.SUBTITLE.FORM}/:id?`}
              layout={props => <Dashboard title="Legendas" {...props} />}
              component={() => <Form title="Legendas" form={2} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              exact
              path={ROUTES.DASHBOARD.CATEGORY.LIST}
              layout={props => <Dashboard title="Categorias" {...props} />}
              component={() => <List title="Categorias" table={3} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              path={`${ROUTES.DASHBOARD.CATEGORY.FORM}/:id?`}
              layout={props => <Dashboard title="Categorias" {...props} />}
              component={() => <Form title="Categorias" form={3} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR, AUTOR]}
              exact
              path={ROUTES.DASHBOARD.PROGRESS.LIST}
              layout={props => (
                <Dashboard title="Legendas em andamento" {...props} />
              )}
              component={() => <List title="Legendas em andamento" table={4} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR, AUTOR]}
              path={`${ROUTES.DASHBOARD.PROGRESS.FORM}/:id?`}
              layout={props => (
                <Dashboard title="Legendas em andamento" {...props} />
              )}
              component={() => <Form title="Legendas em andamento" form={4} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              exact
              path={ROUTES.DASHBOARD.GALLERY.LIST}
              layout={props => <Dashboard title="Galeria" {...props} />}
              component={() => <List title="Galeria" table={5} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              path={`${ROUTES.DASHBOARD.GALLERY.FORM}/:id?`}
              layout={props => <Dashboard title="Galeria" {...props} />}
              component={() => <Form title="Galeria" form={5} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              exact
              path={ROUTES.DASHBOARD.MESSAGE.LIST}
              layout={props => <Dashboard title="Mensagens" {...props} />}
              component={() => <List title="Mensagens" table={8} />}
            />
            <PrivateRoute
              permissions={[ADMIN, MODERADOR]}
              path={`${ROUTES.DASHBOARD.MESSAGE.FORM}/:id?`}
              layout={props => <Dashboard title="Mensagens" {...props} />}
              component={() => <Form title="Mensagens" form={6} />}
            />
            <PrivateRoute
              permissions={ALL}
              exact
              path={ROUTES.DASHBOARD.RANKING}
              layout={props => <Dashboard title="Ranking" {...props} />}
              component={() => <List title="Ranking" table={6} />}
            />
            <AppRoute path="*" layout={App} component={Error404} />
          </Switch>
        </AuthProvider>
        </SizeProvider>
      </HelmetProvider>
    </ScrollToTop>
    </Analytics>
  </Router>
);
