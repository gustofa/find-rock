import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Loading from "./loading.js";
import Error from "./error.js";
class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;

    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=aa1094ce4b08a4af5e9bb485bb4d943f&format=json"
    );
  }

  componentDidMount() {}

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
          // data: data,
        });
      } else {
        this.setState({
          error: false,
          loading: false,
          data: data,
        });
      }
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: err.message,
        // data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
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
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
