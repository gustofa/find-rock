import React, { Component } from "react";
import SeachBar from "./components/search-bar.js";
import SeachResult from "./components/search-result.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  componentWillMount() {
    console.log("Dentro de ComponentWillMount");
  }

  componentDidMount() {
    console.log("Dentro de ComponentDidMount");
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log("Dentro de Render");
    return (
      <React.Fragment>
        <SeachBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
        <SeachResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
