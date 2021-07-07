import './App.css';
import React from "react"
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Time to work on the front end!</h1>
      <Row title="TECHFLIX ORIGINALS"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action Movies"/>
      <Row title="Comedy Movies"/>
      <Row title="Romance Movies"/>
      <Row title="Horror Movies"/>
    </div>
  );
}

export default App;
