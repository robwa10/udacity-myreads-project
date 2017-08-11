import React, { Component } from 'react';
import '../App.css';
import MoveBookButton from './MoveBookButton.js';


class Book extends Component {
  render() {
    console.log('Props', this.props);
    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url("${this.props.coverImage}")` }}
        ></div>
        <MoveBookButton/>
      </div>
      <div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.bookAuthor}</div>
      </div>
    </div>
    );
  }
}

export default Book
