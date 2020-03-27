import React, { Component } from "react";
import ArtistCard from "./components/artist-card";
import SeachBar from "./components/search-bar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SeachBar />
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://m.media-amazon.com/images/I/51Spjdv-5tL._AA256_.jpg"
              titulo="The Doors"
            />
            <ArtistCard
              img="https://www.udiscovermusic.com/wp-content/uploads/2018/01/SgtPepper-1.jpg"
              titulo="The Beatles"
            />
            <ArtistCard
              img="https://miro.medium.com/max/500/1*fUQ2cP8GvN3FTAWoh0FS3Q.jpeg"
              titulo="Pink Floyd"
            />
            <ArtistCard
              img="https://img.discogs.com/AmuOeQZCHTbSF9WsQyupQpXqb_s=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1348423-1211719502.jpeg.jpg"
              titulo="Jimmy Hendrix"
            />
            <ArtistCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
