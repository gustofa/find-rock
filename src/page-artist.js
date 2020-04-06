import React, { Component } from "react";
import SeachBar from "./components/search-bar.js";
import SimilarArtists from "./components/similar-artists.js";
import "bootstrap/dist/css/bootstrap.css";
import "./page-artist.css";
class PageArtist extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SeachBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
        <div className="containe">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://laletrade.com/images/artistas/Charly_Garcia.jpg"
                alt=""
                className="pic-artist margenes50"
              />
              <h2>Charly Garcia</h2>
              <p>
                Carlos Alberto García Moreno, conocido como Charly García
                (Buenos Aires, 23 de octubre de 1951), es un músico, compositor,
                multiinstrumentista, arreglista autor, cantautor y productor
                argentino de rock. Es considerado un ícono del rock argentino.
                Es hasta el momento uno de los músicos nacionales con más
                premios Gardel de Oro en su haber con tres estatuas obtenidas en
                2002, 2003 y 2018.5​ Fundó varias bandas de rock argentino como
                Sui Géneris, Serú Girán y La Máquina de Hacer Pájaros, y tiene
                una amplia carrera como solista. Con cuarenta y siete álbumes
                oficiales grabados en cuarenta y nueve años (1969-2018) como
                músico profesional, más cuatro álbumes no oficiales con temas
                inéditos y otros participando como músico invitado de diferentes
                artistas y en distintas épocas. Su canción «Rasguña las piedras»
                fue considerada en 2002 por la revista Rolling Stone y la cadena
                MTV como la tercera mejor canción de todos los tiempos del rock
                argentino.6​ Las siguientes canciones de su autoría también han
                sido consideradas entre las 100 mejores del rock argentino:
                «Seminare», «Canción para mi muerte», «Demoliendo Hoteles», «Los
                Dinosaurios», «Yo no quiero volverme tan loco», «No llores por
                mí, Argentina» y «Chipi Chipi».
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtists />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
