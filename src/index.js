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

ReactDOM.render(
  <Router>
    <ScrollToTop>
    <App>
      <Switch>
        <Route exact path="/" component={() => <Legendas title="Ultimas" />} />
        <Route path="/series" component={() => <Legendas title="Series" />} />
        <Route path="/filmes" component={() => <Legendas title="Filmes" />} />
        <Route path="/chat" component={() => <Chat title="Chat" />} />
        <Route path="/contato" component={() => <Contato title="Contato" />} />
        <Route path="/painel" component={() => <Legendas title="Painel" />} />
        <Route path="/post" component={() => <Post title="Single Post" />} />
        <Route path="*" component={Error404} />
      </Switch>
    </App>
    </ScrollToTop>
    
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
