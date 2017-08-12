import React, { Component } from 'react';
import '../App.css';
import MoveBookButton from './MoveBookButton.js';


class Book extends Component {
  render() {
    return (
    <div className="book" id={this.props.book.id}>
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}
        ></div>
        <MoveBookButton moveBook={this.props.moveBook} />
      </div>
      <div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    </div>
    );
  }
}

export default Book
