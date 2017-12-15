import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './album_detail';

class AlbumList extends Component {
  state = { albums: [] };
  
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(albums => this.setState({ albums }));
  }
  
  renderAlbums() {
    return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
    );
  }
  
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
