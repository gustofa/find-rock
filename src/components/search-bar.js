import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("Valor del input: ", e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form ", e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra"></img>
            </Link>
          </div>
          <div className="col-md-4">
            <form
              className="form-inline"
              name="form"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  name="busqueda"
                  placeholder="Buscar banda"
                  onChange={this.props.onChange}
                ></input>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
