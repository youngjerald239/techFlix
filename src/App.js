import './App.css';
import React from "react"
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Time to work on the front end!</h1>
      <Row title="TECHFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
