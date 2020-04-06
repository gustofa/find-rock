import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row centrar margenes50">
            <div className="col-md-12">
              <h4>Similar Artists</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <ArtistCard img="https://place-hold.it/300x300" titulo="Prueba" />
            </div>
            <div className="col-md-3">
              <ArtistCard img="https://place-hold.it/300x300" titulo="Prueba" />
            </div>
            <div className="col-md-3">
              <ArtistCard img="https://place-hold.it/300x300" titulo="Prueba" />
            </div>
            <div className="col-md-3">
              <ArtistCard img="https://place-hold.it/300x300" titulo="Prueba" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
