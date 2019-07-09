import React from "react";
import ReactDOM from "react-dom";
import "./assets/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App.js";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Legendas from "./components/Front/Main/Legendas/Legendas";
import Chat from "./components/Front/Chat/Chat";
import Contato from "./components/Front/Contato/Contato";
import Post from "./components/Front/Main/Post/Post";
import Error404 from "./components/Front/Main/Error404/Error404";
import ScrollToTop from "./components/App/ScrollToTop";
import Login from "./components/Front/Login/Login";
import HomeDashboard from "./components/Dashboard/Home/Home";
import Header from "./components/Front/Header/Header";
import Footer from "./components/Front/Footer/Footer";
import Logo from "./assets/img/duck-128.png";
import Dashboard from "./components/Dashboard/Dashboard";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);
ReactDOM.render(
  <Router>
    <ScrollToTop>
    <React.Fragment>
      {/* <App> */}
      <Switch>
          <AppRoute exact path="/" layout={App} component={() => <Legendas title="Ultimas" />} />
          <AppRoute path="/series" layout={App} component={() => <Legendas title="Series" />} />
          <AppRoute path="/filmes" layout={App} component={() => <Legendas title="Filmes" />} />
          <AppRoute path="/chat" layout={App} component={() => <Chat title="Chat" />} />
          <AppRoute path="/contato" layout={App} component={() => <Contato title="Contato" />} />
          <AppRoute path="/post" layout={App} component={() => <Post title="Single Post" />} />
          <AppRoute path="/painel" layout={App} component={() => <Login title="Login" />} />
          <AppRoute path="/dashboard" layout={Dashboard} component={() => <HomeDashboard title="Single Post" />} />
          <AppRoute path="*" layout={App} component={Error404} />
      </Switch>
      {/* </App> */}
    </React.Fragment>
    </ScrollToTop>
    
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


