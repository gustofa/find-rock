import React, { Component } from "react";
import PageArtist from "./page-artist.js";
import Pagehome from "./page-home.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageArtist />
        {/*<Pagehome />*/}
        {/* <PageSearchResult /> */}
      </React.Fragment>
    );
  }
}
export default App;
