import React, { Component } from "react";
import SeachBar from "./components/search-bar.js";
import SimilarArtists from "./components/similar-artists.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import "bootstrap/dist/css/bootstrap.css";
import "./page-artist.css";
class PageArtist extends Component {
  state = {
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: { content: "" },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    let termino = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      termino +
      "&api_key=aa1094ce4b08a4af5e9bb485bb4d943f&format=json";

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
        <SeachBar onChange={this.changeHandle} busqueda={this.state.artista} />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="containe">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[2]["#text"]}
                alt=""
                className="pic-artist margenes50"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.content}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtists artist={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
