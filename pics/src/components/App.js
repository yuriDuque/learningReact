import React from 'react';
import axios from 'axios';

import SearchBar from './SeachBar';

const api = 'https://api.unsplash.com/'
class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get(`${api}search/photos`, {
      headers: {
        Authorization: 'Client-ID b99d71b8036f689bdd4479cfb33d7a253379dd485a20b2ed7d2fc150e67c0c73'
      },

      params: {
        query: term
      }
    });
    
    console.log(response.data.results)
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;

