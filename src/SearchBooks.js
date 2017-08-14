import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './components/Book';
import './App.css';


class SearchBooks extends Component {
  static propTypes = {
    searchBooks: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={(event) => this.props.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {this.props.searchBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelf={book.shelf}
                    moveBook={this.props.moveBook}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks
