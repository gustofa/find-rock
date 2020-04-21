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
            {this.props.artist.slice(0, 4).map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtists;
