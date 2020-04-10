import React, { Component } from "react";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}
export default App;
