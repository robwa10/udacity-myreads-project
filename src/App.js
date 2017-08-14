import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
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
      query: '',
      searchBooks: [],
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

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (this.state.query) {
      BooksAPI.search(this.state.query, 20).then((books) => {
        this.setState({ searchBooks: books});
        this.state.searchBooks.sort(sortBy(this.state.searchBooks.title));
      })
    }
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
            searchBooks={this.state.searchBooks}
            query={this.state.query}
            updateQuery={this.updateQuery}
          />
        )}/>

      </div>
    )
  }
}

export default App
