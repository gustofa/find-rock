import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
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
              <div className="actions">
                <button className="btng">Search Similar Artist</button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
