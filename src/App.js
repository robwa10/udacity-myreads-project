import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks'
import BookShelf from './components/BookShelf';
import Header from './components/Header';
import SearchButton from './components/SearchButton';
import './App.css';
import * as BooksAPI from './BooksAPI';


class App extends Component {
    state = {
      books: [],
      searchResults: [],
    }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  filterBookShelf(name) {
    return this.state.books.filter((book) => book.shelf === name);
  }

  moveBook = (book, changeTo) => {
    BooksAPI.update(book, changeTo).then(() => {
            book.shelf = changeTo;
            this.setState(state => ({
                books: state.books.filter(b => b.title !== book.title).concat([ book ])
            }));
        });

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <Header/>
            <BookShelf
              title="Currently Reading"
              books={this.filterBookShelf("currentlyReading")}
              moveBook={this.moveBook}
            />
            <BookShelf
              title="Want To Read"
              books={this.filterBookShelf("wantToRead")}
              moveBook={this.moveBook}
            />
            <BookShelf
              title="Read"
              books={this.filterBookShelf("read")}
              moveBook={this.moveBook}
            />
            <SearchButton/>
          </div>
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks
            moveBook={this.moveBook}
            books={this.state.books}
          />
        )}/>

      </div>
    )
  }
}

export default App
