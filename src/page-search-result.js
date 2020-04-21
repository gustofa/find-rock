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
    //console.log("Dentro de ComponentWillMount");
  }

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    console.log("Lo que trae de la url", search);
    this.setState({
      busqueda: search,
    });
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    //console.log("Dentro de Render");
    return (
      <React.Fragment>
        <SeachBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
        <SeachResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
