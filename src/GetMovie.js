import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class GetMovie extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      movie: "",
      lastMovie1: "",
      lastMovie2: "",
      lastMovie3: "",
      lastMovie4: "",
    };
  }

  handleInput = (event) => {
    this.setState({ title: event.target.value });
  }

  update = () => {
    axios({
      method: "get",
      url: "http://www.omdbapi.com/?apikey=c72387ee&t=" + this.state.title,
      responseType: "json"
    }).then(response => {
      var movie = `Title: ${response.data.Title}<br>Year: ${response.data.Year}<br>Genre: ${response.data.Genre}<br>IMDB Rating: ${response.data.imdbRating}<br>${response.data.Plot}`;
      console.log(response.data);
      if (response.data.Title) {
        document.getElementById("movie").innerHTML = movie;
        this.searchHistory(movie);
        if (response.data.Poster !== "N/A") {
          document.getElementById("movie").innerHTML += `<br><br><img src=${response.data.Poster}/>`;
        }
      } else {
        document.getElementById("movie").innerHTML = response.data.Error;
      }
    });
  }

  searchHistory = (movie) => {
    document.getElementById("searchHistory").innerHTML = this.state.lastMovie1 + `<br><br>` + this.state.lastMovie2 + `<br><br>` + this.state.lastMovie3 + `<br><br>` + this.state.lastMovie4;
    this.setState({
      lastMovie1: movie,
      lastMovie2: this.state.lastMovie1,
      lastMovie3: this.state.lastMovie2,
      lastMovie4: this.state.lastMovie3,
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInput} />
        <button onClick={this.update}>clicky</button>
        <p id="movie" className="movie"></p>
        <p id="searchHistory" className="searchHistory"></p>
      </div>
    );
  }
}

export default GetMovie;
