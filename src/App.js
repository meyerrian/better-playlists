import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user: {
    name: 'Rian',
    playlists: [
      {
        name: 'My Favourites',
        songs: [{name: 'beat it', duration: 12345}, {name:'Zelda OST', duration: 3849}, {name:'Rime OST', duration: 28172}]
      },
      {
        name: 'Weekly',
        songs: [{name:'Sim City OST', duration: 12345}, {name: 'GTA V', duration: 12345}, {name: 'GTA San An Dreas', duration: 12345}]
      },
      {
        name: 'Games',
        songs: [{name: 'Skate', duration: 39403}, {name: 'Madden', duration: 23644}, {name: 'NBA 2k', duration: 34433}]
      },
      {
        name: 'Beasts',
        songs: [{name: 'pres', duration: 24667}, {name: 'dj keem', duration:35534}, {name: 'No Homo', duration: 24450}]
      }
    ]
  }
};

class Playlist extends Component {
  render() {
    let playlistName = "Playlist Name"
    let playlistStyle = {'display': 'inline-block', 'width': '25%'}
    let playlist = this.props.playlist
    return(
      <div style={playlistStyle}>
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
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
          <input type="text" style={searchStyle} onKeyUp={event => this.props.onTextChange(event.target.value)}/>
          <div style={searchStyle}/>Search
        </div>
      </div>
    )
  }
}

class PlaylistCounter extends Component {
  render () {
    let TimeTitle = {'display': 'inline-block', 'width': '40%', 'text-transform': 'uppercase'}
    return (
      <div style={TimeTitle}>{this.props.playlists && this.props.playlists.length} playlists</div>
    );
  }
}

class Hours extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    let TimeTitle = {'display': 'inline-block', 'width': '40%', 'text-transform': 'uppercase'}
    return (
      <div style={TimeTitle}>{Math.round(totalDuration/60)} hours</div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 3000);
  }
  render() {
    let purple = 'purple'
    let titleStyle = {color: purple, 'font-size': '80px'}
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={titleStyle}>
              {this.state.serverData.user.name}'s Playlists
            </h1>
            <PlaylistCounter playlists= {this.state.serverData.user.playlists}/>
            <Hours playlists= {this.state.serverData.user.playlists}/>
            <Search onTextChange ={text =>{
              this.setState({filterString: text})
            }}/>
            {this.state.serverData.user.playlists.filter(playlist =>
              playlist.name.toLowerCase().includes(
                this.state.filterString.toLowerCase())
            ).map(playlist =>
              <Playlist playlist={playlist}/>
            )}
          </div> : <h2>Loading...</h2>
        }
      </div>
    );
  }
}

export default App;
