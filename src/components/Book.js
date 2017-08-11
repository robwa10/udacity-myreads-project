import React, { Component } from 'react';
import '../App.css'
import BookInfo from './BookInfo.js'
import MoveBookButton from './MoveBookButton.js'


class Book extends Component {
  render() {
    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url()' }}></div>
        <MoveBookButton/>
      </div>
      <BookInfo/>
    </div>
    );
  }
}

export default Book
