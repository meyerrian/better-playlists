import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Playlist extends Component {
  render() {
    let playlistName = "Playlist Name"
    let playlistStyle = {'display': 'inline-block', 'width': '25%'}
    return(
      <div style={playlistStyle}>
        <img/>
        <h3>{playlistName}</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class Search extends Component {
  render (){
    let searchStyle = {'display': 'inline-block', 'margin-right': '10px'}
    return(
      <div>
        <img/>
        <div>
          <input type="text" style={searchStyle}/>
          <div style={searchStyle}/>Search
        </div>
      </div>
    )
  }
}

class Aggregate extends Component {
  render () {
    let TimeTitle = {'display': 'inline-block', 'width': '40%', 'text-transform': 'uppercase'}
    return (
      <div style={TimeTitle}>Number Text</div>
    )
  }
}

class App extends Component {
  render() {
    let purple = 'purple'
    let titleStyle = {color: purple, 'font-size': '80px'}
    return (
      <div className="App">
        <h1 style={titleStyle}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Search/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
