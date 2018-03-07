import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/videoDetails';
import YTSearch from'youtube-api-search';
import {config} from 'dotenv';

const API_KEY = process.env.REACT_APP_API_KEY;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
   return (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container'));
