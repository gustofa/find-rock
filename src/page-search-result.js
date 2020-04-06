import React, { Component } from "react";
import SeachBar from "./components/search-bar.js";
import SeachResult from "./components/search-result.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
class PageSearchResult extends Component {
  state = {
    busqueda: ""
  };
  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <SeachBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
        <SeachResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
