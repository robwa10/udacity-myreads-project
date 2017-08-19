import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import CurrentBooks from './CurrentBooks';
import SearchBooks from './SearchBooks';
import Header from './components/Header';
import './App.css';
import * as BooksAPI from './BooksAPI';


class App extends Component {
  state = {
    books: [],
    searchResults: [],
    query: '',
    searchBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(this.state.books)
    });
  }

  filterBookShelf = (name) => {
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

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (this.state.query) {
      BooksAPI.search(this.state.query, 20).then((newBooks) => {
        if (newBooks.length) {
          newBooks.forEach((book) => {
            let thisBook = this.state.books.find((bar) => bar.title === book.title);
            book.shelf = thisBook ? thisBook.shelf : 'none';
          });
        }
        this.setState({ searchBooks: newBooks});
        this.state.searchBooks.sort(sortBy(this.state.searchBooks.title));
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <Header/>
            <CurrentBooks
              filterBookShelf={this.filterBookShelf}
              moveBook={this.moveBook}
            />
          </div>
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks
            moveBook={this.moveBook}
            searchBooks={this.state.searchBooks}
            query={this.state.query}
            updateQuery={this.updateQuery}
            debounce={this.debounce}
          />
        )}/>

      </div>
    )
  };
}

export default App;
