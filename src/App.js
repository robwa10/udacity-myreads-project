import React, { Component } from 'react';
import BookShelf from './components/BookShelf';
import Header from './components/Header';
import SearchButton from './components/SearchButton';
import './App.css';

class App extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        <Header/>
        <BookShelf
          currentlyReading={this.state.currentlyReading}
          wantToRead={this.state.wantToRead}
          read={this.state.read}
        />
        <SearchButton/>
      </div>
    )
  }
}

export default App
