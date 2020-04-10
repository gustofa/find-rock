import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
class SearchResult extends Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=thebeatles&api_key=aa1094ce4b08a4af5e9bb485bb4d943f&format=json"
    );
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
