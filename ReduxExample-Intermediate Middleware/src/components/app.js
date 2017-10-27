import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
