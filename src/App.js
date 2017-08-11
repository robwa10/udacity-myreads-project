import React, { Component } from 'react';
import BookShelf from './components/BookShelf';
import Header from './components/Header';
import SearchButton from './components/SearchButton';
import './App.css';
import * as BooksAPI from './BooksAPI';


class App extends Component {
  state = {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
    currentlyReading: [],
    wantToRead: [],
    read: [],
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <BookShelf
          title="Currently Reading"
          books={this.state.books}
        />

        <SearchButton/>
      </div>
    )
  }
}

export default App
